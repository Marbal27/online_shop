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
    <select-page :options="options" @select="optionSelect" :selected="selected"></select-page>
    <p>{{ selected }}</p>

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
            options: [
            {name: 'Option 1', value: 1},
            {name: 'Option 2', value: 2},
            {name: 'Option 3', value: 3},
            {name: 'Option 4', value: 4},
            {name: 'Option 5', value: 5},
            ],
            selected: 'Select'
        }
    },
    methods: {
        optionSelect(option) {
            this.selected = option.name
        }
    }
}
</script>

<style>

</style>