<template>
    <div class="category-catalog">
        <div class="category" style="font-family: 'Oswald'; margin-bottom: 25px;">
            <input type="radio" @click="getDataOptionALL()" id="all" />
            <label for="all">Все</label>
            <input type="radio" v-model="category" @click="(this.category = 'jewelery'), getDataOption()"
                id="jewelery" />
            <label for="jewelery">Украшения</label>
            <input type="radio" v-model="category" @click="(this.category = 'electronics'), getDataOption()"
                id="electronics" />
            <label for="electronics">Электроника</label>
            <input type="radio" v-model="category" @click='(this.category = men), getDataOption()'
                id="men's clothing" />
            <label for="men's clothing">Мужская одежда</label>
            <input type="radio" v-model="category" @click='(this.category = women), getDataOption()'
                id="women's clothing" />
            <label for="women's clothing">Женская одежда</label>
        </div>

        <div class="catalog-title">
            <div class="catalog-item" v-for="(product, index) in products" :key="index">
                <div class="catalog-item__card" @click="(this.window==true? this.window=false:this.window=true),
    (this.price = card.price),
    (this.title = card.title),
    (this.description = card.description),
    (this.rating_rate = card.rating.rate),
    (this.rating_count = card.rating.count),
    (this.img = card.image)">
                    <img :src="product.image" height="110" width="110">
                    <a class="catalog-item__name">{{ product.title }}</a>
                    <a>{{ product.category }}</a>
                    <h2 style="font-family:'Oswald';">{{ product.price * 68 }}руб</h2>
                    <button class="catalog-item__button">Добавить в корзину</button>
                    <div class="rating">
                        <star-rating :rating="product.rating.rate" class="rating__star"
                            v-bind:star-size="20"></star-rating>
                    </div>

                </div>

            </div>
        </div>
      
        <div :class="this.window">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-container">

                        <div class="modal-header">
                            <slot name="header">
                                default header
                            </slot>
                        </div>

                        <div class="modal-body">
                            <slot name="body">
                                default body
                            </slot>
                        </div>

                        <div class="modal-footer">
                            <slot name="footer">
                                default footer
                                <button class="modal-default-button" @click="this.window=false">OK</button>
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        <div class="pagination">
            <div class="pagination-item">
                <button type="button" @click="direction = -1, getNewPage(), page -= 1">Назад</button>
            </div>
            <div>
                {{ this.page }}
            </div>
            <div class="pagination-item">
                <button type="button" @click="direction = 1, getNewPage(), page += 1">Вперёд</button>
            </div>
        </div>
    </div>

</template>

<script>
import StarRating from 'vue-star-rating';

export default {
    name: "CatalogItem",
    components: {
        StarRating,
    },
    props: {


    },

    data() {
        return {
            model: false,
            products: [],
            page_one: [],
            id: '',
            direction: 0,
            page: 1,
            category: '',
            men: "men's clothing",
            women: "women's clothing",
            window: false,
        }
    },


    methods: {
        getDataOption() {
            this.products = [];
            fetch("https://fakestoreapi.com/products/category/" + this.category)
                .then((res) => res.json())
                .then((json) => (this.products = json));
        },
        getDataOptionALL() {
            this.products = [];
            fetch("https://fakestoreapi.com/products/")
                .then((res) => res.json())
                .then((json) => (this.products = json));
        },
        // getNewPage() {
        //     if (this.direction == 1) {
        //         for (let i = this.id; i < i + 10; i++) {
        //             this.page_one[i] = this.products[i + 10]
        //         }
        //     }
        //     else if (this.direction == -1) {
        //         if (this.products[0].id != 1) {
        //             for (let i = this.id; i < i - 10; i--) {
        //                 this.page_one[i] = this.products[i - 10]
        //             }
        //         }

        //     }
        // },

    },

    mounted() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => { this.products = json })
    },


}
</script>

<style>

.category-catalog {
    display: flex;
    flex-direction: column;
}

.catalog-title {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

}

.rating__star {
    font-size: 50%;

}

.rating__value {
    font-size: 50%;

}

img {
    border-radius: 7px;
}

.catalog-item {
    width: 163px;
    height: 100%;
    background: #fff4f2;
    border-radius: 10px;
    margin-bottom: 37px;

}

.catalog-item:hover {
    background: #ffd4d4;
}

.catalog-item__name {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}

.catalog-item__card {
    text-align: center;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
}

a {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    padding-top: 15px;
    color: #000000;
}

.catalog-item__button {
    width: 100px;
    height: 60px;
    text-align: center;
    display: block;
    font-family: 'Oswald';
    font-weight: 300;
    font-size: 16px;
    border: #ffffff 3px solid;
    color: #ffffff;
    background-color: #e087a4;
    transition: .5s;
    border-radius: 7px;
    margin: 6px;
    margin-left: 10px;
}

.catalog-item__button:hover {
    top: 5px;
    transition: .5s;
    color: #b95454;
    border: #b95454 3px solid;

}

.catalog-item__button:active {
    color: rgb(0, 0, 0);
    border: #000000 3px solid;
    transition: .07s;
}

.rating {
    display: flex;
    align-items: flex-end;
    font-size: 25px;
    line-height: 0.75;
    justify-content: center;
    padding-bottom: 20px;
}

.pagination {
    display: flex;
    justify-content: center;
}

.pagination-item {}

.active {
    background-color: #f28d8d;
    color: #ffffff;
}

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.modal-default-button {
    float: right;
}

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>