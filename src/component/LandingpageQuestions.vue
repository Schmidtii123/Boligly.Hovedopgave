<script setup lang="ts">
import { useRouter } from 'vue-router';
import HomePictures from "./HomePictures.vue";
import ButtonComponent from "./ButtonComponent.vue";

const router = useRouter();

const goToContactView = () => {
    router.push('/contact');
}
</script>
<template lang="pug">
.section
    .questions
        .questions__text 
            .questions__header Har du spørgsmål?
            .questions__paragraph Du kan altid kontakte vores kundeservice hvis du har nogle spørgsmål eller ting du ønsker at informere os om. Vi besvare din henvendelse samme dag som vi modtager din besked. Tryk på knappen herunder og gå til vores kontaktcenter.
        ButtonComponent.button(@click="goToContactView")
            | Kontakt os
    HomePictures
</template>

<style lang="sass" scoped>
.section
    gap: 56px
    width: 1240px
    height: 642px
    display: flex
    margin: 0 auto
    align-items: center
    flex-direction: row
.questions
    gap: 64px
    width: 492px
    height: 280px
    display: flex
    flex-direction: column
    &__text
        gap: 8px
        display: flex
        flex-direction: column
        align-items: flex-start
    &__header
        font-size: 48px
        font-weight: 700
        line-height: 60px
        text-align: center
        color: var(--header)
        letter-spacing: -0.02em
    &__paragraph
        font-size: 14px
        text-align: left
        font-weight: 400
        line-height: 20px
        letter-spacing: 0em
        color: var(--gray-600)

.button
    width: 207px

</style>
