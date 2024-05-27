<script setup lang="ts">
import StartSteps from './StartSteps.vue';
interface Props{
    isHidden: boolean
}
defineProps<Props>()
</script>
<template lang="pug">
.how-it-works(:class="{'is-hidden':isHidden }")
    .how-it-works__box
        .how-it-works__header 
            .how-it-works__pre-title Nem og simpel adgang - gratis!
            .how-it-works__title Sådan fungere det
            .how-it-works__text Måden vores system virker på, er ret simpelt. Du skal blot følge de tre trin som er vist her. Hvis du ønsker at registrere dig i vores køberkartotek, så klik blot på øverst på siden på køberkartotek.  
        .start-steps
            StartSteps(
                :title="'Indtast din adresse'" 
                :text="'Systemet trækker alt standart info på din bolig. Du kan efterfølgende udfylde de ekstra parametre du ønsker. Jo mere du udfylder jo mere relevante leads får du.'" 
                :whiteBackground="true"
                :number="1"
                )
            StartSteps(
                :title="'Find potentielle købere'" 
                :text="'Få præsenteret de potentielle købere som matcher til din søgning. Du kan se hvilke parametre den potentielle køber matcher på.'" 
                :whiteBackground="true"
                :number="2"
                )
            StartSteps(
                :title="'Kontakt køberne'" 
                :text="'Du har fri adgang til at kontakte den ejendomsmæglerkæde som har køberen i deres køkerkartotek, eller kontakte køberen direkte hvis det er Boligly som har leadet.'" 
                :whiteBackground="true"
                :number="3"
                )
    .white-space-bottom
        .steps
            .steps__1
            .steps__2 
            .steps__3

    .white-space-top
          
</template>
<style lang="sass" scoped>
.start-steps
    width: 481px
    height: 498px
    gap: 24px
    display: flex
    flex-direction: column
    
.steps
    gap: 8px
    align-items: center
    display: flex
    
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
    
.how-it-works
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
