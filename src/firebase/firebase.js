import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from "./config";
import {queue} from "rxjs/internal/scheduler/queue";


class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    login = async (email, password) => {

        const query = this.db.collection("users").where('email', '==', email)
            .where('password', '==', password)
            .limit(1);
        const data = await query.get();
        if(!data.empty) {
            let user = null;
            data.forEach(row => user = row.data());
            return user;
        }
        else {
            return false;
        }
    };

    getCategories = async (currentCategory = null) => {

        const query = currentCategory
            ? this.db.collection("categories").where('parent', '==', currentCategory.key)
            : this.db.collection("categories").where('parent', '==', '');

        const data = await query.get();

        if (!data.empty) {
            let categories = [];
            data.forEach(category => categories.push({key: category.id, ...category.data()}));
            return categories;
        }
        else return null;
    };

    getProducts = async (currentCategory = null, priceRange = null, searchQuery = null, sortBy = null) => {
        let query;
        const applyFilters = async (query) => {
            query = this.applyPriceFilter(query, priceRange);
            query = this.applySearchProducts(query, searchQuery);
            query = this.applySortBy(query, sortBy);
            return query.limit(10).get();
        };

        query = this.db.collection("products");
        if (currentCategory) {
            query = query.where('category', '==', currentCategory.key);
        }

        const data = await applyFilters(query);
        let products = [];
        if (!data.empty) {
            data.forEach(product => products.push(product.data()));
            return products;
        }
        else if (currentCategory) {
            const childCategories = await this.getChildCategories(currentCategory);
            if (childCategories.length) {
                let query = this.db.collection("products").where('category', 'in', childCategories);
                const data = await applyFilters(query);
                let products = [];
                data.forEach(product => products.push(product.data()));
                return products;
            }
        }
    };

    applySearchProducts = (query, searchQuery) => {
        if (searchQuery) {
            return query.where("keywords", "array-contains", searchQuery.toLowerCase());
        } else {
            return query;
        }
    };

    applyPriceFilter = (query, priceRange) => {
        if (priceRange) {
            return query.where("price", ">=", priceRange[0]).where("price", "<=", priceRange[1]);
        } else {
            return query;
        }
    };

    applySortBy = (query, sortBy) => {
        switch (sortBy) {
            case 'price-asc':
                return query.orderBy("price");
            case 'price-desc':
                return query.orderBy("price", "desc");
            case 'name-asc':
                return query.orderBy("name");
            case 'name-desc':
                return query.orderBy("name", "desc");
            case null:
                return query;
        }
    };

    getChildCategories = async (parentCategory) => {
        let childCategories = [];
        const getChilds = async (parentCategory) => {
            const tempChildCategories = await this.db.collection("categories").where('parent', '==', parentCategory).get();
            const tempCategoriesKeys = [];

            tempChildCategories.forEach( category => {
                tempCategoriesKeys.push(category.id);
            });

            const promises = tempCategoriesKeys.map(async categoryKey => {
                childCategories.push(categoryKey);
                await getChilds(categoryKey);
            });

            await Promise.all(promises);
        };
        await getChilds(parentCategory.key);
        return childCategories;
    };

    getParentCategory = async (category) => {
         const parentCategory = await this.db.collection("categories").doc(category.parent).get();
         return {key: parentCategory.id, ...parentCategory.data()};
    };

    getProductPriceScopes = async () => {
        const minPriceProduct = await this.db.collection("products").orderBy("price").limit(1).get();
        const maxPriceProduct = await this.db.collection("products").orderBy("price", "desc").limit(1).get();

        let min = 0;
        let max = 0;
        minPriceProduct.forEach(product => min = product.data().price);
        maxPriceProduct.forEach(product => max = product.data().price);

        return [min, max];
    };

    generateProductsKeywords = async () => {
        const productsCollection = await this.db.collection("products").get();

        productsCollection.forEach(productItem => {
            const title = productItem.data().name.toLowerCase();
            const keywordsArray = [];
            for (let i = 1; i < title.length + 1; i++) {
                keywordsArray.push(title.substring(0, i));
            }
            this.db.collection("products").doc(productItem.id).update({
                ...productItem.data(),
                keywords: keywordsArray
            });
        });
    };
}

export default Firebase;
