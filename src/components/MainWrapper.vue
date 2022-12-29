<template>
    <div class="main-wrapper">
        <div class="header">
            <div class="header-left">
                <img src="@/assets/логотип.png">
                <div class="header-left__text1">Покупки в радость</div>
                <div class="header-left__category">
                    <!-- <select-page :options="options" v-model="category"
                    @select="optionSelect" :selected="selected"></select-page> -->
                </div>
            </div>
            <div class="header-ridth">

            </div>
        </div>
    </div>

    <catalog-page></catalog-page>
    <!-- <paginate-page :totalPages="2" :perPage="10" :currentPage="currentPage"
        @pagechanged="onPageChange"></paginate-page> -->

</template>

<script>
import CatalogPage from './CatalogPage.vue'
// import SelectPage from './SelectPage.vue'
// import PaginatePage from './PaginationPage.vue'

export default {
    name: 'MainWrapper',
    components: {
        CatalogPage,
        // PaginatePage,
    },

    data() {
        return {
            
            category: "",
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
    //     onPageChange(page) {
    //   console.log(page)
    //   this.currentPage = page;
    // },
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