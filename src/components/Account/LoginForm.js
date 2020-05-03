import React, {useState, useContext} from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useFirebase} from "../../firebase/hooks";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAuthenticationServiceContext } from "../../services/authentication/hooks";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    input: {
        display: 'block',
    },
}));

const LoginForm = () => {

    const authenticationService = useAuthenticationServiceContext();

    const classes = useStyles();

    const firebase = useFirebase();

    const handleSubmit = async (data) => {
        const user = await firebase.login(data.email, data.password);

        if (user) {
            authenticationService.login(user);
        }
        else {
            alert('Try again.')
        }
    };


    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .email('Email is invalid')
                            .required('Email is required'),
                        password: Yup.string()
                            .min(6, 'Password must be at least 6 characters')
                            .required('Password is required')
                    })
                }
                onSubmit={handleSubmit}
            >

                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset
                    } = props;
                    return (
                        <Container maxWidth="sm">
                            <Form>
                                <div>
                                    <TextField
                                        id="email"
                                        name="email"
                                        helperText={(errors.email && touched.email ? ' is-invalid' : '')}
                                        label="Email"
                                        value={values.email}
                                        onChange={handleChange}
                                        className={classes.input + ' form-control' + (errors.email && touched.email ? ' is-invalid' : '')}
                                    />
                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                    <TextField
                                        id="password"
                                        name="password"
                                        label="Password"
                                        type="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        className={classes.input + ' form-control' + (errors.password && touched.password ? ' is-invalid' : '')}
                                    />
                                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                    <input
                                        type="submit"
                                        value="Login"
                                        className={classes.input}
                                    />
                                </div>
                            </Form>
                        </Container>
                    )}
                }
            </Formik>
        </div>
    );
};

export default LoginForm;
