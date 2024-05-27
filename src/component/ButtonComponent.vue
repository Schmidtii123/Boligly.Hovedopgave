<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    fullWidth?: boolean;
    red?: boolean;
}

withDefaults(defineProps<Props>(), {
    primary: true,
});
</script>

<template lang="pug">
button.button-component(:class="{ primary, secondary, tertiary, red, fullWidth }")
    slot(name="left")
    slot
    slot(name="right")
</template>

<style scoped lang="sass">
.button-component
    gap: 8px
    border: none
    height: 48px
    display: flex
    cursor: pointer
    font-size: 16px
    min-width: 48px
    font-weight: 500
    padding: 12px 24px
    border-radius: 8px
    align-items: center
    color: var(--primary)
    justify-content: center
    background-color: var(--secondary)

    &.primary
        color: white
        background-color: var(--primary)
    &.secondary
        color: var(--primary)
        background-color: var(--secondary)
    &.tertiary
        color: var(--primary)
        background-color: var(--tertiary)
    &.red
        color: var(--error-700)
        background-color: var(--error-50)
    &:hover
        color: var(--white-50)
        background-color: #365298

    &:active
        background-color: #111e3d

    &:disabled
        color: #98a2b3
        background-color: #d0d5dd

    &.fullWidth
        width: 100%

    .slot-left, slot[name="right"]
        color: inherit
</style>
