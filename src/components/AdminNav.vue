<script setup>
import {RouterLink} from 'vue-router'
import Link from "./Link.vue";
import Logo from "./Logo.vue";
</script>
<template>
  <header
    class="px-10 py-10 bg-gray-700 flex flex-col justify-between absolute top-0 w-full z-10"
  >
    
    <Logo/>
    
    <nav class="flex flex-col align-items-center">
      <RouterLink 
        :to="{name:'products'}" 
        class="rounded text-white font-bold p-2 text-center"
      >
        Productos
      </RouterLink>
      <RouterLink 
        :to="{name:'sales'}" 
        class="rounded text-white font-bold p-2 text-center"
      >
        Ventas
      </RouterLink>
      <Link to="shop" class="text-center"> IR a Tienda </Link>
    </nav>
  </header>
</template>