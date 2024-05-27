<script lang="ts" setup>
import SideBarRealtor from '@/component/SideBarRealtor.vue';
import SideBarBuyer from '@/component/SideBarBuyer.vue';
import SideBarSelling from '@/component/SideBarSelling.vue';
</script>

<template lang="pug">
.sidebars
    SideBarRealtor
    SideBarBuyer
    SideBarSelling
</template>


<style lang="sass" scoped>
.sidebars
    display: flex
    flex-direction: row
    justify-content: space-around
    margin-top: 1rem
</style>