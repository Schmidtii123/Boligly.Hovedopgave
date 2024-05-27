<script setup lang="ts">
import { RouterLink } from "vue-router";
import ButtonComponent from "./ButtonComponent.vue";
</script>
<template lang="pug">
.footer
  .content
    .text
      h1 Boligly
      
    .links
      router-link(to="/") Forside
      router-link(to="/#") Hjælp
      router-link(to="/faq") FAQ
      router-link(to="/contact") Kontakt
      router-link.address(to="/address") Tjek adresse
      ButtonComponent.button(:tertiary="true" ) Log in/Registrer
</template>

<style scoped lang="sass">
.footer
    gap: 32px
    bottom: 0
    width: 100%
    height: 297px
    display: flex
    margin: 0 auto
    align-items: center
    flex-direction: column
    background-color: #111E3D
.content
    gap: 32px
    width: 1240px
    height: 174px
    display: flex
    margin-top: 72px
    align-items: center
    margin-bottom: 72px
    flex-direction: column
.text
    gap: 16px
    width: 586px
    height: 94px
    display: flex
    flex-direction: column
.text h1
    font-size: 24px
    font-weight: 700
    line-height: 38px
    text-align: center
    letter-spacing: 0em
    color: var(--tertiary)
.text p
    color: #D0D5DD
    font-size: 14px
    font-weight: 400
    line-height: 20px
    text-align: center
.links 
    gap: 32px
    display: flex
    align-items: center
    width: 717px
    a 
        color: var(--tertiary)
        text-decoration: none
        &:hover 
            text-decoration: underline

.button
    width: 207px
</style>
