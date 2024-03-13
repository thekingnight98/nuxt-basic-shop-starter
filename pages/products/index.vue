<template>
  <div class="container">
    <div v-for="product in data.products" :key="product.id">
      <NuxtLink :to="`/products/${product.id}`">
        <h2 class="title">{{ product.title }}</h2>
      </NuxtLink>
      <img :src="product.thumbnail" alt="" srcset="" />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Arm shop | สินค้าทั้งหมด",
  meta: [
    {
      name: "description",
      content: "สินค้าทั้งหมด",
    },
  ],
});
const { data: data } = await useFetch(
  `https://dummyjson.com/products?limit=12`
);
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.container div {
  width: 300px;
  height: 300px;
  margin: 30px 15px;
  background: #333;
}

.title {
  text-align: center;
  font-size: 1.2em;
  color: white;
}
.container div:hover {
  background-color: orange;
}

img {
  width: 300px;
  height: 300px;
}
a {
  text-decoration: none;
}
</style>