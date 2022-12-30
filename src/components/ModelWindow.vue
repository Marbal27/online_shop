<template>
    <div class="model-window">
        <div class="modal-wrapper" @click.self="close">
            <div class="modal-container">
                <div class="modal-header" style="font-family:'Oswald';">
                    <div>{{ title }}</div>
                    <div style="height: 200px; width: 200px">{{ img }}</div>
                    <div>{{ description }}</div>
                    <h2>{{ price * 68 }} руб</h2>
                    <div>{{ rating_rate }}</div>
                    <div>{{ rating_count }}</div>
                </div>
                <div class="modal-footer" @click="close">
                    <button class="modal-footer__button">OK</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            // products: [],
        }
    },
    props: {
        title: { default: '' },
        img: { default: '' },
        price: { default: 0 },
        description: { default: '' },
        rating_rate: { default: 0 },
        rating_count: { default: 0 }
    },
    methods: {
        close() {
            this.$emit('close')
        }
    },
    // mounted() {
    //     fetch('https://fakestoreapi.com/products')
    //         .then(res => res.json())
    //         .then(json => { this.products = json })
    // },
}
</script>

<style>
.modal-wrapper {
    position: fixed;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;

}

.modal-container {
    max-width: 300px;
    margin: 0px auto;
    margin-top: 70px;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-footer__button {
    cursor: pointer;
    width: 50px;
    height: 30px;
    text-align: center;
    display: block;
    font-family: 'Oswald';
    font-weight: 300;
    font-size: 16px;
    border: #a24545 3px solid;
    color: #ffffff;
    background-color: #e087a4;
    transition: .5s;
    border-radius: 7px;
}
</style>