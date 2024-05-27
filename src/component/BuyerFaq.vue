<script setup lang="ts">
import FaqList from './FaqList.vue';
import SideBarBuyer from './SideBarBuyer.vue';
</script>

<template lang="pug">
.container
    SideBarBuyer 
    FaqList
</template>


<style scoped lang="sass">
.container
    gap: 32px
    display: flex
    flex-direction: row
</style>