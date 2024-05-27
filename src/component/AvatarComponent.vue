<script setup lang="ts">
interface Props {
    size: number
    imageSrc?: string
}

withDefaults(defineProps<Props>(), {
    size: 100
})
</script>

<template lang="pug">
img.avatar(:width="size" :height="size" :src="imageSrc" alt="Avatar")
</template>

<style scoped lang="sass">
.avatar
  border-radius: 80%
  object-fit: cover
</style>
