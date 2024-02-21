<script setup>
import { useProductsStore } from "@/stores/products";
import Link from "./Link.vue";
import Logo from "./Logo.vue";
const products = useProductsStore()
</script>
<template>
  <header
    class="px-10 py-10 bg-gray-700 flex flex-col lg:flex-row gap-5 lg:items-center justify-between absolute top-0 w-full z-10"
  >
    <div >
      <Logo/>

      <div class="flex flex-col items-center lg:flex-row gap-5 text-white mt-5">
        <h2 class="text-lg font-extrabold">Filtros:</h2>

        <div 
          class="flex items-center gap-2"
          v-for="category in products.categories"
          :key="category.id"
        >
          <label class="text-gray-100">{{ category.name }}</label>
          <input 
            class="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
            type="radio"
            name="category"
            :value="category.id"
            :checked="products.selectedCategory === category.id"
            @change="products.selectedCategory = +$event.target.value"

          >
        </div>
      </div>
    </div>
    <nav class="mx-auto lg:mx-0">
      <Link to="sales"> Admin </Link>
    </nav>
  </header>
</template>


