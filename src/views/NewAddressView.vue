<script setup lang="ts">
import SideBarRealtor from '@/component/SideBarRealtor.vue';
import NewAddress from '@/component/NewAddress.vue';
</script>
<template lang="pug">
.new-address
    SideBarRealtor 
    NewAddress
</template>

<style lang="sass" scoped>
.new-address
    display: flex
    gap: 2rem
</style>