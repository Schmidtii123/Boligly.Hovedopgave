<script setup lang="ts">
import LogInPictureBuyer from "./icons/LogInPictureBuyer.vue";
import ButtonComponent from "./ButtonComponent.vue";
import IconArrowLeft from "./icons/IconArrowLeft.vue";
import MultiRangeSlider from "./MultiRangeSlider.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goNext = () => {
    router.push("/sign-up/buyer/2")
}

const goBack = () => {
    window.history.back();
};

</script>

<template lang="pug">
.container
    .content
        .content__back
            ButtonComponent(:secondary="true" @click="goBack" )
                IconArrowLeft 
            .content__back-text Gå tilbage
        .step 
            .step-title step 1/3
            .step-text På de næste 3 sider spørger vi om forskellige ting i forbindelse med oprettelse i vores køberkartotek - du kan altid ændre og slette dine oplysninger nemt og hurtigt
        .personal-amount    
            .mini-title Beløb til bolig
            MultiRangeSlider 
        .personal-search
            .mini-title Din status
            select.input-select(name="#" id="#")
                option(value="#" disabled selected) Vælg
                option(value="#") Købeklar
                option(value="#") Kigger
                option(value="#") Interesseret i info
                option(value="#") Passiv
       
        .message
            .mini-title Besked notifikationer
            .notification
                input.check(type="checkbox")
                .paragraph Fortrækker opkald 
            .notification
                input.check(type="checkbox")
                .paragraph Fortrækker email
            .notification
                input.check(type="checkbox")
                .paragraph Fortrækker sms
        .free-text
            .mini-title Fri tekst
            textarea.input-text(placeholder="Skriv nogle særlige behov...")

        .buttons 
            ButtonComponent(:secondary="true" @click="goBack") Tilbage
            ButtonComponent(:fullWidth="true" @click="goNext") Næste

    img.img(src="/log-in-buyer.png")
</template>

<style scoped lang="sass">
.container
    display: flex
    align-items: flex-start
    justify-content: space-between

.img
    width: 700px
    
.input-text
    min-width: 30rem
    height: 100%
    padding: 12px 18px
    border-radius: 8px
    border: 1px solid #EAF0FF

.buttons
    gap: 8px
    display: flex
    flex-direction: row

.notification
    gap: 4px
    display: flex
    align-items: center

.paragraph
    font-size: 16px
    color: #1D2939

.message
    gap: 8px
    display: flex
    flex-direction: column

.free-text
    gap: 8px
    display: flex
    flex-direction: column

.personal-search
    gap: 8px
    display: flex
    flex-direction: column

.personal-amount
    gap: 8px
    display: flex
    flex-direction: column

.input-select
    width: 100%
    opacity: 0px
    font-size: 14px
    min-width: 330px
    font-weight: 400
    padding: 12px 18px
    border-radius: 8px
    color: var(--gray-600)
    border: 1px solid #EAF0FF

.check
    width: 18px
    height: 18px


.step
    gap: 16px
    display: flex
    flex-direction: column


.step-title
    font-size: 14px
    font-weight: 500
    color: #344054

.step-text
    font-size: 14px
    font-weight: 400
    color: #667085

.mini-title
    font-size: 12px
    font-weight: 400
    color: var(--gray-600)

.content
    gap: 56px
    width: 730px
    display: flex
    padding: 50px 100px
    flex-direction: column
    justify-content: space-between
    

    &__back
        gap: 8px
        display: flex
        flex-direction: row
        align-items: center
</style>