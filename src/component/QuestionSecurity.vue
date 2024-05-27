<script setup lang="ts">
import AccordionComponent from "@/component/AccordionComponent.vue";
</script>

<template lang="pug">
.questions
    .mini-header Security and Privacy
    AccordionComponent(title="How is my personal information protected on this platform?")
        p Security
    
    AccordionComponent(title="How is my data stored and is it encrypted?")
        p Hvis du er logget ind kan du finde den inde under mine adresser 
    
    AccordionComponent(title="What measures are in place to prevent unauthorized access to my account?")
        p If you forgot your password, go to the password recovery page and enter your email address. Recovery instructions will be sent to your email.
    
    AccordionComponent(title="Can I control who has access to my personal information?")
        p If you forgot your password, go to the password recovery page and enter your email address. Recovery instructions will be sent to your email.
    
    AccordionComponent(title="What should I do if I suspect a security breach or unauthorized activity on my account?")
        p If you forgot your password, go to the password recovery page and enter your email address. Recovery instructions will be sent to your email.

    AccordionComponent(title="What should I do if I suspect a security breach or unauthorized activity on my account?")
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
