<script setup>
import { ref } from "vue";
import VueTailwindDatepicker from "vue-tailwind-datepicker";
import { useSalesStore } from "@/stores/sales";
import SalesDetails from "@/components/SalesDetails.vue";
import { formatCurrency } from "@/helpers";
const sales = useSalesStore();

const formatter = ref({
  date: "DD/MM/YYYY",
  month: "MMMM",
});
</script>
<template>
  <h1 class="text-2xl font-black my-10">Resumen de ventas</h1>

  <div class="md:flex md:items-start gap-5">
    <div class="md:w-1/2 lg:w-1/3 bg-white flex justify-center py-14">
      <VueTailwindDatepicker
        i18n="es"
        as-single
        no-input
        v-model="sales.date"
        :formatter="formatter"
      />
    </div>
    <div
      class="md:w-1/2 lg:w-2/3 space-y-5 lg:h-screen lg:overflow-y-scroll p-5 pb-32"
    >
      <p
        v-if="!sales.isDateSelected"
        class="text-xl text-center mt-32 font-bold text-gray-700"
      >
        No hay <span class="text-green-700">una fecha</span> seleccionada
      </p>
      <div v-else-if="sales.salesColletion.length" class="space-y-5">

        <div class="flex justify-between mb-10">
          <p class="text-center text-lg">
            Resumen de ventas del:
            <span class="font-bold">{{ sales.date }}</span>
          </p>
          <p>
            Total día:
            <span class="font-black text-2xl">
              {{ formatCurrency(sales.totalSalesOfDay) }}</span
            >
          </p>
        </div>
        
        <SalesDetails
          v-for="sale in sales.salesColletion"
          :key="sale.id"
          :sale="sale"
        />
      </div>
      <p v-else class="text-xl text-center mt-32 font-bold text-gray-700">
        No hay <span class="text-green-700">ventas</span> para la fecha
        seleccionada
      </p>
    </div>
  </div>
</template>


