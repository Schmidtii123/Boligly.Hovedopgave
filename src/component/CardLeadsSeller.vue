<script setup lang="ts">
import AvatarComponent from "@/component/AvatarComponent.vue";
import ButtonComponent from "@/component/ButtonComponent.vue";
import IconDots from "@/component/icons/IconDots.vue";
import IconContact from "@/component/icons/IconContact.vue";

interface Props {
    name: string;
    match: string;
    address: string;
    buttonText: string;
    avatarImageSrc: string;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    size: number;
    showIcon: boolean;
}
defineProps<Props>();


</script>

<template lang="pug">
.card-component(@click="handleClick")
  .card-component__avatar
    AvatarComponent(:size="size" :imageSrc="avatarImageSrc")
    .card-component__dots: IconDots
  .card-component__content
    .card-component__name {{ name }}
    .card-component__match {{ match }}
    .card-component__adress {{ address }}
  ButtonComponent(:primary="primary" :secondary="secondary" :tertiary="tertiary" )
    IconContact(v-if="showIcon" :color="'var(--primary)'")
    | {{ buttonText }}

</template>

<style lang="sass" scoped>
.card-component
    gap: 16px
    width: 350px
    display: flex
    height: 382px
    padding: 24px
    border-radius: 16px
    flex-direction: column
    background: var(--secondary)
    &__content
        gap: 16px
        width: 313px
        display: flex
        flex-direction: column
        align-items: flex-start
    &__name
        font-size: 24px
        text-align: left
        font-weight: 500
        line-height: 38px
        letter-spacing: 0em
        color: var(--header)
    &__match, &__adress
        font-size: 14px
        text-align: left
        font-weight: 400
        line-height: 24px
        letter-spacing: 0em
        color: var(--gray-text)
    .card-component__avatar
        width: 313px
        height: 80px
        display: flex
        justify-content: space-between
    &__dots
        display: flex
        align-self: flex-start
</style>
