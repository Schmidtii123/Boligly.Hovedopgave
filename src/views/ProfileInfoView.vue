<script setup lang="ts">
import ProfileInfoComponent from "@/component/ProfileInfoComponent.vue";
import ButtonComponent from "@/component/ButtonComponent.vue";
import LeftArrow from "@/component/icons/LeftArrow.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const goBack = () => {
  router.go(-1);
};
const goToBuyerList = () => {
    router.push('/buyer-list');
};
const goToNewUser = () => {
    router.push('/new-user');
};

const goToChat = () => {
    router.push('/chat');
};

</script>

<template lang="pug">
.container
    .container__return
        ButtonComponent(:secondary="true" @click="goBack")
            LeftArrow
        .button-text Tilbage til køberkatotek
    .container__content
        ProfileInfoComponent(
            :name= "'Emil Schmidt'"
            :email="'schmidtii2000@gmail.com'"
            :phoneNumber= "'+45 29886411'"
            :price="23000"
            :showButton="true"
            :tagText="'KøbeKlar'"
            :searchStatus="'ready'"
            )
    
        .container__info
            .new-user__tabs
                .new-user__tabs-personal Personlig
                .new-user__tabs-real-estate Ejendom

            .info
                .mini-title Besked notifikationer
                .input
                    input.input-size(type="checkbox")
                    .mini-text Fortrækker opkald
                .input
                    input.input-size(type="checkbox")
                    .mini-text Fortrækker email
                .input
                    input.input-size(type="checkbox")
                    .mini-text Fortrækker SMS
            .info
                .mini-title Fritekst
                .lorem-ipsum Lorem ipsum dolor sit amet consectetur. Pellentesque enim convallis eu ipsum risus lectus mollis euismod. Feugiat in rutrum amet malesuada orci.
            
            .info
                .mini-title Postnumre
                .lorem-ipsum Lorem ipsum dolor sit amet consectetur. Pellentesque enim convallis eu ipsum risus lectus mollis euismod. Feugiat in rutrum amet malesuada orci.
            
            .info
                .mini-title Områder
                .lorem-ipsum Lorem ipsum dolor sit amet consectetur. Pellentesque enim convallis eu ipsum risus lectus mollis euismod. Feugiat in rutrum amet malesuada orci.
            .info
                .mini-title Veje
                .lorem-ipsum Lorem ipsum dolor sit amet consectetur. Pellentesque enim convallis eu ipsum risus lectus mollis euismod. Feugiat in rutrum amet malesuada orci.
    
    .buttons
        ButtonComponent.button(:secondary="true" @click="goToNewUser" ) Rediger
        ButtonComponent.button(:primary="true" @click="goToBuyerList") Luk
              
</template>

<style scoped lang="sass">
.container
    gap: 32px
    display: flex
    margin-top: 1rem
    flex-direction: column
    margin: 2rem

    &__return
        gap: 8px
        display: flex
        align-items: center

    &__content
        gap: 32px
        display: flex
    
    &__profile
        max-width: 300px
    
    &__info
        gap: 20px
        width: 100%
        height: 100%
        display: flex
        flex-direction: column

.mini-title
    color: #475467
    font-size: 12px

.info
    gap: 8px
    display: flex
    flex-direction: column

.input
    display: flex

.input-size
    width: 18px
    height: 18px
    margin-right: 8px   

.new-user__tabs
        padding: 4px
        display: flex
        max-width: 11rem
        max-height: 40px
        border-radius: 4px
        justify-content: space-between
        background-color: var(--background)

.new-user__tabs-real-estate
    padding: 8px
    cursor: pointer
    font-size: 14px
    font-weight: 500
    color: var(--gray-500)


.new-user__tabs-personal
    padding: 8px
    cursor: pointer
    font-size: 14px
    font-weight: 500
    color: var(--gray-500)
    background-color: var(--tertiary)

.button-text    
    font-size: 16px
    font-weight: 500
    color: var(--gray-text)

.buttons
    gap: 8px
    bottom: 0
    display: flex
    position: absolute
    margin-bottom: 1rem
    align-self: flex-end

.button
    min-width: 170px

.mini-text
    color: #475467
    font-size: 16px


.lorem-ipsum
    font-size: 14px
</style>
