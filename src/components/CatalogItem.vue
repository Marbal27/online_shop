<template>
    <div class="catalog-item" v-for="(product, index) in products" :key="index">
        <div class="catalog-item__card">
            <img :src="product.image" height="110" width="110">
            <a class="catalog-item__name">{{ product.title }}</a>
            <a>{{ product.category }}</a>
            <h2 style="font-family: 'Oswald'; ">{{ product.price * 68 }}руб</h2>
            <div class="rating">
                <div class="rating__body">
                    <div class="rating__active"></div>
                    <div class="rating__items">
                        <input type="radio" class="rating__item" name="rating" value="1">
                        <input type="radio" class="rating__item" name="rating" value="2">
                        <input type="radio" class="rating__item" name="rating" value="3">
                        <input type="radio" class="rating__item" name="rating" value="4">
                        <input type="radio" class="rating__item" name="rating" value="5">
                    </div>
                </div>
                <div class="rating__value">{{ product.rating.rate }}</div>
            </div>

        </div>

    </div>
</template>

<script>

export default {
    name: "CatalogItem",
    components: {
    },

    data() {
        return {
            model: false,
            products: [],
        }
    },
    mounted() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => { this.products = json })
    },

}
</script>

<style>
.catalog-item {
    /* flex-basis: 20%; */
    width: 163px;
    height: 100%;
    background: #fff4f2;
    border-radius: 10px;
    margin-bottom: 37px;

}

.catalog-item__name {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}

.catalog-item__card {
    text-align: center;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
}

a {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    padding-top: 15px;
    color: #000000;
}

.rating {
    display: flex;
    align-items: flex-end;
    font-size: 25px;
    line-height: 0.75;
    justify-content: center;
    padding-bottom: 20px;
}

.rating__body {
    position: relative;
}

.rating__body::before {
    content: "★★★★★";
    display: block;
}

.rating__active {
    position: absolute;
    width: 0%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
}

.rating__active::before {
    content: "★★★★★";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: yellow;
}

.rating__items {
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.rating__item {
    flex: 0 0 20%;
    height: 100%;
    opacity: 0;
}

.rating__value {
    font-size: 50%;
    line-height: 1;
    padding: 0px 0px 0px 10px;
}
</style>