<template>
 
 <SliderImageVue/>

  <section class=" mt-16 flex justify-between flex-wrap items-center gap-2">

     <globalProductInfo v-for="image in productImages" :key="image" class="rounded-lg lg:hover:ring-[0.75px]  duration-75 delay-100 lg:hover:ring-gray-800/75 lg:hover:scale-95 lg:shadow-sm lg:shadow-stone-800">
       <template #productImage>
         <img class="w-full aspect-video md:rounded-lg" :src="image" alt="">
       </template>

       <template #default>
         <h2 class="text-lg pb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odio et officia.</h2>
         <p><strong>Price :</strong>450TK</p>
         <router-link to="#"><strong>Category :</strong><span class="underline underline-offset-4 lg:hover:no-underline">Women Fashion</span></router-link>
       </template>

        <template #button>
          <button class="bg-sky-900/75 lg:hover:bg-sky-900 px-3 py-0.5 rounded-md">Add To Cart</button>
          <router-link to="#" class="bg-blue-800/80 lg:hover:bg-blue-800 px-3 py-0.5 rounded-md">Details</router-link>
        </template>

     </globalProductInfo>

  </section>
 
</template>

<script>
import { ref } from 'vue'
import SliderImageVue from './SliderImage.vue';
export default {
    name: "ProductsByCategory",
    components:{
      SliderImageVue
    },
    setup() {
        const productImages = ref(["https://images.pexels.com/photos/11935413/pexels-photo-11935413.jpeg?cs=srgb&dl=pexels-marlon-schmeiski-11935413.jpg&fm=jpg", "https://images.pexels.com/photos/5875794/pexels-photo-5875794.jpeg?cs=srgb&dl=pexels-mwabonje-5875794.jpg&fm=jpg", "https://images.pexels.com/photos/8525192/pexels-photo-8525192.jpeg?cs=srgb&dl=pexels-valeriia-miller-8525192.jpg&fm=jpg", "https://images.pexels.com/photos/5171019/pexels-photo-5171019.jpeg?cs=srgb&dl=pexels-nadi-lindsay-5171019.jpg&fm=jpg"]);
        return {
            productImages
        };
    },
    
}
</script>



