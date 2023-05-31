<template>
    <HeaderTop></HeaderTop>
    <SecondHeader></SecondHeader>
    <ManPage></ManPage>
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
  }
}
</script>
