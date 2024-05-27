<script setup lang="ts">
import CardLeads from "@/component/CardLeads.vue";
import ReviewCards from "@/component/ReviewCards.vue";
import SignUpComponent from "@/component/SignUpComponent.vue";
const cardItems = [
  {
    name: "EDC",
    match: "Maching 9/9 properties",
    address: "Flintemarken 19",
    buttonText: "Contact",
    avatarImageSrc: "/realtor.jpeg",
    tertiary: true,
    showIcon: true,
  },
  {
    name: "EDC",
    match: "Maching 9/9 properties",
    address: "Frederiks allé 6",
    buttonText: "Buy leads",
    avatarImageSrc: "/selling.jpeg", 
    primary: true,
  },
  {
    name: "Boligly",
    match: "Jægergaardsgade 6",
    address: "Maching 9/9 properties",
    buttonText: "See details",
    avatarImageSrc: "/buyer.jpeg",
    tertiary: true,
  },
  {
    name: "Boligly",
    match: "Maching 9/9 properties",
    address: "Dalgas avenue 6",
    buttonText: "Buy leads",
    avatarImageSrc: "/selling.jpeg",
    primary: true,
  },
  {
    name: "Boligly",
    match: "Maching 9/9 properties",
    address: "Dalgas avenue 6",
    buttonText: "Buy leads",
    avatarImageSrc: "/realtor.jpeg",
    primary: true,
  },
  {
    name: "Boligly",
    match: "Maching 9/9 properties",
    address: "Dalgas avenue 6",
    buttonText: "Buy leads",
    avatarImageSrc: "/buyer.jpeg",
    tertiary: true,
  },
  {
    name: "Boligly",
    match: "Maching 9/9 properties",
    address: "Dalgas avenue 6",
    buttonText: "Buy leads",
    avatarImageSrc: "/selling.jpeg",
    tertiary: true,
  },
];
</script>

<template lang="pug">
.cards
    CardLeads(
      v-for="item in cardItems"
      :key="item.name"
      :name="item.name"
      :match="item.match"
      :address="item.address"
      :buttonText="item.buttonText"
      :avatarImageSrc="item.avatarImageSrc"
      :primary="item.primary"
      :secondary="item.secondary"
      :tertiary="item.tertiary"
      :size="80"
      :showIcon="item.showIcon"
      )
.idk
 
</template>

<style scoped lang="sass">
.cards
  display: flex
  flex-direction: row
  gap: 24px
  flex-wrap: wrap
  width: 746px
.idk
  height: 5000px
</style>
