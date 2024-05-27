<script setup lang="ts">
import { RouterLink } from "vue-router";
import ButtonComponent from "./ButtonComponent.vue";
import IconDown from "./icons/IconDown.vue";
</script>

<template lang="pug">
.nav
    .nav__header Boligly
    .nav__routes
        RouterLink(to="/") Forside
        RouterLink(to="/faq") FAQ
        RouterLink(to="/contact") Kontakt
        RouterLink(to="/") Se din adresse
    .log_in
        RouterLink.button__log-in(to="#") Log in
        RouterLink.button__sign-up(to="/sign-up/realtor") Sign up
            IconDown
</template>

<style lang="sass" scoped>
.nav
    width: 1240px
    display: flex
    margin: 0 auto
    margin-top: 2rem
    max-width: 1240px
    padding: 25px 16px
    align-items: center
    border-radius: 1000px
    background: var(--secondary)
    justify-content: space-between
    &__header
        font-size: 24px
        font-weight: 700
        color: var(--header)
    &__routes
        gap: 32px
        display: flex
        font-size: 18px
        font-weight: 400
        text-decoration: none
        a
            color: #101828
            position: relative
            text-decoration: none
            &:hover
                font-weight: 500
                text-decoration: underline
.log_in
    gap: 16px
    width: 244px
    display: flex
.button__log-in
    gap: 8px
    width: 93px
    height: 48px
    border: none
    display: flex
    cursor: pointer
    align-items: center
    color: var(--primary)
    text-decoration: none
    border-radius: 1000px
    padding: 12px 24px 12px 24px
    background-color: var(--tertiary)
    &:hover
        color: var(--tertiary)
        background-color: var(--primary)
.button__sign-up
    gap: 8px
    width: 135px
    height: 48px
    border: none
    display: flex
    cursor: pointer
    align-items: center
    text-decoration: none
    border-radius: 1000px
    color: var(--tertiary)
    background: var(--primary)
    padding: 12px 24px 12px 24px
    &:hover
        background-color: #365298
</style>
