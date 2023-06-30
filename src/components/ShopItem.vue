<template>
    <div class="item">
        <img :src="product.img" :alt="product.title">
        <router-link class="product__link" :to="/shop/ + product.id">{{ product.title}}</router-link>
    </div>
</template>

<script>

export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
    .item {
        text-align: center;
        width: 48%;
        margin-bottom: 40px;
    }
    .product__link {
        color: #efd1ad;
        text-decoration: none;
    }
</style>
