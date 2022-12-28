<template>
    <div class="main-wrapper">
        <div class="header">
            <div class="header-left">
                <img src="@/assets/логотип.png">
                <div class="header-left__text1">Покупки в радость</div>
                <div class="header-left__category">
                    <div class="header-left__text2">Выберите категорию</div>
                    <!-- <select-page :options="categories" @select="optionSelect" :selected="selected"></select-page> -->
                    <select-page :options="options" v-model="category"
                    @select="optionSelect" :selected="selected"></select-page>
                </div>
            </div>
            <div class="header-ridth">

            </div>
        </div>
    </div>

    <!-- <p>{{ selected }}</p> -->

    <catalog-page></catalog-page>
    <cart-page></cart-page>


</template>

<script>
import CatalogPage from './CatalogPage.vue'
import CartPage from './CartPage.vue'
import SelectPage from './SelectPage.vue'

export default {
    name: 'MainWrapper',
    components: {
        CatalogPage,
        CartPage,
        SelectPage,
    },

    data() {
        return {
            category: "",
            // data: [],
            options: [
                { name: "Все", value: 1 },
                { name: "men's clothing", value: 2 },
                { name: "women's clothing", value: 3 },
                { name: 'jewelery', value: 4 },
                { name: 'electronics', value: 5 }
            ],
            selected: 'Все',
            sortedProducts: []
        }
    },
    methods: {
        // getDataOption() {
        //     this.data = [];
        //     fetch("https://fakestoreapi.com/products/category/" + this.category.name)
        //         .then(res => res.json())
        //         .then(json => {this.data = json});
        // }
        optionSelect(category) {
            this.selected = category.name
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

</style>