<script setup>
import FrontPageArrowLeft from "./icons/FrontPageArrowLeft.vue";
import FrontPageArrowRight from "./icons/FrontPageArrowRight.vue";
import ReviewCards from "./ReviewCards.vue";
const cardItems = [
  {
    name: "Adam Johnson",
    title: "Realtor",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    avatarImageSrc: "/realtor.jpeg",
    size:"100"
  },
  {
    name: "Christina Brown",
    title: "Seller",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    avatarImageSrc: "/selling.jpeg",
    size:"100"
  },
  {
    name: "Velzac Lorriane",
    title: "Buyer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    avatarImageSrc: "/buyer.jpeg",
    size:"100"
  },
  {
    name: "Anna Collins",
    title: "Realtor",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    avatarImageSrc: "/realtor.jpeg",
    size:"100"
  },
];
</script>
<template lang="pug">
.content 
    .content__text-arrow
        .content__text
            .content__what
                .content__what-p Testimonials
                .content__what-title What are people saying?
                .content__text-p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          
        
        .content__arrow
            FrontPageArrowLeft
            FrontPageArrowRight
      

    .cards
        ReviewCards.card(

        v-for="item in cardItems"
        :key="item.name"
        :name="item.name"
        :title="item.title"
        :text="item.text"
        :imageSrc="item.imageSrc"
        :size="item.size"
        :avatarImageSrc="item.avatarImageSrc"
        )
</template>

<style lang="sass" scoped>
.card
  background-color: var(--tertiary)
.content
    gap: 56px
    display: flex
    margin: 0 auto
    width: 1240px
    height: 533px
    padding: 32px
    border-radius: 16px
    flex-direction: column
    background-color: #F2F4F7
    &__what
        gap: 4px
        height: 70px
        display: flex
        flex-direction: column
    &__what-title
        font-size: 32px
        text-align: left
        font-weight: 500
        line-height: 44px
        color: var(--header)
        letter-spacing: -0.02em
    &__what-p
        color: #344054
        font-size: 14px
    &__text-p
        color: #667085
        font-size: 14px
        text-align: left
        font-weight: 400
        line-height: 20px
        letter-spacing: 0em
    &__arrow
        gap: 32px
        display: flex
        width: 248px
        height: 16px
        align-self: flex-end
    &__text-arrow
        gap: 32px
        width: 1176px
        display: flex
        align-items: center
        justify-content: space-between
    &__text
        gap: 8px
        width: 564px
        height: 138px
        display: flex
        max-height: 138px


.cards
    gap: 56px
    display: flex
    width: 1176px
    height: 275px
</style>
