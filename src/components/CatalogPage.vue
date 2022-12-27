<template>
    <div class="catalog-page">
        <p>Каталог товаров</p>
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
    }
}
</script>

<style>
.catalog-page__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    
}
</style>