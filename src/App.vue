<template>
<HeaderTop></HeaderTop>
<SecondHeader></SecondHeader>
<ManPage></ManPage>
</template>

<script>
import HeaderTop from './components/HeaderTop'
import  SecondHeader from './components/SecondHeader'
import ManPage from './components/ManPage'

export default {
  name: 'App',
  components: {
    HeaderTop,
    SecondHeader,
    ManPage
  }
}
</script>

<style>

</style>
