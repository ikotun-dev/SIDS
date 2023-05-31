<template>
  <HeaderTop></HeaderTop>
  <LoginForm></LoginForm>
</template>
<script>
import HeaderTop from "./HeaderTop";
import LoginForm from "./LoginForm";

export default {
  name: "LoginPage",
  components: {
    HeaderTop,
    LoginForm,
  },
};
</script>
