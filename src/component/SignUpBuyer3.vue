<script setup lang="ts">
import LogInPictureBuyer from "./icons/LogInPictureBuyer.vue";
import ButtonComponent from "./ButtonComponent.vue";
import IconArrowLeft from "./icons/IconArrowLeft.vue";
import SignUpSlider from "./SignUpSlider.vue";
import SpecialRequirements from "./SpecialRequirements.vue";
import HouseType from "./HouseType.vue";
import SignUpSlider2 from "./SignUpSlider2.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const goNext = () => {
    router.push("/buyer")
}

const goBack = () => {
    window.history.back();
};

</script>

<template lang="pug">
.container
    .content
        .content__back
            ButtonComponent(:secondary="true" @click="goBack")
                IconArrowLeft 
            p Gå tilbage
        .step 
            .step-title step 3/3
            .step-text Dette er den sidste side inden du kan blive oprettet i vores køberkartotek - du kan altid ændre og slette dine oplysninger nemt og hurtigt
        SignUpSlider 
        SpecialRequirements 
        HouseType 
        SignUpSlider2
        .buttons 
            ButtonComponent(:secondary="true" @click="goBack") Tilbage
            ButtonComponent(:fullWidth="true" @click="goNext") Opret

    LogInPictureBuyer 
</template>

<style scoped lang="sass">
.container
    display: flex
    align-items: flex-start
    justify-content: space-between

.buttons
    gap: 8px
    display: flex

.step
    gap: 16px
    display: flex
    flex-direction: column

.inputs
    gap: 24px
    display: flex
    flex-direction: column

.input
    padding: 12px 18px 
    border-radius: 8px
    border: 1px solid #EAF0FF

.group
    gap: 4px
    display: flex
    flex-direction: column

.step-title
    font-size: 14px
    font-weight: 500
    color: #344054

.mini-title
    font-size: 12px
    font-weight: 400
    color: var(--gray-600)

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