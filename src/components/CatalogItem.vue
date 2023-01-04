<template>
    <button class="catalog-button" @click="getNewPage()">Перейти в каталог</button>
    <div class="category-catalog">
        <div class="category" style="font-family: 'Oswald'; margin-bottom: 25px; ">
            <input type="radio" @click="getNewPage()" id="all" style="cursor: pointer;" />
            <label for="all" @click="getNewPage()" style="cursor: pointer;">Все</label>
            <input type="radio" v-model="category" @click="(this.category = 'jewelery'), getDataOption()" id="jewelery"
                style="cursor: pointer;" />
            <label for="jewelery" @click="(this.category = 'jewelery'), getDataOption()"
                style="cursor: pointer;">Украшения</label>
            <input type="radio" v-model="category" @click="(this.category = 'electronics'), getDataOption()"
                id="electronics" style="cursor: pointer;" />
            <label for="electronics" @click="(this.category = 'electronics'), getDataOption()"
                style="cursor: pointer;">Электроника</label>
            <input type="radio" v-model="category" @click='(this.category = men), getDataOption()' id="men's clothing"
                style="cursor: pointer;" />
            <label for="men's clothing" @click='(this.category = men), getDataOption()' style="cursor: pointer;">Мужская
                одежда</label>
            <input type="radio" v-model="category" @click='(this.category = women), getDataOption()'
                id="women's clothing" style="cursor: pointer;" />
            <label for="women's clothing" @click='(this.category = women), getDataOption()'
                style="cursor: pointer;">Женская одежда</label>
        </div>

        <!-- <div class="catalog-title" >
            <div class="catalog-item" v-for="(product, index) in products" :key="index">
                <div class="catalog-item__card" @click="(this.windowOpen = true), (this.id = product.id), (this.img = product.image),
    (this.price = product.price),
    (this.title = product.title),
    (this.category = product.category),
    (this.description = product.description),
    (this.rating_rate = product.rating.rate),
    (this.rating_count = product.rating.count)">
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

        </div> -->





        <div v-if="page != 1" class="catalog-title">
            <div class="catalog-item" v-for="(product, index) in page_one" :key="index">
                <div class="catalog-item__card" @click="(this.windowOpen = true), (this.id = product.id), (this.img = product.image),
    (this.price = product.price),
    (this.title = product.title),
    (this.category = product.category),
    (this.description = product.description),
    (this.rating_rate = product.rating.rate),
    (this.rating_count = product.rating.count)">
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

        <div v-if="page != 2" class="catalog-title">

            <div class="catalog-item" v-for="(product, index) in page_two" :key="index">
                <div class="catalog-item__card" @click="(this.windowOpen = true), (this.id = product.id), (this.img = product.image),
    (this.price = product.price),
    (this.title = product.title),
    (this.category = product.category),
    (this.description = product.description),
    (this.rating_rate = product.rating.rate),
    (this.rating_count = product.rating.count)">
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

        <model-window v-if="windowOpen" @close="windowOpen = false" :title="this.title" :img="this.img"
            :description="this.description" :price="this.price" :rating_rate="this.rating_rate"
            :rating_count="this.rating_count"></model-window>


        <div class="pagination">
            <div class="pagination-item">
                <button v-if="page != 1" class="pagination-item__button"
                    @click="direction = -1, getNewPage(), this.page -= 1">Назад</button>
            </div>
            <div style="font-family: 'Oswald'; margin: 10px">
                {{ this.page }}

            </div>
            <div class="pagination-item">
                <button v-if="page != 2" class="pagination-item__button"
                    @click="direction = 1, getNewPage(), this.page += 1">Вперёд</button>
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
    data() {
        return {
            model: false,
            products: [],
            page_one: [],
            page_two: [],
            id: 1,
            direction: 0,
            page: 1,
            category: '',
            men: "men's clothing",
            women: "women's clothing",
            windowOpen: false,
            limit: 10,
            img: '',
            price: 0,
            title: '',
            description: -1,
            rating_rate: 0,
            rating_count: 0,

        }
    },

    methods: {

        getDataOption() {
            this.products = [];
            fetch("https://fakestoreapi.com/products/category/" + this.category)
                .then((res) => res.json())
                .then((json) => (this.page_one = json))
                .then((json) => (this.page_two = json));
        },
        // getDataOptionALL() {
        //     this.products = [];
        //     fetch("https://fakestoreapi.com/products/")
        //         .then((res) => res.json())
        //         .then((json) => (this.products = json));
        // },

        getNewPage() {
            this.page_one = this.products.slice(10, 20)
            this.page_two = this.products.slice(0, 10)
            if (this.page == 1) {
                console.log(this.page_one)
                window.scrollTo(0, 0);
            }
            else if (this.page == 2) {
                console.log(this.page_two)
                window.scrollTo(0, 0);
            }

        },

    },

    mounted() {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(json => { this.products = json })
    },


}
</script>

<style>
.catalog-button {}

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
    cursor: pointer;
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
    cursor: pointer;

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

.pagination-item__button {
    width: 70px;
    height: 40px;
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
}

.pagination-item__button:hover {
    top: 5px;
    transition: .5s;
    color: #b95454;
    border: #b95454 3px solid;
    cursor: pointer;

}

.pagination-item__button:active {
    color: rgb(0, 0, 0);
    border: #000000 3px solid;
    transition: .07s;
}
</style>