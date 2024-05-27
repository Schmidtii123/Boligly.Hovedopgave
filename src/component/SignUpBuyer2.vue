<script setup lang="ts">
import LogInPictureBuyer from "./icons/LogInPictureBuyer.vue";
import ButtonComponent from "./ButtonComponent.vue";
import IconArrowLeft from "./icons/IconArrowLeft.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goNext = () => {
    router.push("/sign-up/buyer/3")
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
            .p Gå tilbage
        .step 
            .step-title step 2/3
            .step-text På de næste 2 sider spørger vi om forskellige ting i forbindelse med oprettelse i vores køberkartotek - du kan altid ændre og slette dine oplysninger nemt og hurtigt
        .inputs
            .group 
                .mini-title Indtast postnr.(adskil med komma v/flere)
                input.input(type="number" placeholder="Postnr. på de steder du søger efter bolig")
            .group
                .mini-title Indtast områder (valgfrit) 
                input.input(type="text" placeholder="Bestemt område, bydel mm.")
            .group
                .mini-title Indtast adresse (valgfrit)
                input.input(type="text" placeholder="Bestemt adresse (evt.  husnr.)")


        .buttons 
            ButtonComponent(:secondary="true" @click="goBack") Tilbage
            ButtonComponent(:fullWidth="true" @click="goNext") Næste

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