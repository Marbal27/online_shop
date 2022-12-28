<template>
    <div class="catalog-page">
        <p>Каталог товаров:</p>

        <div class="catalog-page__list">

            <catalog-item></catalog-item>
        </div>
    </div>


</template>

<script>
import CatalogItem from './CatalogItem.vue'

export default {
    name: "CatalogPage",
    components: {
        CatalogItem,
    },
    data() {
        return {
           
        }

    },
    


    
}
</script>

<style>
.catalog-page__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

p {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding-top: 15px;
    color: #000000;
}
</style>