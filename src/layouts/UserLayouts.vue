<template>
  <section class="max-w-full md:max-w-2xl lg:max-w-7xl space-y-8 mx-auto flex flex-col justify-between px-2 md:p-0">
      <NavMenu/>
      <router-view/>
      <FooterVue/>
  </section>

    
  
</template>

<script>
import NavMenu from "@/components/user/NavigationsMenu.vue";
import FooterVue from "@/components/default/Footer.vue";

export default {
  name:"UserLayouts",
  components:{
    NavMenu,
    FooterVue
},
  setup(){
    return {

    }
  }

}
</script>



