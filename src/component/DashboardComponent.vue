<script setup lang="ts">
import AvatarComponent from "./AvatarComponent.vue";
import IconArrowRight from "./icons/IconArrowRight.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goToLeads = () =>{
    router.push('/leads')
}

interface Props {
  avatarImageSrc: string;
  person?: string;
  address?: string;
}
defineProps<Props>();
</script>

<template lang="pug">
.dashboard-card(@click="goToLeads")
    .dashboard-card__content 
        .dashboard-card__text-avatar
            AvatarComponent(:size="50" :imageSrc="avatarImageSrc")
            .dashboard-card__text
                .dashboard-card__person {{ person }} 
                .dashboard-card__address {{ address }} 
        IconArrowRight

</template>

<style scoped lang="sass">
.dashboard-card
    width: 340px
    height: 80px
    cursor: pointer
    border-radius: 8px
    background-color: var(--secondary)
    &__content
        display: flex
        align-items: center
        flex-direction: row
        justify-content: space-around
        height: 100%
    &__text-avatar
        gap: 8px
        display: flex
        align-items: center
        flex-direction: row
    &__text
        gap: 6px
        display: flex
        flex-direction: column
        max-width: 100%
    &__person
        font-size: 16px
        font-weight: 500
        color: var(--header)
    &__address
        font-size: 14px
        font-weight: 400
        color: var(--gray-text)
</style>
