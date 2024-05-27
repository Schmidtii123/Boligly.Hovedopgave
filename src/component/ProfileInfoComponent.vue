<script setup lang="ts">
import AvatarComponent from "./AvatarComponent.vue";
import SearchStatus from "./SearchStatus.vue";
import ButtonComponent from "./ButtonComponent.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goToChat = () => {
    router.push('/chat');
};
interface Props {
  name: string;
  email: string;
  phoneNumber: string;
  price: number;
  showButton: boolean;
  tagText: string;
  searchStatus: string;
  beskedNotification: string;
  friTekst: string;

}

withDefaults(defineProps<Props>(), {});
</script>

<template lang="pug">

.container__content
    .container__status
        AvatarComponent(:imageSrc="'/realtor.jpeg'" :size="80")
        SearchStatus(:tagText="tagText", :searchStatus="searchStatus")

    .container__name {{ name }}

    .container__profile-info

        .container__info(v-if="email")
            .container__mini-title Mail:
            .container__value {{ email }}

        .container__info(v-if="phoneNumber")
            .container__mini-title  Tlf nr:
            .container__value {{ phoneNumber }}

        .container__info(v-if="price !== undefined")
            .container__mini-title Pris:
            .container__value {{ price }} kr.
        .ekstra
            .container__ekstra-info(v-if="beskedNotification !== undefined")
                .container__mini-title Besked notifikationer
                .container__value {{ beskedNotification }}

            .container__ekstra-info(v-if="friTekst !== undefined")
                .container__mini-title Fritekst 
                .container__value {{ friTekst }}

    ButtonComponent(v-if="showButton" :tertiary="true" :fullWidth="true" @click="goToChat") Go to chat
</template>


<style scoped lang="sass">

.container
    &__content
        gap: 1rem
        padding: 2rem
        display: flex
        border-radius: 16px
        flex-direction: column
        background-color: var(--secondary)
        min-width: 18.5rem
        
    &__status
        display: flex
        align-items: flex-start
        gap: 1rem

    &__profile-info
        display: flex
        flex-direction: column
        gap: 0.8rem

    &__title
        font-size: 24px
        font-weight: 700
        color: var(--header)

    &__mini-title
        font-size: 12px
        font-weight: 400
        color: var(--gray-500)

    &__value
        font-size: 12px
        font-weight: 400
        color: var(--header)

    &__info
        display: flex
        align-items: center
        justify-content: space-between

    &__ekstra-info
        gap: 4px
        display: flex
        flex-direction: column

.ekstra
    gap: 24px
    width: 230px
    display: flex
    flex-direction: column
    margin-top: 1rem
</style>
