<script setup lang="ts">
import SideBarRealtor from "@/component/SideBarRealtor.vue";
import FaqList from "@/component/FaqList.vue";
</script>

<template lang="pug">
.faq
    SideBarRealtor
    FaqList
</template>
<style scoped lang="sass">
.faq
    display: flex
    gap: 4rem
</style>
