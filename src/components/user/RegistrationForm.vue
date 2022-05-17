<template>
  <section class="w-full h-screen flex flex-col justify-center items-center bg-zinc-200/60">
    <form method="post" class="text-center  w-full md:w-4/5 lg:w-3/6 mx-auto bg-sky-900/40 p-3 rounded-lg shadow-xl shadow-cyan-900/75  lg:hover:shadow-zinc-600/75">
      <h2 class="text-3xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>

      <div class="w-full space-y-2">
        <h3 class="text-center p-1">User Personal Details</h3>

         <div class="flex flex-col md:flex-row justify-between space-y-2 md:space-y-0 md:space-x-2">

            <input type="text" class="w-full p-2 rounded-lg " placeholder="Firstname">
            <input type="text" class="w-full p-2 rounded-lg " placeholder="Lastname">

        </div>

        <input type="email" class="w-full p-2 rounded-lg " placeholder="Email">
          
          <div class="flex flex-col md:flex-row justify-between space-y-2 md:space-y-0 md:space-x-2">

            <input type="text" class="w-full p-2 rounded-lg " placeholder="Username">
            <input type="password" class="w-full p-2 rounded-lg " placeholder="password">

          </div>

        

      </div>

          <div class="w-full space-y-2">
            <h3 class="p-1">Address</h3>
            <input type="text" class="w-full p-2 rounded-lg " placeholder="City">

            <div class="flex flex-col md:flex-row justify-between space-y-2 md:space-y-0 md:space-x-2">

                <input type="text" class="w-full p-2 rounded-lg " placeholder="Street Name">
                <input type="text" class="w-full p-2 rounded-lg " placeholder="Street Number">

            </div>

            <input type="text" class="w-full p-2 rounded-lg " placeholder="City">


           </div>

        <div class="w-full space-y-2">
            <h3 class="p-1">Geolocation</h3>

            <div class="flex flex-col md:flex-row justify-between space-y-2 md:space-y-0 md:space-x-2">

                <input type="text" class="w-full p-2 rounded-lg " placeholder="Latitude">
                <input type="text" class="w-full p-2 rounded-lg " placeholder="Longitude">

            </div>

            <input type="text" class="w-full p-2 rounded-lg " placeholder="Phone Number">


          </div>

          <div class="w-full text-center bg-stone-600 lg:hover:bg-stone-700/95 rounded-lg mt-2 shadow-lg">
            <button type="submit" class="text-xl text-white cursor-pointer w-full">Submit</button>
          </div>

    </form>
  </section>
</template>

<script>
export default {

}
</script>

