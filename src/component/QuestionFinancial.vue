<script setup lang="ts">
import AccordionComponent from "@/component/AccordionComponent.vue";
</script>

<template lang="pug">
.questions
    .mini-header Finacial issues

    AccordionComponent(title="How can I update my payment information on the platform?")
        p Money
    
    AccordionComponent(title="What should I do if I encounter a billing error on my account?")
        p Hvis du er logget ind kan du finde den inde under mine adresser 
    
    AccordionComponent(title="Are there any fees associated with certain financial transactions?")
        p If you forgot your password, go to the password recovery page and enter your email address. Recovery instructions will be sent to your email.
    
    AccordionComponent(title="Can I set up automatic payments for recurring expenses?")
        p If you forgot your password, go to the password recovery page and enter your email address. Recovery instructions will be sent to your email.
    
    AccordionComponent(title="How do I access my financial statements and transaction history?")
        p If you forgot your password, go to the password recovery page and enter your email address. Recovery instructions will be sent to your email.

    AccordionComponent(title="How do I access my financial statements and transaction history?")
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
