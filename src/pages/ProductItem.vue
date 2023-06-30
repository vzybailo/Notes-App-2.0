<template>
    <div class="product item">
        <div class="product__slider">
            <carousel
                :scrollPerPage="true"
                :paginationEnable = "true"
                :perPage = "1"
                paginationColor = "b3b3b3"
                paginationActiveColor = "494ce8"
            >
                <slide v-for="(slide, index) in product.gallery" :key="index">
                    <img :src="slide.img" :alt="product.title">
                </slide>
            </carousel>
        </div>
        <div class="product__content">
            <h1>{{product.title}}</h1>
            <p>{{ product.descr }}</p>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            product: null
        }
    },
    created() {
        let id = this.$route.params.id
        this.product = this.$store.getters.getProduct(id)
    }
}
</script>
