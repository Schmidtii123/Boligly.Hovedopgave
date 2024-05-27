<script setup lang="ts">
import ButtonComponent from "./ButtonComponent.vue";
import IconArrowLeft from "./icons/IconArrowLeft.vue";
import LogInPictureSeller from "./icons/LogInPictureSeller.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref('');
const password = ref('');

const goToSeller = () => {
    if (!email.value || !password.value) {
        alert('Email og Password skal udfyldes, eller tjek om det er skrevet korrekt.');
        return;
    }
    router.push("/seller");
};

const goToHome = () => {
  router.push("/");
};
</script>

<template lang="pug">
.container 
    .sign-up
        .log-in
        .sign-up__back 
            ButtonComponent(:secondary="true" @click="goToHome")
                IconArrowLeft
            .sign-up__back-text Gå tilbage til Forsiden
        .sign-up__content
                .sign-up__welcome 
                    .sign-up__welcome-title Log in som Sælger
                    .sign-up__welcome-text Indtast dine loginoplysninger og gå direkte til dit dashboard
                .sign-up__input 
                    input.input(placeholder="Email" type="email" v-model="email")
                    input.input(placeholder="Password" type="password" v-model="password")
                .sign-up__button
                    ButtonComponent(:primary="true" @click="goToSeller") Log in
                    .sign-up__button-text
                        .span Har du ikke en konto?
                        a.log-in(href="/sign-up/seller") sign up

    LogInPictureSeller
</template>

<style lang="sass" scoped>
.container
    display: flex

    
.sign-up
    gap: 80px
    width: 538px

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


</style>
