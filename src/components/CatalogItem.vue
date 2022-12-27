<template>
    <div class="catalog-item" v-for="(product, index) in products" :key="index">
        <div class="catalog-item__card">
            <img :src="product.image" height="110" width="110">
            <h5 class="catalog-item__name">{{ product.title }}</h5>
            <h5>{{ product.category }}</h5>
            <h2>{{ product.price *68}}руб</h2>
            
        </div>

    </div>
</template>

<script>
export default {
    name: "CatalogItem",
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
    }
}
</script>

<style>
.catalog-item {
    /* flex-basis: 20%; */
    width: 163px;
    height: 288px;
    background: #fff4f2;
    border-radius: 10px;
    margin-bottom: 37px;
}

.catalog-item__name{
    overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
</style>