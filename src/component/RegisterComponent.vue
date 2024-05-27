<script setup lang="ts">
import { defineProps } from "vue";
import AvatarComponent from "./AvatarComponent.vue";
import ButtonComponent from "./ButtonComponent.vue";

interface AboutItem {
  title: string;
  text: string;
  buttonText: string;
  avatarImageSrc: string;
  active: boolean;
  link: string;
  onButtonClick: () => void;
}

withDefaults(defineProps<AboutItem>(), {
  active: false,
});
</script>

<template lang="pug">
.about-item(:class="{ 'active': active }")
  AvatarComponent(class="image" :size="120" :imageSrc="avatarImageSrc")
  .content
    .title {{ title }}
    .text {{ text }}
    ButtonComponent(:tertiary="active" :fullWidth="true" @click="onButtonClick")
      span(slot="left")
      .buttonText|{{ buttonText }}
      span(slot="right")
</template>

<style lang="sass" scoped>

.image
  margin-top: 16px
  margin-right: 16px
  align-self: flex-end

.content
  max-width: 325px
  margin: 16px
  height: 189px
  display: flex
  max-width: 100%
  text-align: start
  flex-direction: column

.about-item
  width: 372px
  height: 438px
  display: flex
  margin-top: 20px
  text-align: start
  align-items: center
  margin-bottom: 20px
  border-radius: 32px
  flex-direction: column
  justify-content: space-between
  background-color: var(--white-50)

.buttonText
  font-size: 16px
  font-weight: 500

.active
  color: var(--white-50)
  background-color: var(--primary)

.title
  font-size: 32px
  margin-bottom: 1rem

.text
  width: 295px
  font-size: 12px
  line-height: 18px
  margin-bottom: 1rem
  min-height: 65px
</style>