<script setup lang="ts">
import SideBarRealtor from '@/component/SideBarRealtor.vue';
import MyAddressLandingPage from '@/component/MyAddressLandingPage.vue';
</script>
<template lang="pug">
.new-address
    SideBarRealtor 
    MyAddressLandingPage
</template>

<style lang="sass" scoped>
.new-address
    display: flex
    gap: 2rem
</style>