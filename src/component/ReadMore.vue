        <script setup>
        import ButtonComponent from './ButtonComponent.vue';
        </script>
<template lang="pug">
.content
    img.image(src="/villa.jpeg", alt="Picture of a villa")
    .content__text
        .content__header Hvad er Boligly
        .content__paragraph Boligly er Danmarks nye platform, hvor boligsælger kan søge blandt alle køberkartoteker i hele landet. Du får vist potentielle købere med det samme, og kan kontakte leadet med det samme. 
        ButtonComponent.button(
            class="button"
            ) Læs mere

</template>


<style lang="sass" scoped>

.content
    gap: 96px
    display: flex
    padding: 96px
    margin: 0 auto
    max-height: 548
    max-width: 1240px
    align-items: center
    border-radius: 32px
    background: var(--background)
    justify-content: space-around
    &__header
        color: #1D2939
        font-size: 48px
        text-align: left
        font-weight: 700
        line-height: 60px
        letter-spacing: -0.02em

    &__paragraph
        font-size: 14px
        text-align: left
        font-weight: 400
        line-height: 20px
        letter-spacing: 0em
        color: var(--gray-600)
    &__text
        gap: 32px
        display: flex
        height: 356px
        width: 582px
        flex-direction: column
.image
    width: 370px
    height: 356px
    border-radius: 32px
    object-fit: cover
    
.button
    width: 207px

</style>