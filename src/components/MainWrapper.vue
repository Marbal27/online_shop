<template>
    <div class="main-wrapper">
        <p>hello</p>
    </div>

    <catalog-page></catalog-page>
    <cart-page></cart-page>


</template>

<script>
import CatalogPage from './CatalogPage.vue'
import CartPage from './CartPage.vue'

export default {
    name: 'MainWrapper',
    components: {
        CatalogPage,
        CartPage,
    },
   
    data() {
        return {

        }
    }
}
</script>

<style>

</style>