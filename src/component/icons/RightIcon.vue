<script setup lang="ts">
import { ref,defineProps } from 'vue';
const props = defineProps({
color: String, 

});
const iconColor = ref(props.color);
</script>

<template>
  <div class="icon">
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 13L7 7L1 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  </div>
</template>


<style scoped lang="sass">
.icon
    width: 24px
    height: 24px
    align-items: center
    display: flex
    justify-content: center
    
</style>