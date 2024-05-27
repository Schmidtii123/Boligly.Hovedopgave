<script setup lang="ts">
import ButtonComponent from "./ButtonComponent.vue";
import IconArrowLeft from "./icons/IconArrowLeft.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goToSellerLogIn = () => {
    router.push("/seller");
    };


const signedUp = ref(false);
const formData = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
};

const goToHome = () => {
  router.push("/");
};

const handleSignUp = () => {
  if (!validateInput()) {
    return;
  }
  signedUp.value = true;
};

const validateInput = () => {
  if (
    !formData.name ||
    !formData.email ||
    !formData.phoneNumber ||
    !formData.password
  ) {
    alert("Du skal udfylde alle felter før du kan tilmelde dig");
    return false;
  }
  return true;
};
</script>

<template lang="pug">
.sign-up 
    .sign-up__back 
        ButtonComponent(:secondary="true" @click="goToHome")
            IconArrowLeft
        .sign-up__back-text Gå tilbage
    .sign-up__content
        template(v-if="!signedUp")
            .sign-up__welcome 
                .sign-up__welcome-title Velkommen
                .sign-up__welcome-text Udfyld nedenstående formular og bliv registreret i Danmarks nye platform for direkte bolighandler 
            .sign-up__input 
                input.input(placeholder="Name" type="text" v-model="formData.name")
                input.input(placeholder="Email" type="email" v-model="formData.email")
                input.input(placeholder="Phone number" type="number" v-model="formData.phoneNumber")
                input.input(placeholder="Password" type="password" v-model="formData.password")
            .sign-up__button
                ButtonComponent(:primary="true" @click="handleSignUp") Tilmeld
                .sign-up__button-text
                    .span Har du allerede en konto?
                    a.log-in(href="/log-in/seller") Log in 
        template(v-else)
            .sign-up__welcome
                .sign-up__welcome-title Tak for din tilmelding
                .sign-up__welcome-email Vi har sendt en e-mail til example@eksempel.dk. Tjek venligst din mail og bekræft din konto (Husk at tjekke din SPAM mappe)
            .sign-up__button
                ButtonComponent(:primary="true" @click="goToSellerLogIn") Log in
</template>

<style lang="sass" scoped>
.sign-up
    gap: 80px
    width: 538px
    height: 654px
    display: flex
    margin: 0 auto
    align-items: center
    flex-direction: column
    align-items: flex-start

    &__back
        gap: 15px
        display: flex
        align-items: center

    &__back-text
        font-size: 16px
        font-weight: 500
        line-height: 24px
        letter-spacing: 0em
        color: var(--gray-text)

    &__content
        gap: 56px
        display: flex
        flex-direction: column

    &__welcome
        gap: 16px
        display: flex
        flex-direction: column

    &__welcome-title
        font-size: 48px
        text-align: left
        font-weight: 700
        line-height: 60px
        letter-spacing: -0.02em
        color: var(--header)

    &__welcome-text
        font-size: 14px
        text-align: left
        font-weight: 400
        line-height: 20px
        letter-spacing: 0em
        color: var(--gray-500)

    &__welcome-email
        font-size: 14px
        text-align: left
        font-weight: 500
        line-height: 20px
        letter-spacing: 0em
        color: var(--gray-600)

    &__input
        gap: 14px
        width: 538px
        height: 234px
        display: flex
        flex-direction: column

    &__button
        gap: 16px
        height: 48px
        display: flex
        flex-direction: column
    &__button-text
        gap: 4px
        display: flex
        justify-content: center
        align-items: center
.input
    gap: 8px
    width: 100%
    border: 1px
    display: flex
    border-radius: 8px
    border: 1px solid #EAF0FF
    padding: 12px 18px 12px 18px

.span
    font-size: 16px
    font-weight: 400
    line-height: 24px
    letter-spacing: 0em
    text-align: center
    color: var(--gray-600)

.log-in
    font-weight: 500
    text-decoration: none
    color: var(--primary)
</style>
