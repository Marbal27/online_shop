<template>
        
    <div class="pagination-page">
        <!-- <ul class="pagination">
            <li class="pagination-item">
                <button type="button" @click="onClickPreviousPage" :disabled="isInFirstPage">
                    назад
                </button>
            </li>

            <li v-for="page in pages" :key="page.name" class="pagination-item">
                <button type="button" @click="onClickPage(page.name)" :disabled="page.isDisabled"
                    :class="{ active: isPageActive(page.name) }">
                    {{ page.name }}
                </button>
            </li>

            <li class="pagination-item">
                <button type="button" @click="onClickNextPage" :disabled="isInLastPage">
                    вперёд
                </button>
            </li>
        </ul> -->
    </div>
</template>

<script>

// export default {
//     data() {
//         return {
//         }
//     },
//     props: {
//         maxVisibleButtons: {
//             type: Number,
//             required: false,
//             default: 2
//         },
//         totalPages: {
//             type: Number,
//             required: true
//         },
//         perPage: {
//             type: Number,
//             required: true
//         },
//         currentPage: {
//             type: Number,
//             required: true
//         }
//     },
//     computed: {
//         isInFirstPage() {
//             return this.currentPage === 1;
//         },
//         isInLastPage() {
//             return this.currentPage === this.totalPages;
//         },
//         startPage() {
//             if (this.currentPage === 1) {
//                 return 1;
//             }

//             if (this.currentPage === this.totalPages) {
//                 return this.totalPages - this.maxVisibleButtons;
//             }

//             return this.currentPage - 1;
//         },
//         pages() {
//             const range = [];

//             for (
//                 let i = this.startPage;
//                 i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
//                 i++
//             ) {
//                 range.push({
//                     name: i,
//                     isDisabled: i === this.currentPage
//                 });
//             }

//             return range;
//         }
//     },
//     methods: {
//         onClickFirstPage() {
//             this.$emit('pagechanged', 1);
//         },
//         onClickPreviousPage() {
//             this.$emit('pagechanged', this.currentPage - 1);
//         },
//         onClickPage(page) {
//             this.$emit('pagechanged', page);
//         },
//         onClickNextPage() {
//             this.$emit('pagechanged', this.currentPage + 1);
//         },
//         onClickLastPage() {
//             this.$emit('pagechanged', this.totalPages);
//         },
//         isPageActive(page) {
//             return this.currentPage === page;
//         }
//     }
// };

</script>

<style>
/* .pagination {
    list-style-type: none;
}

.pagination-item {
    display: inline-block;
}

.active {
    background-color: #4AAE9B;
    color: #ffffff;
} */
</style>