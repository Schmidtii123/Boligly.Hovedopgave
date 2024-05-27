<script setup lang="ts">
interface Props{
    number: string;
    title: string;
    text: string;
}
defineProps<Props>()
</script>

<template lang="pug">
.feature-card 
    .feature-card__number {{ number }}
    .feature-card__title {{ title }}
    .feature-card__text {{ text }}
</template>

<style lang="sass">
.feature-card
    gap: 16px
    width: 218px
    display: flex
    height: 213px
    padding: 16px
    flex-direction: column
    border-radius: 16px
    background-color: var(--tertiary)
    &__number
        display: flex
        font-size: 48px
        font-weight: 400
        line-height: 60px
        text-align: right
        letter-spacing: -0.02em
        color: var(--primary)
        align-self: flex-end
    &__title
        font-size: 16px
        font-weight: 500
        line-height: 24px
        letter-spacing: 0em
        color: var(--header)
    &__text
        font-size: 12px
        text-align: left
        font-weight: 400
        line-height: 18px
        letter-spacing: 0em
        color: var(--gray-500)


</style>