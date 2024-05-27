<script setup lang="ts">
import { ref } from "vue";

const minVal = ref(140000);
const maxVal = ref(6000000);

const formatNumber = (value: number) => {
  return new Intl.NumberFormat("da-DK").format(value);
};

const slideMin = (event: Event) => {
  const target = event.target as HTMLInputElement;
  minVal.value = parseInt(target.value);
};

const slideMax = (event: Event) => {
  const target = event.target as HTMLInputElement;
  maxVal.value = parseInt(target.value);
};
</script>

<template lang="pug">
.range-slider
    span.slider-track
    input.min-val(type="range" name="min_val" min="0" max="11999999" v-model="minVal" @input="slideMin")
    input.max-val(type="range" name="max_val" min="5000" max="12000000" v-model="maxVal" @input="slideMax")
    .tooltips
        .tooltip-min {{ formatNumber(minVal) }} kr.
        .tooltip-max {{ formatNumber(maxVal) }} kr.
</template>

<style scoped lang="sass">
.range-slider
    width: 100%
    height: 5px
    margin: 30px 0
    position: relative
    background-color: #8a8a8a

.slider-track
    height: 100%
    position: absolute
    background-color: var(--primary)

.tooltips
    display: flex
    justify-content: space-between
    margin-top: 0.6rem

.tooltip
    border: 0
    color: #fff
    display: block
    line-height: 1.2
    font-size: 0.75rem
    position: absolute
    text-align: center
    background: #373f50
    padding: 0.25rem .5rem
    border-radius: 0.25rem

.range-slider input
    top: 50%
    width: 100%
    appearance: none
    background: none
    position: absolute
    pointer-events: none
    transform: translateY(-50%)

input[type="range"]::-webkit-slider-thumb
    width: 16px
    height: 16px
    cursor: pointer
    appearance: none
    background: #FFF
    border-radius: 50%
    pointer-events: auto
    border: 3px solid #FFF
    box-shadow: 0 .125rem .5625rem -0.125rem rgba(0, 0, 0, .25)
</style>
