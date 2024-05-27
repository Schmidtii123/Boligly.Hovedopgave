<script setup lang="ts">
import AccordionComponent from "./AccordionComponent.vue";
</script>

<template lang="pug">

.questions
    .mini-header Registration and Account

    AccordionComponent(title="How to register on your site?")
        p To register on our site, go to the registration page and enter your email address and password. After that, you will receive a letter with a link to confirm your registration. After confirming your registration, you will be able to log in to your account.
    
    AccordionComponent(title="How do I reset my password if I forgot it?")
        p Hvis du er logget ind kan du finde den inde under mine adresser 
    
    AccordionComponent(title="Is there a minimum age requirement for creating an account?")
        p If you forgot your password, go to the password recovery page and enter your email address. Recovery instructions will be sent to your email.
    
    AccordionComponent(title="What information do I need to provide during the registration process?")
        p If you forgot your password, go to the password recovery page and enter your email address. Recovery instructions will be sent to your email.
    
    AccordionComponent(title="How can I update my account information after registration?")
        p If you forgot your password, go to the password recovery page and enter your email address. Recovery instructions will be sent to your email.

    AccordionComponent(title="How can I update my account information after registration?")
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
