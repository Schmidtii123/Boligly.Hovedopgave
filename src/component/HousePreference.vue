<script setup lang="ts">
import { ref } from "vue";

const energyLabel = ref("C");
const energyLabelValues = {
  A20: 1,
  A15: 2,
  A10: 3,
  B: 4,
  C: 5,
  D: 6,
  E: 7,
  F: 8,
  G: 9,
};
const energyLabelSliderMax = Object.keys(energyLabelValues).length;
const squareMeters = ref(250);
const floorArea = ref(5000);
const construction = ref(1960);
const roomNumber = ref(5);
const bathroomNumber = ref(3);

function updateSquareMetersPosition(event) {
  updateDisplayPosition(event, squareMeters, squareMetersThumbPosition);
}

function updateFloorAreaPosition(event) {
  updateDisplayPosition(event, floorArea, floorAreaThumbPosition);
}

function updateConstructionPosition(event) {
  updateDisplayPosition(event, construction, constructionThumbPosition);
}

function updateEnergyLabelPosition(event) {
  const sliderValue = event.target.value;
  const energyLabels = Object.keys(energyLabelValues);
  const selectedEnergyLabel = energyLabels[sliderValue - 1];
  energyLabel.value = selectedEnergyLabel;
}

function updateRoomNumberPosition(event) {
  updateDisplayPosition(event, roomNumber, roomNumberThumbPosition);
}

function updateBathroomNumberPosition(event) {
  updateDisplayPosition(event, bathroomNumber, bathroomNumberThumbPosition);
}

function updateDisplayPosition(event, valueRef, thumbPositionRef) {
  const sliderWidth = event.target.clientWidth;
  const thumbWidth = 16; 
  const offset = (event.target.value / 500) * (sliderWidth - thumbWidth);
  thumbPositionRef.value = offset - thumbWidth / 5;
}
</script>

<template lang="pug">
.desirable-area
    .set-up
        .mini-title Antal kvm
        input.slider(type="range" min="1" max="500" v-model="squareMeters" @input="updateSquareMetersPosition")
        .slider-value(:style="{ left: squareMetersThumbPosition + 'px' }") {{ squareMeters }}
    .set-up
        .mini-title Grundareal
        input.slider(type="range" min="1" max="10000" v-model="floorArea" @input="updateFloorAreaPosition")
        .slider-value(:style="{ left: floorAreaThumbPosition + 'px' }") {{ floorArea }}
    .set-up
        .mini-title Byggeår
        input.slider(type="range" min="1800" max="2024" v-model="construction" @input="updateConstructionPosition")
        .slider-value(:style="{ left: constructionThumbPosition + 'px' }") {{ construction }}
    .set-up
        .mini-title Energimærke
        input.energy-label-slider(type="range" min="1" :max="energyLabelSliderMax" v-model="energyLabelValues[energyLabel]" @input="updateEnergyLabelPosition")
        .slider-value(:style="{ left: energyLabelThumbPosition + 'px' }") {{ energyLabel }}
    .set-up
        .mini-title Antal værelser
        input.slider(type="range" min="1" max="10" v-model="roomNumber" @input="updateRoomNumberPosition")
        .slider-value(:style="{ left: roomNumberThumbPosition + 'px' }") {{ roomNumber }}
    .set-up
        .mini-title Antal badeværelser 
        input.slider(type="range" min="1" max="5" v-model="bathroomNumber" @input="updateBathroomNumberPosition")
        .slider-value(:style="{ left: bathroomNumberThumbPosition + 'px' }") {{ bathroomNumber }}
</template>

<style scoped lang="sass">
.desirable-area
    gap: 24px
    display: flex
    flex-wrap: wrap
    max-width: 100%

.set-up
    position: relative
    width: 45%
    max-width: 100%
    box-sizing: border-box

.mini-title
    font-size: 12px
    font-weight: 400
    color: var(--gray-600)
    max-width: 100%
    box-sizing: border-box

.slider
    width: 100%
    height: 6px
    -webkit-appearance: none
    background: #EAECF0
    border-radius: 8px
    outline: none
    opacity: 0.7
    transition: opacity 0.2s
    max-width: 100%
    box-sizing: border-box

.slider:hover
    opacity: 1

.slider::-webkit-slider-thumb
    -webkit-appearance: none
    appearance: none
    width: 16px
    height: 16px
    border-radius: 50%
    background: var(--tertiary)
    cursor: pointer
    box-shadow: 0px 2px 8px 0px #A1A1A140

.slider-value
    position: absolute
    margin-top: 0.2rem
    font-size: 12px
    color: black
    max-width: 100%
    box-sizing: border-box

.energy-label-slider::-webkit-slider-thumb
    -webkit-appearance: none
    appearance: none
    width: 16px
    height: 16px
    border-radius: 50%
    background: var(--tertiary)
    cursor: pointer
    box-shadow: 0px 2px 8px 0px #A1A1A140
    
.energy-label-slider
    width: 100%
    height: 6px
    -webkit-appearance: none
    background: linear-gradient(270deg, #D92D20 -0.1%, #FECB1C 50.95%, #12B76A 99.9%)
    border-radius: 8px
    outline: none
    opacity: 0.7
    transition: opacity 0.2s
    max-width: 100%
    box-sizing: border-box

.energy-label-slider:hover
    opacity: 1

.energy-label-values
    width: 100%
    display: flex
    font-size: 12px
    justify-content: space-between  
    max-width: 100%
    box-sizing: border-box

.energy-label-marker 
    color: #98A2B3 

.energy-label-marker.selected 
    color: var(--header)
</style>