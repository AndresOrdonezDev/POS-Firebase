<script setup>
import Link from "@/components/Link.vue";
import { useProductsStore } from "@/stores/products";

import Product from "@/components/Product.vue";

const products = useProductsStore();
</script>
<template>
  <div>
    <Link to="new-product"> Nuevo producto </Link>
    <h1 class="text-2xl font-black my-10">Listado de productos</h1>

    <p v-if="products.noResults" class="text-2xl text-center font-extrabold">No hay resultados</p>

    <ul
      v-else
      role="list"
      class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5"
    >
      <Product
        v-for="product in products.productsCollection"
        :key="product.id"
        :product="product"
      />
    </ul>
  </div>
</template>


