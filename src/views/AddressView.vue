<script setup lang="ts">
import MyAddresses from "@/component/MyAddresses.vue";
import ProfileInfoComponent from "@/component/ProfileInfoComponent.vue";
</script>

<template lang="pug">
.container
    MyAddresses(
        myAddresse="Flintemarken 19", 
        aboutAddresse="this is my pretty home and i have lived here for over 20 years, but i think it's about time i move out"
        image="/villa.jpeg"
        )
    MyAddresses(
        myAddresse="Dalgas avenue 6 2,15", 
        aboutAddresse="this is my pretty home and i have lived here for over 20 years, but i think it's about time i move out"
        image="/villa3.0.jpeg"
        )
    

</template>

<style lang="sass" scoped>
.container
    display: flex
    

</style>
