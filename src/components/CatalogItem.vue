<template>
    <div class="category-catalog">
        <div class="category" style="font-family: 'Oswald'; margin-bottom: 25px;">
            <input type="radio" @click="getDataOptionALL()" id="all" />
            <label for="all" @click="getDataOptionALL()">Все</label>
            <input type="radio" v-model="category" @click="(this.category = 'jewelery'), getDataOption()"
                id="jewelery" />
            <label for="jewelery" @click="(this.category = 'jewelery'), getDataOption()">Украшения</label>
            <input type="radio" v-model="category" @click="(this.category = 'electronics'), getDataOption()"
                id="electronics" />
            <label for="electronics" @click="(this.category = 'electronics'), getDataOption()">Электроника</label>
            <input type="radio" v-model="category" @click='(this.category = men), getDataOption()'
                id="men's clothing" />
            <label for="men's clothing" @click='(this.category = men), getDataOption()'>Мужская одежда</label>
            <input type="radio" v-model="category" @click='(this.category = women), getDataOption()'
                id="women's clothing" />
            <label for="women's clothing" @click='(this.category = women), getDataOption()'>Женская одежда</label>
        </div>

        <div class="catalog-title">
            <div class="catalog-item" v-for="(product, index) in products" :key="index">
                <div class="catalog-item__card" @click="(windowOpen = true), (this.img =  product.image),
    (this.price =  product.price),
    (this.title =  product.title),
    (this.category_ = product.category),
    (this.description =  product.description),
    (this.rating_rate =  product.rating.rate),
    (this.rating_count =  product.rating.count)">
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

        <model-window v-if="windowOpen" @close="windowOpen = false"></model-window>

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
import ModelWindow from './ModelWindow.vue'

export default {
    name: "CatalogItem",
    components: {
        StarRating,
        ModelWindow
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
            windowOpen: false,
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


</style>