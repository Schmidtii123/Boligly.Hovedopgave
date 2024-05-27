<script setup lang="ts">
import FeaturesCarousel from './FeaturesCarousel.vue';
import CarouselCards from './CarouselCards.vue';
import CarouselHowItWorks from './CarouselHowItWorks.vue';
import SignUpBuyer from './SignUpBuyer.vue';
import { ref, onMounted, } from 'vue';
const currentStatus = ref(1);

const switchStatus = () => {
    setInterval(() => {
        currentStatus.value = currentStatus.value === 3 ? 1 : currentStatus.value + 1;
    }, 4000);
};
onMounted(() => {
    switchStatus();
});
</script>

<template lang="pug">
.carousel
    .carousel__content
        SignUpBuyer
    .carousel__components
        transition(name="fade" mode="out-in")
            CarouselHowItWorks(:key="currentStatus" :isHidden="currentStatus !== 1")
        transition(name="fade" mode="out-in")
            FeaturesCarousel(:key="currentStatus" :isHidden="currentStatus !== 2")
        transition(name="fade" mode="out-in")
            CarouselCards(:key="currentStatus" :isHidden="currentStatus !== 3")
</template>

<style lang="sass" scoped>
.carousel
    display: flex
    margin: 0 auto
    flex-direction: row
    align-items: flex-start
    justify-content: center

    &__content
        width: 738px
        height: 1000px

    &__components
        width: 705px
        height: 1000px

.fade-enter-active, .fade-leave-active
    transition: opacity 0.8s

.fade-enter, .fade-leave-to
    opacity: 0

</style>
