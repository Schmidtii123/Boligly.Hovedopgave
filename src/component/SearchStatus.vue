<script setup lang="ts">

interface Props {
    tagText: string;
    searchStatus: string;
}

const props = defineProps<Props>();

</script>

<template lang="pug">

.tag(:class="searchStatus")
    .tag__diode
    .tag__text {{ tagText }}

</template>

<style lang="sass" scoped>
.tag
    display: flex
    flex-direction: row
    gap: 6px
    min-width: 61px
    align-items: center
    border-radius: 16px
    justify-content: center
    padding: 2px 8px 2px 6px

    &.ready
        background-color: var(--success-50)
        .tag__text
            color: var(--success-700) 
        .tag__diode
            background-color: var(--success-500)

    &.looking
        background-color: var(--warning-50)
        .tag__text
            color: var(--warning-700)
        .tag__diode
            background-color: var(--warning-500)

    &.interested
        background-color: var(--interested-50)
        .tag__text
            color: var(--interested-700)
        .tag__diode
            background-color: var(--interested-500)
                
    &.passiv
        background-color: var(--passive-50)
        .tag__text
            color: var(--passive-700)
        .tag__diode
            background-color: var(--passive-500)

    &__text
        font-size: 12px
        font-weight: 400
        line-height: 18px
        text-align: center
        letter-spacing: 0em

    &__diode
        width: 6px
        height: 6px
        border-radius: 50%
        
</style>
