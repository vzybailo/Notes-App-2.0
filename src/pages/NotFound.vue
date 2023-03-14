<template>
    <div class="notFound">
        <h1>Oooops! Page not found! </h1>
        <p>Go to <router-link class="notFound__link" to="/">main page</router-link></p>
        <img class="notFound__img" src="../img/404.webp" alt="">
    </div>
</template>

<script>

</script>

<style scoped>
.notFound {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}
.notFound__link {
    color: yellow;
    text-decoration: none;
}
.notFound__img {
    width: 25%;
}
</style>
