<script setup>
import { useCartStore } from "../stores/cart";
import {useCouponStore} from '../stores/cuopuns'

import { formatCurrency } from "@/helpers";
import ShoppingCartItem from "./ShoppingCartItem.vue";
import Amount from "./Amount.vue";
import CouponForm from "./CouponForm.vue";


const cart = useCartStore();
const cuopon = useCouponStore()


</script>
<template>
  <p
    v-if="cart.isEmpty"
    class="text-xl text-center mt-32 font-bold text-gray-700"
  >
    No hay <span class="text-green-700">productos</span> en tu carrito
  </p>

  <div v-else>
    <p class="text-3xl font-bold text-gray-700">Resumen de venta</p>

    <ul role="list" class="mt-6 divide-y divide-gray-200">
        <ShoppingCartItem
            v-for="item in cart.items"
            :key="item.id"
            :item="item"
        />
    </ul>
    
    <dl class="space-y-4 border-t border-gray-200 pt-6 text-sm font-medium text-gray-500">
      <Amount>
        <template #label>Subtotal:</template>
        {{ formatCurrency(cart.subtotal) }}
      </Amount>
      <Amount>
        <template #label>Impuestos:</template>
        {{ formatCurrency(cart.taxes) }}
      </Amount>
      <Amount v-if="cuopon.isValidCoupon" class="bg-green-50">
        <template #label >Descuento:</template>
        {{ formatCurrency(cuopon.discount) }}
      </Amount>
      <Amount>
        <template #label>Total a pagar:</template>
        {{ formatCurrency(cart.total) }}
      </Amount>
    </dl>
    <CouponForm/>
    <button
      type="button"
      class="mt-28 w-full bg-indigo-600 hover:bg-indigo-700 transition text-white uppercase font-bold p-3 rounded"
      @click="cart.checkout"
    >
      Confirmar Compra
    </button>
  </div>
</template>


