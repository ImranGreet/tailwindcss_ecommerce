<template>
  <section class="w-full h-screen flex flex-col justify-center items-center bg-zinc-200/60">
    <form method="post" class="text-center  w-full md:w-4/5 lg:w-3/6 mx-auto bg-sky-900/40 p-3 rounded-lg shadow-xl shadow-cyan-900/75  lg:hover:shadow-zinc-600/75">
        <div class="flex flex-col justify-center items-center">

           <div>
             <label for="email">Email</label>
             <input type="email" placeholder="Email">
           </div>

           <div>
             <label for="password">Password</label>
             <input type="password" placeholder="Email">
           </div>

            <div>
             <button type="submit">Submit</button>
           </div>
        </div>
    </form>
  </section>
</template>

<script>
export default {

}
</script>

