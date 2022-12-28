<template>
    <div class="cart-page">
        <h1>Корзина</h1>
        <cart-item></cart-item>
    </div>
</template>

<script>
import CartItem from './CartItem.vue'

export default {
    name: "CartPage",
    components: {
        CartItem,
    }
}
</script>

<style>

</style>