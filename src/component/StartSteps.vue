<script setup lang="ts">

interface Props {
  title: string;
  text: string;
  number: number;
  hasBackground?: boolean;
  whiteBackground?: boolean;
}

defineProps<Props>()
</script>

<template lang="pug">
.card(:class="{ 'has-background': hasBackground,'white-background': whiteBackground }")
    .number(:class="{ 'has-background': hasBackground,'white-background': whiteBackground }") {{ number }}
    .title-text
        .title-text__title {{ title }}
        .title-text__text {{ text }}
</template>

<style lang="sass" scoped>
.card
    display: flex
    flex-direction: row
    align-items: start
    justify-content: center
    gap: 24px
    padding: 24px
    border-radius: 24px
.number
    width: 44px
    height: 44px
    border-radius: 100px
    padding: 20px
    display: flex
    align-items: center
    justify-content: center
    font-size: 18px
    color: var(--primary)
    border: 1px solid var(--primary)

.has-background
    background: var(--background)
    &.number
        background: var(--primary)
        color: var(--tertiary)
.white-background
    background: var(--tertiary)
    &.number
        background: var(--primary)
        color: var(--tertiary)
        
.title-text
    display: flex
    flex-direction: column
    gap: 8px
    &__title
        font-size: 24px
        font-weight: 500
        line-height: 38px
        color: var(--primary)

    &__text
        font-size: 16px
        line-height: 24px
        font-weight: 400
        color: #98A2B3
</style>
