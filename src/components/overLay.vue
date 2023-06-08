<template>
  <div class="relative">
    <!-- Main content of the page -->
    <div class="lg:bg-gray-200 lg:py-8 lg:block hidden">
      <!-- Your page content goes here -->
      <HeaderTop @show-login="showLoginForm"></HeaderTop>
      <SecondHeader></SecondHeader>
      <ManPage></ManPage>
    </div>

    <!-- Overlay page -->
    <div
      class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center"
      v-if="!showLogin"
    >
    <div class="absolute top-0 right-0 m-4">
    <i class="fas fa-times text-white" @click="showLoginForm"></i>
  </div>
      <div class="bg-white p-8 rounded shadow sm:p-12">
        <!-- Overlay content goes here -->
        <div class="flex flex-col px-4 py-4 items-center">
          <label class="items-center font-pop-100 font-extrabold">
            Login
          </label>
          <div>
            <input
              class="px-2 py-2 h-8 lg:w-64 rounded-sm sm:w-32 focus:outline-none text-xs focus:ring-10 font-pop focus:ring-blue-950 ring-1 ring-blue-800 mt-2"
              type="text"
              placeholder="username : "
            />
          </div>

          <div
            class="flex justify-between text-base mt-4 border rounded-sm focus:ring-blue-950 ring-blue-800 ring-1 lg:w-64 sm:w-32"
          >
            <input
              class="px-2 py-2 h-8 w-40 ounded-sm focus:outline-none text-xs focus:ring-10 font-pop border-0"
              :type="inputType"
              placeholder="password : "
            />
            <i
              class="mt-2 mr-2 text-blue-800"
              :class="showPassword"
              @click="togglePasswordVisibility"
            ></i>
          </div>

          <button
            class="font-roboto border py-1 px-16 text-sm rounded-sm bg-blue-800 text-white mt-4 hover:bg-blue-950 rounded-e-full rounded-s-full"
          >
            Login
          </button>

          <a
            ><h3 class="font-pop-100 text-gray-600 text-xs mt-2">
              Forgot password?
            </h3></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderTop from "./HeaderTop";
import SecondHeader from "./SecondHeader";
import ManPage from "./ManPage";

export default {
  name: "App",
  components: {
    HeaderTop,
    SecondHeader,
    ManPage,
  },
  data() {
    return {
      showPassword: "fas fa-eye",
      DontShowPassword: "fas fa-eye-slasg",
      inputType: "password",
      showLogin: "false",
    };
  }, //data
  methods: {
    togglePasswordVisibility() {
      this.inputType = this.inputType === "password" ? "text" : "password";
      this.showPassword =
        this.showPassword == "fas fa-eye" ? "fas fa-eye-slash" : "fas fa-eye";
    }, //tooglePasswordVisibility

    showLoginForm(){
        this.showLogin = !this.showLogin;
    }//showLogin 

  },
};
</script>
