import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import {query, collection, where} from 'firebase/firestore'
import {useCollection, useFirestore} from 'vuefire'


export const useSalesStore = defineStore('sales',()=>{
    
    const date = ref('')
    const db = useFirestore()

    const salesSource = computed(()=>{
        if(date.value){
            const q = query(
                collection(db,'sales'),
                where('date', '==', date.value)
            )
            return q
        }
    })

    const salesColletion = useCollection(salesSource)

    const isDateSelected = computed(()=> date.value)

    const totalSalesOfDay = computed(()=>{
        return salesColletion.value ? salesColletion.value.reduce((total,sale) => total + sale.total, 0) : 0
    })
  
    return {
        date,
        isDateSelected,
        salesColletion,
        totalSalesOfDay

    }
})