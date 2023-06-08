<template>
<div class="relative">
    <!-- Main content of the page -->
    <div class="bg-gray-200 py-8">
      <!-- Your page content goes here -->
      <HeaderTop></HeaderTop>
      <SecondHeader></SecondHeader>
      <ManPage></ManPage>
    </div>
  
    <!-- Overlay page -->
    <div class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
      <div class="bg-white p-8 rounded shadow">
        <!-- Overlay content goes here -->
        <div class="flex flex-col px-4 py-4 items-center">
            <label class="items-center font-pop-100 font-extrabold"> Login </label>
            <input class="px-2 py-2 h-8 w-64 rounded-sm focus:outline-none text-xs focus:ring-10 font-pop focus:ring-blue-950 ring-1 ring-blue-800 mt-2 " type="text" placeholder="username : ">
            <input class="px-2 py-2 h-8 w-64 rounded-sm focus:outline-none text-xs focus:ring-10 font-pop focus:ring-blue-950 ring-1 ring-blue-800 mt-3 " :type="showPassword ? 'text' : 'password' " placeholder="password : ">
        </div>

      </div>
    </div>



  </div>
</template>
<script>
import HeaderTop from './HeaderTop'
import  SecondHeader from './SecondHeader'
import ManPage from './ManPage'

export default {
  name: 'App',
  components: {
    HeaderTop,
    SecondHeader,
    ManPage
  },
  data() {
    return {
        showPassword: false
    };
  },//data 
  methods : {
    togglePasswordVisibility() {
        this.showPassword = !this.showPassword

    }//tooglePasswordVisibility

  }
}
</script>
