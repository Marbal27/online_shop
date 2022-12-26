<template>
    <div class="catalog-item" v-for="(product,index) in products" :key="index">
        <h3>{{ product.title }}</h3>
        <img :src="product.image" height="70" width="70">
        <p>Цена: {{ product.price }}</p>
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
            .then(res=>res.json())
            .then(json=>{this.products=json})
    }
}
</script>

<style>

</style>