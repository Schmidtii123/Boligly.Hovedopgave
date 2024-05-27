
<script setup lang="ts"></script>

<template lang="pug">
.housing-type
    .housing-type__header Special requirements
    .housing-type__sections
        .house-section__1
            label.house-section__checkbox
                input(type="checkbox" class="checkbox") 
                | Køkken alrum
            label.house-section__checkbox
                input(type="checkbox" class="checkbox")
                | Brændovn / Pejs / Biopejs
            label.house-section__checkbox
                input(type="checkbox" class="checkbox")
                | Spabad
            label.house-section__checkbox
                input(type="checkbox" class="checkbox")
                | Udendøres bruser
        .house-section__2
            label.house-section__checkbox
                input(type="checkbox" class="checkbox") 
                | Vinkælder / Vinrum
            label.house-section__checkbox
                input(type="checkbox" class="checkbox")
                | Intelligent lysstyring
            label.house-section__checkbox
                input(type="checkbox" class="checkbox")
                | Walk-in skab
            label.house-section__checkbox
                input(type="checkbox" class="checkbox")
                | Swimming pool
</template>

<style scoped lang="sass">
.housing-type
    max-width: 100vw
    gap: 8px
    display: flex
    flex-direction: column
    box-sizing: border-box

    &__header
        font-size: 12px
        font-weight: 400
        color: var(--gray-600)
        max-width: 100%
        box-sizing: border-box

    &__sections
        gap: 8px
        display: flex
        flex-direction: row
        justify-content: space-between
        max-width: 100%
        box-sizing: border-box

.house-section__1, .house-section__2
    gap: 4px
    display: flex
    width: 510.5px
    flex-direction: column
    align-items: flex-start
    max-width: 100%
    box-sizing: border-box

.house-section__checkbox
    gap: 8px
    display: flex
    flex-direction: row
    align-items: center
    font-size: 16px
    font-weight: 400
    line-height: 24px
    color: var(--gray-600)
    max-width: 100%
    box-sizing: border-box
</style>