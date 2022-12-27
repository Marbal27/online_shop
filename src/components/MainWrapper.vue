<template>
    <div class="main-wrapper">
        <div class="header">
            <div class="header-left">
                <img src="@/assets/логотип.png"> 
                <div class="header-left__text1">Покупки в радость</div>
                <div class="header-left__category">
                    <div class="header-left__text2">Выберите категорию</div>
                </div>
            </div>
            <div class="header-ridth">

            </div>
        </div>
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