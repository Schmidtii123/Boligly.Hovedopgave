<script setup lang="ts">
import Footer from "@/component/Footer.vue";
import NavbarComponent from "@/component/NavbarComponent.vue";
import FaqList from "@/component/FaqList.vue";
import FaqSearch from "@/component/FaqSearch.vue";
import LandingHow from "@/component/LandingHow.vue";
import LandingpageQuestions from "@/component/LandingpageQuestions.vue";
</script>

<template lang="pug">
.faq-page
    NavbarComponent
    FaqSearch
    FaqList
    LandingHow
    LandingpageQuestions
Footer
</template>

<style scoped lang="sass">
.faq-page
    gap: 100px
    width: 1240px
    display: flex
    margin: 0 auto
    flex-direction: column
    margin-bottom: 100px
    
.header
  margin-top: 50px
</style>
