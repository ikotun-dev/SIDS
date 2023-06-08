<template>
    <div class="border border-white border-b-blue-900 py-2 mx-8 px-4 flex justify-between">
        <i class="fas fa-search text-sm"></i>
        <center><h3 class=" text-sm font-extrabold">CORAL</h3></center>
        <ul class="flex">
            <li class="flex mr-4">
                <i class="fas fa-user mx-1 text-sm"></i>
                <h4 class="text-xs" @click="$emit('show-login')" >account</h4>
                  
            </li>
            <li class="flex">
                <i class="fas fa-shop mx-1 text-sm"></i>
                <h4 class="text-xs">shoping</h4>
            </li>
            
        </ul>
    </div>

   
</template>
<script>
export default{
    components : {
     
    },
    data() {
        return {
            account: false
        };
    },
    methods : {
        showAccount(){
            this.account = !this.account
        }

    }
}


</script>
