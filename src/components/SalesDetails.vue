<script setup>
import { formatCurrency } from "@/helpers";
import Amount from "./Amount.vue";
defineProps({
  sale: {
    type: Object,
  },
});
</script>
<template>
  <div class="border-t border-gray-200 space-y-6 py-5">
    <h2 class="text-xl font-black text-gray-600">Detalles de venta:</h2>
    <p class="text-gray-500">Productos vendidos</p>

    <ul
      role="list"
    >
      <li
        class="flex space-x-8 border-t py-5"
        v-for="item in sale.items"
        :key="item.id"
      >
        <img
          :src="item.image"
          alt="imegen producto"
          class="w-24 h-24 rounded-md"
        />
        <div class="flex-auto">
          <h3 class="text-gray-900">{{ item.name }}</h3>
          <p>{{ formatCurrency(item.price) }}</p>
          <p>cantidad: {{ item.quantity }}</p>
        </div>
      </li>
    </ul>
    <dl
          class="space-y-1 border-t border-gray-200 pt-6 text-sm font-medium text-gray-500"
        >
          <Amount>
            <template #label>Subtotal:</template>
            {{ formatCurrency(sale.subtotal) }}
          </Amount>
          <Amount>
            <template #label>Impuestos:</template>
            {{ formatCurrency(sale.taxes) }}
          </Amount>
          <Amount v-if="sale.discount" class="bg-green-50">
            <template #label>Descuento:</template>
            {{ formatCurrency(sale.discount) }}
          </Amount>
          <Amount>
            <template #label>Total pagado:</template>
            {{ formatCurrency(sale.total) }}
          </Amount>
        </dl>
  </div>
</template>


