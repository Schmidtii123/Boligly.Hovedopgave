<script setup>
import { ref,defineProps } from 'vue';
const props = defineProps({
color: String, 

});
const iconColor = ref(props.color);
</script>
<template>
<div class="icon">
    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path stroke="currentColor" d="M11.5 21C17.0228 21 21.5 16.5228 21.5 11C21.5 5.47715 17.0228 1 11.5 1C5.97715 1 1.5 5.47715 1.5 11C1.5 16.5228 5.97715 21 11.5 21Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path stroke="currentColor" d="M9 7.96533C9 7.48805 9 7.24941 9.09974 7.11618C9.18666 7.00007 9.31971 6.92744 9.46438 6.9171C9.63038 6.90525 9.83112 7.03429 10.2326 7.29239L14.9532 10.3271C15.3016 10.551 15.4758 10.663 15.5359 10.8054C15.5885 10.9298 15.5885 11.0702 15.5359 11.1946C15.4758 11.337 15.3016 11.449 14.9532 11.6729L10.2326 14.7076C9.83112 14.9657 9.63038 15.0948 9.46438 15.0829C9.31971 15.0726 9.18666 14.9999 9.09974 14.8838C9 14.7506 9 14.512 9 14.0347V7.96533Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>


</div>
</template>


<style lang="sass" scoped>

.icon
    width: 20px
    height: 20px
    padding: 0px, 8px
    align-items: center
    display: flex
    justify-content: center
</style>




