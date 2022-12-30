<template>
    <div class="model-window" >
        <div class="modal-wrapper" @click.self="close">
            <div class="modal-container">
                <div class="modal-header">
                    название
                </div>
                <div class="modal-body">
                    ОКНООООО
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
    methods: {
        close() {
            this.$emit('close')
        }
    }
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
    margin-top: 100px;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
}


</style>