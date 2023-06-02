<template>
    <div v-cloak class="bg-zinc-300 h-100 py-32 pb-64 mt-0">
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
            type="button"
            @click="submitForm"
            class="border bg-zinc-950 rounded-tl-xl rounded-br-xl text-white border-blue-950 px-0 py-1 my-8 text-center font-mono text-sm"
          >
            click
          </button>
  
          <p v-if="loginstatus" class="text-center text-red-500 font-mono">
            {{ loginstatus }}
          </p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: "",
        password: "",
        loginstatus: null
      };
    },
    methods: {
      async submitForm() {
        // Create an object with the login data
        const loginData = {
          username: this.username,
          password: this.password
        };
  
        try {
          // Send a POST request to the API endpoint
          const response = await fetch("https://fbkrs-chathub.up.railway.app/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
          });
  
          //const data = await response.json();
         console.log(response.message)

        } catch (error) {
          console.error(error);
          this.loginstatus = "An error occurred during login.";
        }
      }
    }
  };

  </script>
  