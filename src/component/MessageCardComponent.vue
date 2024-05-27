<script setup lang="ts">
import AvatarComponent from "./AvatarComponent.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goToChat = () => {
    router.push('/chat')
}

interface Props {
  avatarImageSrc: string;
  person?: string;
  text?: string;
  Date: string;
}
defineProps<Props>();
</script>

<template lang="pug">
.dashboard-card(@click="goToChat")
    .dashboard-card__content 
        AvatarComponent(:size="50" :imageSrc="avatarImageSrc")
        .dashboard-card__messages    
            .dashboard-card__person-text
                .dashboard-card__person {{ person }} 
                .dashboard-card__text {{ text }} 
            .dashboard-card__date {{ Date }}
        
</template>

<style scoped lang="sass">
.dashboard-card
    width: 340px
    height: 80px
    cursor: pointer
    border-radius: 8px
    background-color: var(--secondary)
    &__content
        gap: 8px
        display: flex
        align-items: center
        flex-direction: row
        height: 100%
    &__text-avatar
        gap: 8px
        display: flex
        align-items: center
        flex-direction: row
    &__person-text
        gap: 6px
        display: flex
        flex-direction: column
        max-width: 100%
    &__person
        font-size: 16px
        font-weight: 500
        color: var(--header)
    &__text
        font-size: 14px
        font-weight: 400
        color: var(--gray-text)
    &__messages
        width: 250px
        display: flex
        align-items: center
        justify-content: space-between
    &__date
        font-size: 12px
        color: var(--gray-600)
</style>
