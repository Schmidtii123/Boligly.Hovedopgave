<script setup lang="ts">
import PlusIcon from "./icons/PlusIcon.vue";
import MinusIcon from "./icons/MinusIcon.vue";
import { ref } from "vue";

interface Props {
  title: string;
}

defineProps<Props>();

const isOpen = ref(false);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template lang="pug">
.accordion-component
    .accordion-component__header(@click="toggleOpen")
        .accordion-component__title {{ title }}
        .accordion-component__icon
            PlusIcon(v-if="!isOpen")
            MinusIcon(v-else)
    transition(name="fade", mode="out-in")
        .accordion-component__body(v-if="isOpen")
            slot
</template>

<style scoped lang="sass">
.accordion-component
    width: 40vw
    overflow: hidden
    border-radius: 8px
    color: var(--gray-500)
    box-sizing: border-box
    border: 1px solid #D5E1FF

    &__header
        display: flex
        padding: 0 32px
        cursor: pointer
        min-height: 88px
        border-radius: 8px
        align-items: center
        justify-content: space-between
        background-color: var(--white-50)

    &__title
        order: 1
        display: flex
        border-radius: 8px
        line-height: 1.4rem
        box-sizing: border-box
        justify-content: space-between

    &__icon
        order: 2
        font-size: 40px

    &__body
        padding: 32px

.fade-enter-active, .fade-leave-active
    transition: opacity 0.3s ease-out

.fade-enter, .fade-leave-to
    opacity: 0
</style>
