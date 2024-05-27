<script setup lang="ts">

</script>

<template lang="pug">
.housing-type
    .housing-type__header Housing type
    .housing-type__sections
        .house-section__1
            label.house-section__checkbox
                input(type="checkbox" class="checkbox") 
                | Villa
            label.house-section__checkbox
                input(type="checkbox" class="checkbox")
                | Ejerlejlighed
            label.house-section__checkbox
                input(type="checkbox" class="checkbox")
                | villa lejlighed
            label.house-section__checkbox
                input(type="checkbox" class="checkbox")
                | Rækkehus
            label.house-section__checkbox
                input(type="checkbox" class="checkbox")
                | Fritidsbolig / Sommerhus
            label.house-section__checkbox
                input(type="checkbox" class="checkbox")
                | Landejendom
        .house-section__2
            label.house-section__checkbox
                input(type="checkbox" class="checkbox") 
                | Helårsgrund
            label.house-section__checkbox
                input(type="checkbox" class="checkbox")
                | Fritidsgrund
            label.house-section__checkbox
                input(type="checkbox" class="checkbox")
                | Andelsbolig
            label.house-section__checkbox
                input(type="checkbox" class="checkbox")
                | P-plads
            label.house-section__checkbox
                input(type="checkbox" class="checkbox")
                | Husbåd
            label.house-section__checkbox
                input(type="checkbox" class="checkbox")
                | Erhversdomicil
</template>

<style scoped lang="sass">

.housing-type
    max-width: 100vw
    gap: 8px
    display: flex
    flex-direction: column

    &__header
        font-size: 12px
        font-weight: 400
        color: var(--gray-600)

    &__sections
        gap: 8px
        height: 164px
        width: 100%
        display: flex
        flex-direction: row
        justify-content: space-between

.house-section__1, .house-section__2
    gap: 4px
    height: 164px
    display: flex
    width: 510.5px
    flex-direction: column
    align-items: flex-start

.house-section__checkbox
    gap: 8px
    display: flex
    flex-direction: row
    align-items: center
    font-size: 16px
    font-weight: 400
    line-height: 24px
    letter-spacing: 0em
    text-align: left
    color: var(--gray-600)
</style>