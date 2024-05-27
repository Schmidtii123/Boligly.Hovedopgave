<script setup lang="ts">
import IconDots from './icons/IconDots.vue';
import ButtonComponent from './ButtonComponent.vue';
interface Props{
    myAddresse: string;
    aboutAddresse: string;
    image: string;
}
defineProps<Props>()
</script>

<template lang="pug">
.card-adress
    .card-adress__content 
        .card-adress__icon: IconDots
        img.image(:src="image")
        .card-adress__text-content
            .card-adress__title {{ myAddresse }}
            .card-adress__text {{ aboutAddresse }}
            .card-adress__buttons
                ButtonComponent.buttonEdit(:tertiary="true" :fullWidth="true") Edit
                ButtonComponent(fullWidth="true") View leads
</template>
<style lang="sass" scoped>
.card-adress
    width: 526px
    height: 415px
    padding: 24px
    border-radius: 16px
    display: flex
    flex-direction: column
    background-color: var(--secondary)
    margin: 0 auto
    margin-top: 3rem
    &__content
        gap: 16px
        width: 100%
        display: flex
        flex-direction: column
    &__icon
        display: flex
        align-self: flex-end

    &__text-content
        gap: 16px
        width: 478px
        display: flex
        flex-direction: column
    &__title
        width: 478px
        height: 38px
        font-size: 24px
        font-weight: 500
        text-align: left
        line-height: 38px
        letter-spacing: 0em
        color: var(--header)
    &__text
        width: 478px
        height: 48px
        font-size: 16px
        font-weight: 400
        line-height: 24px
        color: var(--gray-text)
    &__buttons
        display: flex
        gap: 16px
.image
    width: 478px
    height: 145px
    object-fit: cover
    border-radius: 8px
</style>