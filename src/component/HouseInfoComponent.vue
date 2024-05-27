<script setup lang="ts">
interface Props {
  name: string;
  text: string;
  address: string;
  price: number;
  imageSrc: string;
}

withDefaults(defineProps<Props>(), {});
</script>

<template lang="pug">
.container
    .container__content
        .container__status
            img.img(:src="imageSrc" alt="realtor")
        .container__name {{ name }}

        .container__profile-info
            .container__info 
                .container__value {{ text }}

            .container__info
                .container__mini-title address:
                .container__value {{ address }}

            .container__info
                .container__mini-title Price:
                .container__value ${{ price }}
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
        gap: 4px
        display: flex
        flex-direction: column
        align-items: flex-start

.img
    width: 100%
    max-height: 8rem
    object-fit: cover
    border-radius: 8px
</style>
