<script setup lang="ts">
import AccordionComponent from "@/component/AccordionComponent.vue";
</script>

<template lang="pug">
.questions
    .mini-header Support

    AccordionComponent(title="How can I contact customer support for assistance?")
        p Support
    
    AccordionComponent(title="Are there any self-service resources available for common issues before contacting support?")
        p Hvis du er logget ind kan du finde den inde under mine adresser 
    
    AccordionComponent(title="What are the operating hours for customer support?")
        p If you forgot your password, go to the password recovery page and enter your email address. Recovery instructions will be sent to your email.
    
    AccordionComponent(title="How long does it typically take to receive a response from the support team?")
        p If you forgot your password, go to the password recovery page and enter your email address. Recovery instructions will be sent to your email.
    
    AccordionComponent(title="Can I track the status of my support ticket online?")
        p If you forgot your password, go to the password recovery page and enter your email address. Recovery instructions will be sent to your email.

    AccordionComponent(title="Can I track the status of my support ticket online?")
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
