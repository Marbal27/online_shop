<template>
    <div class="select-page">
        <div class="title" @click="areOptionsVisible = !areOptionsVisible">{{ selected }}</div>
        <div class="options" v-if="areOptionsVisible">
            <p v-for="option in options" :key="option.value" @click="selectOption(option)">
                {{ option.name }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SelectPage',
    props: {
        options: {
            type: Array,
            default() {
                return []
            }
        },
        selected: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            areOptionsVisible: false,
        }
    },
    methods: {
        selectOption(option) {
            this.$emit('select', option)
            this.areOptionsVisible = false
        }
        
    },
    
    
}
</script>

<style>
.title {
    border: solid 1px;
}

.select-page {
    position: relative;
    width: 200px;
    cursor: pointer;
}

.select-page p {
    margin: 0;
}

.options {
    border: solid 1px;
    position: absolute;
    top: 20px;
    right: 0;
    width: 100%;
    background: #ffffff;
}

.options p:hover {
    background: #e7e7e7;
}
</style>