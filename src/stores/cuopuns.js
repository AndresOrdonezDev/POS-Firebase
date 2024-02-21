import {ref, watch, computed} from 'vue'
import {defineStore} from 'pinia'
import {useCartStore} from './cart'

export const useCouponStore = defineStore('coupon',()=>{

    const cart = useCartStore()

    const couponInput = ref('')
    const cuoponValidationMessage = ref('')
    const discountPercentage = ref(0)
    const discount = ref(0)

    const VALID_COUPONS = [
        {name:'10AMORAMISTAD', discountP: .10},
        {name:'20DIAMADRE', discountP: .20},
        {name:'20DIAPADRE', discountP: .20},
        {name:'CLIENTEPREFERIDO', discountP: .40},
    ]


    watch(discountPercentage,()=>{
        discount.value = Number((cart.total * discountPercentage.value).toFixed(2))
    })

    function applyCoupon(){
        if(VALID_COUPONS.some(coupon => coupon.name === couponInput.value.toUpperCase())){
            cuoponValidationMessage.value = 'Aplicando...'
            setTimeout(() => {
                discountPercentage.value = VALID_COUPONS.find( coupon => coupon.name === couponInput.value.toUpperCase()).discountP
                cuoponValidationMessage.value = '¡Descuento aplicado!'
            }, 2000);
        }else{
            cuoponValidationMessage.value = 'Cupón no encontrado'
            setTimeout(() => {
                cuoponValidationMessage.value = ''
            }, 4000);
        }
    }

    function $reset(){
        couponInput.value = ''
        cuoponValidationMessage.value = ''
        discountPercentage.value = 0
        discount.value = 0
    }
    const isValidCoupon = computed(()=> discountPercentage.value > 0)

    return{
        couponInput,
        discount,
        cuoponValidationMessage,
        isValidCoupon,
        applyCoupon,
        $reset
    }
})