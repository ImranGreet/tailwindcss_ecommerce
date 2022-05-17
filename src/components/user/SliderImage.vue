<template>
   <section class="w-full px-2 md:px-0">

     <div class="w-full relative ">

      <span @click="next()" class="absolute left-2 top-24 xs:top-16 md:left-2 block md:top-40 cursor-pointer bg-inherit px-1 shadow-lg shadow-slate-800/40 rounded-full z-10 lg:hover:text-xl lg:hover:bg-gray-900 lg:hover:text-white duration-100 delay-150"><i class="fa-solid fa-chevron-left"></i></span>

      <span @click="prev()" class="absolute block right-4  top-24 xs:top-16 md:right-2 md:top-40 cursor-pointer shadow-lg shadow-slate-800 rounded-full px-1 z-10 bg-inherit lg:hover:text-xl lg:hover:bg-gray-900 lg:hover:text-white duration-100 delay-150"><i class="fa-solid fa-chevron-right"></i></span>
   
     <div :class="{'lg:animate-backgroundChange':animate}" class="flex justify-between items-center space-x-0 md:space-x-2 rounded-lg">

          <div  v-for="image in imageToSlide" :key="image" class="w-full mx-auto lg:w-1/2 relative even:hidden lg:even:block " :class="{'lg:even:animate-rightFlying duration-100 delay-150':animate}">

         <img :src="image" alt="" class="w-full rounded-lg aspect-video">

         <div  class="absolute xs:inset-0 xs:px-2 md:bottom-4 md:px-4 md:py-1.5 md:mx-4 text-white rounded-lg bg-gray-800/60 xs:bg-gray-600/70 flex flex-col justify-center items-start">
          <h1 class="text-lg pb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odio et officia.</h1>
         <p><strong>Price :</strong>450TK</p>
         <router-link to="#"><strong>Category :</strong><span class="underline underline-offset-4 lg:hover:no-underline">Women Fashion</span></router-link>
         <button class="bg-red-900/75 lg:mt-1  px-3 py-0.5 rounded-md">Add To Cart</button>
         
         </div>

     </div>
  </div>

   </div>
   
   </section>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default {
  name:"SliderImage",
  components:{
   
  },
  setup(){
    const store = useStore();
    const route = useRoute();
    const imageToSlide =ref(["https://images.pexels.com/photos/12082485/pexels-photo-12082485.jpeg?cs=srgb&dl=pexels-elena-rubtsova-12082485.jpg&fm=jpg","https://images.pexels.com/photos/9120155/pexels-photo-9120155.jpeg?cs=srgb&dl=pexels-cottonbro-9120155.jpg&fm=jpg"]);
    const animate =ref(true);

    function next(){
      console.log(animate.value);
    }

    function prev(){
      animate.value=!animate.value;
      console.log(animate.value);
    }
    
    function animateShow(){
      animate.value=!animate.value;
    }
    

    return {
      store,route,imageToSlide,next,animate,animateShow,prev
    }
  }

}
</script>

