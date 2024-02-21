<script setup>
import { reactive } from "vue";
import {useRouter} from 'vue-router'
import Link from "@/components/Link.vue";
import useImage from '@/composables/useImage'
import {useProductsStore} from '@/stores/products'

const {onFileChange, url, isImageUploaded} = useImage()

const router = useRouter()
const products = useProductsStore()

const formData = reactive({
  name:'',
  category: '',
  availability: '',
  price:'',
  image: ''
})


const submitHandler = async data =>{
  const {image, ...product} = data
  try {
    await products.createProduct({...product, image:url.value})
    router.push({name:'products'})
    
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <div class="mt-10">
    <Link to="products"> Volver </Link>
    <h1 class="text-2xl font-black my-10">Nuevo Producto</h1>

    <div class="flex justify-center bg-white shadow">
      <div class="mt-10 p-12 w-full 2xl:w-2/4">
        <FormKit 
          type="form" 
          submit-label="Agregar Producto"
          incomplete-message="Datos no enviados, revisa los campos con mensajes"
          @submit="submitHandler"
          :value="formData"
        >

          <FormKit
            type="text"
            label="Nombre"
            name="name"
            placeholder="Nombre del producto"
            validation="required"
            :validation-messages="{
              required: 'El nombre del producto es obligatorio',
            }"
            v-model.trim="formData.name"
          />
          <FormKit
            type="file"
            label="Imagen del producto"
            name="image"
            validation="required"
            :validation-messages="{
              required: 'La imagen es obligatoria',
            }"
            accept=".jpg"
            multiple="false"
            @change="onFileChange"
            v-model.trim="formData.image"
          />
          
          <div v-if="isImageUploaded">
            <p class="font-black">Imagen producto</p>

            <img 
              :src="url" 
              alt="image product"
              class="w-32"
            >
          </div>

          <FormKit
            type="select"
            label="Categoría"
            name="category"
            validation="required"
            :validation-messages="{
              required: 'La categoría es obligatoria',
            }"
            :options="products.categoryOptions"
            v-model.number="formData.category"
           
          />
          <FormKit
            type="number"
            label="Precio de venta"
            name="price"
            placeholder="Precio de puducto al público"
            validation="required"
            :validation-messages="{
              required: 'El precio es obligatorio',
            }"
            min="1"
            v-model.number="formData.price"         
          />
          <FormKit
            type="number"
            label="Cant disponible"
            name="availability"
            placeholder="Ingresar inventario"
            validation="required"
            :validation-messages="{
              required: 'La cantidad es obligatoria',
            }"
            min="1"
            v-model.number="formData.availability"      
          />


        </FormKit>
      </div>
    </div>
  </div>
</template>
