<script setup lang="ts">
import SignUpSellerPicture from "./icons/SignUpSellerPicture.vue";
import ButtonComponent from "./ButtonComponent.vue";
import IconArrowLeft from "./icons/IconArrowLeft.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goNext = () => {
    router.push("/sign-up/seller/2")
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
            .step-title step 1/2
            .step-text Du kan se potentielle leads uden at oprette en bruger. Indtast din adresse nedenfor, hvorefter vores system trækker informationer om din bolig
        .content__data
            .content__info 
                .mini-title Indtast adresse
                input.input(type="text" placeholder="123 Main Street, København, Danmark")

            .content__info
                .mini-title Salgspris
                input.input(type="number" placeholder="10.000")



        ButtonComponent(:fullWidth="true" @click="goNext") Næste

    img.img(src="/sign-up-seller-picture.png" alt="Picture of a some data on a house, which is on top of the previous picture")

</template>

<style scoped lang="sass">
.container
    display: flex
    align-items: flex-start
    justify-content: space-between

img 
    width: 700px

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