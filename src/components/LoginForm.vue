<template>
  <div class="bg-zinc-300 h-100 py-32 pb-64 mt-0">
    <div
      class="m-auto flex justify-center border-2 border-zinc-950 pt-16 my-10 bg-white pb-10 mx-64 rounded-bl-3xl rounded-tr-xl"
    >
      <form class="flex justify-center bg-white flex-col">
        <h2 class="text-center text-2xl text-zinc-950 font-extrabold font-mono">
          LOGIN
        </h2>
        <input
        v-model="username"
          class="mx-4 ring-1 ring-zinc-600 focus:outline-none rounded-sm my-2 px-2 py-1 focus:ring-zinc-900 focus:ring-2 font-mono"
          placeholder="username"
          type="text"
        />

        <input
        v-model="password"
          class="mx-4 ring-1 ring-zinc-600 focus:outline-none rounded-sm my-2 px-2 py-1 focus:ring-zinc-950 focus:ring-2 font-mono"
          placeholder="password"
          type="password"
        />

        <button
          type="submit"
          class="border bg-zinc-950 rounded-tl-xl rounded-br-xl text-white border-blue-950 px-0 py-1 my-8 text-center font-mono text-sm"
        >
          click
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default{
    data () {
        return { 
        'username' : " ",
        'password' : " ",
        loginstatus : null
        }
    }
}

</script>

