<template>
  <section class="w-full md:w-[300px] lg:w-[300px] h-auto  bg-red-100/40 text-stone-900 p-0.5 md:p-3 flex flex-col justify-between items-center">
     
     <div class="w-full">
         <slot name="productImage"></slot>
     </div>

      <div class="w-full flex flex-col justify-between items-start">
         <slot></slot>
     </div>

      <div class="w-full flex justify-between items-center  text-white mt-2">
         <slot name="button"></slot>
     </div>

  </section>
</template>

