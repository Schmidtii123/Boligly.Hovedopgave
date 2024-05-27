<script setup lang="ts">
import { ref } from 'vue';
import HowItWorks from "./HowItWorks.vue";
import StartSteps from "./StartSteps.vue";

const currentStep = ref(1);

const toggleSteps = () => {
  setInterval(() => {
    currentStep.value = (currentStep.value % 3) + 1; 
  }, 3500);
};

toggleSteps();
</script>

<template lang="pug">
.content
    HowItWorks
    .steps
        StartSteps(
            :title="'Indtast din adresse'"
            :text="'Systemet trækker alt standart info på din bolig. Du kan efterfølgende udfylde de ekstra parametre du ønsker. Jo mere du udfylder jo mere relevante leads får du'"
            :number="1"
            :has-background="currentStep === 1")
            
        StartSteps( 
            :title="'Find potentielle købere'" 
            :text="'Få præsenteret de potentielle købere som matcher til din søgning. Du kan se hvilke parametre du matcher på'" 
            :number="2"
            :has-background="currentStep === 2"
            )
        StartSteps( 
            :title="'Kontakt køberne'" 
            :text="'Du har fri adgang til at kontakte den ejendomsmæglerkæde som har køberen i deres køkerkartotek, eller kontakte køberen direkte hvis det er via Boligly'" 
            :number="3"
            :has-background="currentStep === 3"
            )

</template>

<style lang="sass" scoped>
.content 
    gap: 56px
    height: 532px
    display: flex
    margin: 0 auto
    max-width: 1240px
    align-items: center

.steps 
    gap: 24px
    display: flex
    flex-direction: column
    max-height: 474px
    max-width: 704px
</style>

