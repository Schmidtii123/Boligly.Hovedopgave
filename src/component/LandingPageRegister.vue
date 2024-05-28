<script setup lang="ts">
import { useRouter } from "vue-router";
import RegisterComponent from "@/component/RegisterComponent.vue";

const router = useRouter();

const aboutItems = [
  {
    title: "Ejendomsmægler",
    text: "Registrer dit køberkartotek hos os og bliv set af mange tusinde boligsælgere",
    buttonText: "Registrer som ejendomsmægler",
    avatarImageSrc: "/realtor.jpeg",
    active: true,
    link: "/sign-up/realtor",
  },
  {
    title: "Køberkartotek",
    text: "Opret dig i ét landsdækkende køberkartotek - Danmarks største portal hvor boligsælgere kan søger efter købere",
    buttonText: "Registrer i køberkartotek",
    avatarImageSrc: "/buyer.jpeg",
    active: false,
    link: "/sign-up/buyer",
  },
  {
    title: "Sælg din bolig",
    text: "Indtast din adresse og find købere til din bolig. Ingen registrering kræves med mindre du ønkser at gemme adressen og få besked hvis der kommer en nye købere",
    buttonText: "Find køber til din bolig",
    avatarImageSrc: "/selling.jpeg",
    active: false,
    link: "/sign-up/seller",
  },
];

const navigateTo = (link: string) => {
  router.push(link);
};
</script>

<template lang="pug">
.content
  .header
    span.span Boligly
    | - Søg i Danmarks største køberkartotek
  .low_content
    .header-4 Tjek om der er købere til din bolig - 100% anonymt
    .paragraph Søger du efter en ny bolig? så opret dig i vores køberkartotek Ønsker du at sælge bolig? så indtast din adresse og søg efter købere Helt gratis for alle private
  .cards
    RegisterComponent(v-for="item in aboutItems" 
      :key="item.title" 
      :title="item.title" 
      :text="item.text" 
      :buttonText="item.buttonText" 
      :avatarImageSrc="item.avatarImageSrc" 
      :active="item.active"
      :link="item.link"
      :onButtonClick="() => navigateTo(item.link)"
    )
</template>

<style lang="sass" scoped>
.cards
  display: flex
  flex-direction: row
  justify-content: space-around
  width: fill(1, 176px)
  height: hug(438px)
  gap: 30px

.content
  display: flex
  flex-direction: column
  align-items: center
  background-color: var(--background)
  padding: 32px
  border-radius: 32px
  gap: 32px
  max-width: 1240px
  margin: 0 auto
  text-align: center

.header
  width: 1176px
  font-size: 48px
  font-weight: 700
  color: var(--header)
.header-4
  font-size: 32px
  font-weight: 700
  line-height: 44px
  letter-spacing: -0.02em
  color: #344054
.paragraph
  width: 435px
  font-size: 14px
  align-self: center
  font-weight: 400
  line-height: 20px
  letter-spacing: 0em
  color: var(--gray-600)

.low_content
  display: flex
  gap: 8px
  flex-direction: column

.content h4
  font-size: 32px
  font-weight: 700
  line-height: 44px

.span
  color: #213976

.content p
  max-width: 463px
  font-size: 14px
  line-height: 20px
  font-weight: 400
</style>