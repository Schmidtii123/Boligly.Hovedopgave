<script setup>
import ButtonComponent from "./ButtonComponent.vue";
</script>
<template lang="pug">
.content
    .section
        .search
            .search__content
                .header FAQs
                .search__text Stuck on something or getting started? Our team will help you.
            input(class="input" type="search" placeholder="Search")
</template>

<style lang="sass" scoped>
.section
    gap: 8px
    width: 490px
    height: 268px
    margin-top: auto
    padding: 32px 32px 0px 0px
    border-radius: 0px 32px 0px 32px
    background-color: var(--white-50)
.content
    width: 1240px
    height: 450px
    display: flex
    border-radius: 32px
    flex-direction: column
    background-size: cover
    background-position: center
    background-image: url('/villa4.0.jpeg')
    
.header
    font-size: 48px
    font-weight: 700
    color: #1D2939

.search
    width: 470px
    height: 236px
    padding: 32px
    border-radius: 16px
    gap: 24px
    display: flex
    flex-direction: column
    background-color: #F2F4F7

    &__content
        width: 406px
        height: 88px
        gap: 8px
        display: Flex
        flex-direction: column

    &__text
        font-size: 14px
        font-weight: 400
        line-height: 20px
        letter-spacing: 0em
        text-align: left
        color: var(--gray-500)
.input
    gap: 8px
    width: 362px
    height: 44px
    border: none
    border-radius: 8px
    padding: 12px 16px 12px 16px
</style>
