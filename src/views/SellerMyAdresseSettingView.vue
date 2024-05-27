<script setup lang="ts">
import SideBarSelling from '@/component/SideBarSelling.vue';
import SellerSettings from '@/component/SellerSettings.vue';
</script>
<template lang="pug">
.new-address
    SideBarSelling
    SellerSettings
</template>

<style lang="sass" scoped>
.new-address
    display: flex
    gap: 2rem
</style>