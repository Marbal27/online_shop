<template>
    <div class="category">
        <input type="radio" v-model="category" @click="(this.category = 'jewelery'), getDataOption()" />
        <input type="radio" v-model="category" @click="(this.category = 'electronics'), getDataOption()" />
        <!-- <!— <input type="radio" v-model=category @click="this.category = men's clothing', getCategory()" />
        <input type="radio" v-model=category @click="this.category = women's clothing, getCategory()" /> —> -->
    </div>
    

    <div class="catalog-item" v-for="(product, index) in products" :key="index">
        <div class="catalog-item__card">
            <img :src="product.image" height="110" width="110">
            <a class="catalog-item__name">{{ product.title }}</a>
            <a>{{ product.category }}</a>
            <h2 style="font-family:'Oswald';">{{ product.price * 68 }}руб</h2>
            <button class="catalog-item__button">Добавить в корзину</button>
            <div class="rating">

                <star-rating :rating="product.rating.rate" class="rating__star" v-bind:star-size="20"></star-rating>

            </div>

        </div>

    </div>
</template>

<script>
import StarRating from 'vue-star-rating';
export default {
    name: "CatalogItem",
    components: {
        StarRating,
    },
    props: {


    },

    data() {
        return {
            model: false,
            products: [],
            category: ''
        }
    },
    methods: {
        getDataOption() {
            this.products = [];
                fetch("https://fakestoreapi.com/products/category/" + this.category)
                    .then((res) => res.json())
                    .then((json) => (this.data = json));
        },
    },

    mounted() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => { this.products = json })
    },

}
</script>

<style>
.rating__star {
    font-size: 50%;

}

.rating__value {
    font-size: 50%;

}

img {
    border-radius: 7px;
}

.catalog-item {

    width: 163px;
    height: 100%;
    background: #fff4f2;
    border-radius: 10px;
    margin-bottom: 37px;

}

.catalog-item:hover {
    background: #ffd4d4;
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

.catalog-item__button {
    width: 100px;
    height: 60px;
    text-align: center;
    display: block;
    font-family: 'Oswald';
    font-weight: 300;
    font-size: 16px;
    border: #ffffff 3px solid;
    color: #ffffff;
    background-color: #e087a4;
    transition: .5s;
    border-radius: 7px;
    margin: 6px;
    margin-left: 10px;
}

.catalog-item__button:hover {
    top: 5px;
    transition: .5s;
    color: #b95454;
    border: #b95454 3px solid;

}

.catalog-item__button:active {
    color: rgb(0, 0, 0);
    border: #000000 3px solid;
    transition: .07s;
}

.rating {
    display: flex;
    align-items: flex-end;
    font-size: 25px;
    line-height: 0.75;
    justify-content: center;
    padding-bottom: 20px;
}
</style>