<script setup lang="ts">
import FakturaComponent from "../component/FakturaComponent.vue";
import SideBarRealtor from "@/component/SideBarRealtor.vue";
</script>

<template lang="pug">
.container 
    SideBarRealtor
    .content 
        .header Fakturaliste
        FakturaComponent
</template>


<style scoped lang="sass">
.container
    display: flex
    flex-direction: row
    gap: 32px


.content
    display: flex
    flex-direction: column
    gap: 32px
    margin-top: 2rem
    width: 100%

.header
    font-size: 32px
    font-weight: 700
    color: var(--header)
</style>