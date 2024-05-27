<script setup lang="ts">
import ReviewCards from "./ReviewCards.vue";
interface Props{
    isHidden: boolean
}
defineProps<Props>()
const contentItem = [
  {
    name: "Adam Johnson",
    title: "Realtor",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    avatarImageSrc: "/realtor.jpeg",
  },
  {
    name: "Christina Brown",
    title: "Seller",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    avatarImageSrc: "/selling.jpeg",
  },
  {
    name: "Velzac Lorriane",
    title: "Buyer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    avatarImageSrc: "/buyer.jpeg",
  },
  {
    name: "Anna Collins",
    title: "Realtor",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    avatarImageSrc: "/realtor.jpeg",
  },
];
</script>
<template lang="pug">
.carousel-cards(:class="{'is-hidden':isHidden}")
    .carousel-cards__box
        .carousel-cards__header
            .carousel-cards__pre-title Testimonials
            .carousel-cards__title What are people saying?
            .carousel-cards__text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        .cards
            ReviewCards( class="card-review"
            v-for="item in contentItem"
            :key="item.name"
            :name="item.name"
            :title="item.title"
            :text="item.text"
            :avatarImageSrc="item.avatarImageSrc"
            :size="80"
           )
    .white-space-bottom
        .steps
            .steps__1
            .steps__2 
            .steps__3

    .white-space-top
          
</template>
<style lang="sass" scoped>
.steps
    gap: 8px
    align-items: center
    display: flex
    
    &__1
        width: 32px
        height: 4px
        border-radius: 4px
        background-color: var(--background)
    &__2
        width: 32px
        height: 4px
        border-radius: 4px
        background-color: var(--background)
    &__3
        width: 56px
        height: 4px
        border-radius: 4px
        background-color: var(--primary)

.white-space-bottom
    left: 0
    bottom: 0 
    width: 251px
    height: 77px
    display: flex
    position: absolute
    justify-content: center
    border-radius: 0px 32px 0px 32px
    background-color: var(--tertiary)

.white-space-top
    top: 0
    right: 0
    width: 251px
    height: 77px
    position: absolute
    border-radius: 0px 32px 0px 32px
    background-color: var(--tertiary)
    
.carousel-cards
    width: 641px
    height: 936px
    display: flex
    margin: 0 auto
    position: relative
    border-radius: 32px
    align-items: center
    flex-direction: column
    justify-content: center
    background-color: #F9FAFB
    padding: 50px 80px 50px 80px
    
    &__box
        gap: 32px
        width: 481px
        height: 672px
        display: flex
        border-radius: 32px
        flex-direction: column

    &__header
        gap: 4px
        display: flex
        flex-direction: column

    &__title
        font-size: 32px
        text-align: left
        font-weight: 500
        line-height: 44px
        color: var(--header)
        letter-spacing: -0.02em

    &__pre-title
        font-size: 14px
        color: var(--gray-text)

    &__content
        gap: 8px
        width: 564px
        display: flex
        max-width: 481px
        flex-direction: column

    &__text
        font-size: 12px
        font-weight: 400
        text-align: left
        line-height: 20px
        font-family: Ubuntu
        letter-spacing: 0em
        color: var(--gray-500)

.cards
  gap:24px
  display: flex
  flex-wrap: wrap
  flex-direction: row

.card-review
    gap: 16px
    width: 218px
    height: 247px
    display: flex
    flex-wrap: wrap
    flex-direction: row
    background-color: var(--white-50)
.is-hidden
    display: none
</style>
