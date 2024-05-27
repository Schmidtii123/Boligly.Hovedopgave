<script setup lang="ts">
import AvatarComponent from './AvatarComponent.vue';
interface Props {
  name: string;
  title: string;
  text: string;
  avatarImageSrc: string;
  size: number;
}

withDefaults(defineProps<Props>(),{
    size: 80,
})
</script>
<template lang="pug">
.review-card
    AvatarComponent(:size="size" :imageSrc="avatarImageSrc")
    .review-card__text
        .review-card__name {{ name }}
        .review-card__title {{ title }}
        .review-card__text {{ text }}
</template>

<style scoped lang="sass">
.review-card
    gap: 16px
    width: 276px
    display: flex
    height: 275px
    padding: 16px
    border-radius: 16px
    flex-direction: column
    &__name
        font-size: 16px
        font-weight: 500
        line-height: 24px
        letter-spacing: 0em
        color: var(--header)
    &__title
        font-size: 12px
        font-weight: 400
        line-height: 18px
        letter-spacing: 0em
        color: var(--gray-text)
    &__text
        font-size: 12px
        text-align: left
        font-weight: 400
        line-height: 18px
        letter-spacing: 0em
        color: var(--gray-500)
</style>