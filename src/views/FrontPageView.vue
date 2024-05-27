<script setup>
import LandingSearch from "@/component/LandingSearch.vue";
import ReadMore from "@/component/ReadMore.vue";
import LandingHow from "@/component/LandingHow.vue";
import ReviewsComponent from "@/component/ReviewsComponent.vue";
import Footer from "@/component/Footer.vue";
import NavbarComponent from "@/component/NavbarComponent.vue";
import LandingpageQuestions from "@/component/LandingpageQuestions.vue";
import LandingPageRegister from "@/component/LandingPageRegister.vue";
</script>
<template lang="pug">
.landing-page
    NavbarComponent 
    LandingPageRegister
    LandingSearch
    ReadMore 
    LandingHow 
    ReviewsComponent
    LandingpageQuestions 
Footer 

</template>

<style lang="sass" scoped>
.landing-page 
  gap: 56px
  display: flex
  margin-top: 50px
  max-width: 1240px
  flex-direction: column
  margin: 0 auto
  margin-bottom: 100px

</style>
