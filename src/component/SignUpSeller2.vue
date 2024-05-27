<script setup lang="ts">
import LogInPictureSeller from "./icons/LogInPictureSeller.vue";
import ButtonComponent from "./ButtonComponent.vue";
import IconArrowLeft from "./icons/IconArrowLeft.vue";
import HouseType from "./HouseType.vue";
import HousePreferenceSeller from "./HousePreferenceSeller.vue";
import SpecialRequirements from "./SpecialRequirements.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goNext = () => {
    router.push("/sign-up/seller/3")
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
            .step-title step 2/2
            .step-text Udfyld så meget du ønsker af nedenstående parametre. Jo mere du udfylder, jo bedre leads får du. Du kan altid justere dine valg efterfølgende.
            
        HouseType 
        HousePreferenceSeller 
        SpecialRequirements

        .buttons
            ButtonComponent(:secondary="true" @click="goBack") Tilbage
            ButtonComponent(:fullWidth="true" @click="goNext") Se leads

    LogInPictureSeller

</template>

<style scoped lang="sass">
.container
    display: flex
    align-items: flex-start
    justify-content: space-between

.buttons
    gap: 8px
    display: flex


.input
    padding: 12px 18px
    border-radius: 8px
    border: 1px solid #EAF0FF

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
    
    &__data
        gap: 32px
        display: flex
        flex-direction: column

    &__info
        gap: 8px
        display: flex
        flex-direction: column

    &__back
        gap: 8px
        display: flex
        flex-direction: row
        align-items: center
</style>