<script setup>
import { useCouponStore } from "../stores/cuopuns";
const store = useCouponStore();
</script>
<template>
  <p
    class="mt-5 py-5 font-bold border-t border-gray-200 text-center text-gray-700"
  >
    ¿Tienes un cupón?
  </p>
  <div class="flex">
    <input
      v-model="store.couponInput"
      class="disabled:opacity-30 p-2 bg-white border-gray-300 w-full text-center rounded-tl-lg rounded-bl-lg uppercase"
      type="text"
      placeholder="Ingresa el código"
      :disabled="store.isValidCoupon"
    />
    <button
      @click="store.applyCoupon"
      class="p-3 bg-green-400 font-bold rounded-tr-lg rounded-br-lg disabled:opacity-30"
      type="button"
      :disabled="store.isValidCoupon"
    >
      Canjear
    </button>
  </div>
  <p 
    v-if="store.cuoponValidationMessage"
    class=" text-center p-1 mt-3 rounded font-bold"
    :class="store.cuoponValidationMessage === 'Cupón no encontrado' ? 'bg-red-400' : 'bg-green-500'"
    >{{ store.cuoponValidationMessage }}</p>
</template>