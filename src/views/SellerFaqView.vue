<script setup lang="ts">
import SellerFaq from "@/component/SellerFaq.vue";
import SideBarSelling from "@/component/SideBarSelling.vue";
</script>

<template lang="pug">
.container
    SideBarSelling
    SellerFaq
</template>

<style scoped lang="sass">
.container 
    display: flex
    gap: 2rem
</style>