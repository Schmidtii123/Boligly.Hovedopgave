<script setup lang="ts">
import SideBarRealtor from "./SideBarRealtor.vue";
import ButtonComponent from "./ButtonComponent.vue";
import LeftArrow from "./icons/LeftArrow.vue";
import HouseType from "./HouseType.vue";
import SpecialRequirements from "./SpecialRequirements.vue";
import HousePreference from "./HousePreference.vue";
import MultiRangeSlider from "./MultiRangeSlider.vue";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const goBack = () => {
  router.go(-1);
};

// Initialize activeTab from localStorage or default to 0
const activeTab = ref(parseInt(localStorage.getItem('activeTab') || '0'));

// Update localStorage whenever activeTab changes
watch(activeTab, (newTab) => {
  localStorage.setItem('activeTab', newTab.toString());
});

const activateTab = (index: number) => {
  activeTab.value = index;
  console.log("Active Tab:", activeTab.value);
};

const goToBuyerList = () => {
    router.push('/buyer-list');
};

const goToNewProfile = () => {
    router.push('/new-profile');
};
</script>

<template lang="pug">
.new-user
    SideBarRealtor
    .new-user__content
        .new-user__return
            ButtonComponent(:secondary="true" @click="goBack")
                LeftArrow
            .button-text Tilbage til køberkartotek
        .new-user__tabs
            .new-user__tabs-personal(:class="{ active: activeTab === 0 }" @click="activateTab(0)") Personal
            .new-user__tabs-real-estate(:class="{ active: activeTab === 1 }" @click="activateTab(1)") Desirable real estate
        .new-user__personal-content(v-show="activeTab === 0")
            .new-user__personal-title Personlig
            .new-user__personal-input
                .input-types
                    .mini-title Indtast navn
                    input.input(type="text" placeholder="Navn")
                .input-types 
                    .mini-title Indtast e-mail
                    input.input(type="email" placeholder="Email")
                .input-types 
                    .mini-title Indtast telefon nr.
                    input.input(type="number" placeholder="Telefon nr.")
            .new-user__personal-amount    
                .mini-title Choose an amount
                MultiRangeSlider 
            .new-user__personal-search
                .mini-title Din status
                select.input-select(name="#" id="#")
                    option(value="#" disabled selected) Vælg
                    option(value="#") Købeklar
                    option(value="#") Kigger
                    option(value="#") Interesseret i info
                    option(value="#") Passiv
            .new-user__message-text
                .new-user__message
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
                .new-user__text
                    .mini-title Fri tekst
                    textarea.input-text(placeholder="Skriv nogle særlige behov...")
            .new-user__personal-input
                .input-types
                    .mini-title Indtast postnr
                    input.input(type="text" placeholder="F.eks 7190,8000,7200")
                    .mini-paragraph Separer med komma
                .input-types 
                    .mini-title Indtast område (valgfrit)
                    input.input(type="text" placeholder="F.eks bydel, område")
                .input-types 
                    .mini-title indtast vejnavn (valgfrit)
                    input.input(type="text" placeholder="F.eks Vestergade, vestergade 12-20")
            .buttons
                ButtonComponent.button(:secondary="true" @click="goToBuyerList") Cancel
                ButtonComponent.button(:primary="true" @click="activateTab(1)") Next
        .new-user__desirable-content(v-show="activeTab === 1")
            .title Desirable real estate 
            HouseType
            HousePreference 
            SpecialRequirements
            .buttons
                ButtonComponent.button(:secondary="true" @click="activateTab(0)") Back
                ButtonComponent.button(:primary="true" @click="goToNewProfile") Save
</template>

<style scoped lang="sass">
.new-user
    gap: 3rem
    display: flex
    max-width: 100wv

    &__content
        gap: 32px
        width: 100%
        display: flex
        padding: 56px 32px
        flex-direction: column

    &__return
        gap: 1rem
        display: flex
        align-items: center

    &__tabs
        padding: 4px
        display: flex
        max-width: 23%
        border-radius: 4px
        justify-content: space-between
        background-color: var(--background)

    &__tabs-personal
        padding: 8px
        cursor: pointer
        font-size: 14px
        font-weight: 500
        color: var(--gray-500)

    &__tabs-personal.active
        background-color: var(--tertiary)
        color: var(--primary)

    &__tabs-real-estate
        padding: 8px
        cursor: pointer
        font-size: 14px
        font-weight: 500
        color: var(--gray-500)

    &__tabs-real-estate.active
        background-color: var(--tertiary)
        color: var(--primary)

    &__personal-content
        gap: 24px
        display: flex
        padding: 24px
        flex-direction: column

    &__personal-title
        font-size: 24px
        font-weight: 500
        color: var(--header)

    &__personal-input
        gap: 24px
        display: flex
        justify-content: space-between

    &__personal-amount
        gap: 8px
        display: flex
        flex-direction: column

    &__personal-search
        gap: 8px
        display: flex
        flex-direction: column

    &__message-text
        display: flex
        min-height: 130px
        justify-content: space-between

    &__message
        gap: 8px
        display: flex
        flex-direction: column

    &__text
        gap: 8px
        display: flex
        flex-direction: column

    &__desirable-content
        gap: 24px
        display: flex
        padding: 24px
        flex-direction: column

.button-text
    font-size: 16px
    font-weight: 500
    color: var(--gray-text)

.mini-title
    font-size: 12px
    font-weight: 400
    color: var(--gray-600)

.input
    opacity: 0px
    font-size: 14px
    padding: 12px 18px
    border-radius: 8px
    border: 1px solid #EAF0FF

.input-types
    gap: 4px
    width: 100%
    display: flex
    flex-direction: column

.notification
    gap: 4px
    display: flex
    align-items: center

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

.paragraph
    font-size: 16px
    color: #1D2939

.input-text
    min-width: 30rem
    height: 100%
    padding: 12px 18px
    border-radius: 8px
    border: 1px solid #EAF0FF


    

.mini-paragraph
    font-size: 12px
    font-weight: 400
    color: #98A2B3

.buttons
    gap: 8px
    display: flex
    align-items: center
    justify-content: flex-end

.button
    min-width: 170px

.title
    font-size: 24px
    font-weight: 500
    color: var(--header)

</style>
