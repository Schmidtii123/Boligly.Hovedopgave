<script setup lang="ts">
interface Props {
    tagText: string;
    paymentStatus: string;
}
const props = defineProps<Props>();

</script>
<template lang="pug">
.tag(:class="paymentStatus")
    .tag__diode
    .tag__text {{ tagText }}
</template>

<style lang="sass" scoped>
.tag
    display: flex
    flex-direction: row
    gap: 6px
    min-width: 61px
    max-width: 122px
    align-items: center
    border-radius: 16px
    justify-content: center
    padding: 2px 8px 2px 6px

    &.paid
        background-color: var(--success-50)
        .tag__text
            color: var(--success-700)
        .tag__diode
            background-color: var(--success-500)

    &.pending
        background-color: var(--warning-50)
        .tag__text
            color: var(--warning-700)
        .tag__diode
            background-color: var(--warning-500)

    &.failed
        background-color: var(--error-50)
        .tag__text
            color: var(--error-700)
        .tag__diode
            background-color: var(--error-500)

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
