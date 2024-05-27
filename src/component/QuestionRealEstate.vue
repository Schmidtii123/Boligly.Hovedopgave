<script setup lang="ts">
import AccordionComponent from "@/component/AccordionComponent.vue";
</script>

<template lang="pug">
.questions
    .mini-header Real Estate Ads and Search

    AccordionComponent(title="How do I search for properties in a specific location?")
        p Home
    
    AccordionComponent(title="Can I filter search results based on property type and price range?")
        p Hvis du er logget ind kan du finde den inde under mine adresser 
    
    AccordionComponent(title="How often are new listings added to the platform?")
        p If you forgot your password, go to the password recovery page and enter your email address. Recovery instructions will be sent to your email.
    
    AccordionComponent(title="Is there a way to save favorite properties for future reference?")
        p If you forgot your password, go to the password recovery page and enter your email address. Recovery instructions will be sent to your email.
    
    AccordionComponent(title="How can I contact the seller or agent for more information about a property?")
        p If you forgot your password, go to the password recovery page and enter your email address. Recovery instructions will be sent to your email.

    AccordionComponent(title="How can I contact the seller or agent for more information about a property?")
        p If you forgot your password, go to the password recovery page and enter your email address. Recovery instructions will be sent to your email.
</template>

<style scoped lang="sass">
.questions
    gap: 32px
    width: 45vw
    padding: 32px
    display: flex
    min-height: 650px
    align-items: center
    border-radius: 16px
    flex-direction: column
    background-color: var(--background)
.header
  margin-top: 50px

.mini-header
    width: 100%
    padding: 16px
    font-size: 24px
    font-weight: 700
    border-radius: 8px
    color: var(--header)
    align-self: flex-start
    background-color: var(--tertiary)
</style>
