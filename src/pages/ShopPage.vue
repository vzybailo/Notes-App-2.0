<template>
    <div class="shop__wrapper">
        <h1>Shop</h1>
        <div class="shop">
        <shopItem
            v-for="product in shopList"
            :key="product.id"
            :product="product"
        />
    </div>
    </div>
</template>

<script>
import shopItem from './../components/ShopItem.vue'

export default {
    components: {
        shopItem
    },
    data() {
        return {
            shopList: null
        }
    },
    created()  {
        this.shopList =  this.$store.getters.getShopList
    }
}
</script>

<style>
h1 {
    text-align: center;
}
.shop {
    display: flex;
    flex-wrap: wrap;
    width: 1250px;
    margin: 0 auto;
}
</style>
