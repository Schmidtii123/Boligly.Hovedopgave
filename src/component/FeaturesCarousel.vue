<script setup lang="ts">
import FeaturesComponent from "./FeaturesComponent.vue";
interface Props{
    isHidden: boolean
}
defineProps<Props>()
</script>
<template lang="pug">
.feature-component(:class="{'is-hidden':isHidden }")
    .feature-component__box
        .feature-component__header 
            .feature-component__pre-title Det er vores produkt!
            .feature-component__title Vores 4 grund egenskaber
            .feature-component__text Se vores 4 nøgle funktioner på boligly.dk. Vi har gjort det nemmere for boligkøbere og boligsælgere at finde hinanden.
        .feature-component-steps
            FeaturesComponent(
                :number="'01'"
                :title="'Køberkartotek'"
                :text="'Opret dig i det største landsdækkende køberkartotek som findes i Danmark. '"
                )
            FeaturesComponent(
                :number="'02'"
                :title="'Sælg din bolig'"
                :text="'Søg efter købere blandt alle  køberkartoteker på tværs af hele landet. '"
                )
            FeaturesComponent(
                :number="'03'"
                :title="'100% anonymitet'"
                :text="'Gem din adresse på boligly.dk og få besked når der registrer sig en potentiel køber. '"
                )
            FeaturesComponent(
                :number="'04'"
                :title="'Ejendomsmægler login'"
                :text="'Som ejendomsmægler kan du uploade dit køberkartotek og gemme skuffesalgsadresser'"
                )
    .white-space-bottom
        .steps
            .steps__2
            .steps__1 
            .steps__3

    .white-space-top
          
</template>
<style lang="sass" scoped>
.feature-component-steps
    gap: 24px
    width: 481px
    height: 498px
    display: flex
    flex-wrap: wrap
    
.steps
    gap: 8px
    display: flex
    align-items: center

    &__3
        width: 32px
        height: 4px
        border-radius: 4px
        background-color: var(--background)
    &__2
        width: 32px
        height: 4px
        border-radius: 4px
        background-color: var(--background)
    &__1
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

.feature-component
    width: 641px
    height: 940px
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

.is-hidden
    display: none
</style>
