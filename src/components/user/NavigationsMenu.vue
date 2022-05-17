<template>
  <section class="w-full bg-inherit dark:bg-gray-800 dark:text-white ">
     <div class="w-full h-auto  md:h-32 flex flex-col justify-start md:justify-between items-start md:items-center md:flex-row">

      <div class="space-y-0 md:space-y-2 ">
      <router-link to="#" class="text-lg lg:text-2xl tracking-wide">Xenmash</router-link>
           <button class="block md:hidden"><span class="text-2xl rounded-lg border border-zinc-600 p-1"><i class="fa-solid fa-bars"></i></span></button>
      </div>

        <div class="mt-1 md:mt-0 flex flex-col space-x-0 md:space-x-2 md:flex-row text-base tracking-wide antialiased">
           <router-link class="px-0 lg:px-3 py-0 lg:py-0.5 lg:hover:underline lg:hover:underline-offset-4 hover:decoration-stone-400 duration-100 delay-75 font-normal uppercase" to="#" v-for="cat in categories" :key="cat">{{cat}}</router-link>
        </div>

     </div>
     
  </section>
</template>

<script>
import {ref,onMounted, computed} from "vue";
import {useStore} from "vuex";
import { useRoute } from 'vue-router';

export default {
  name:"NavigationsMenu",
  components:{
     
  },
  setup(){
    const store = useStore();
    const route =useRoute();
    onMounted(()=>store.dispatch("products/retrieveProducts"));
    const categories = computed(()=>store.state.products.productCategories);
    return{
     ref, store,route,categories
    }
  }

}
</script>



<!-- <router-link to="#" v-for="cat in categories" :key="cat" class="">{{cat}}</router-link> -->