<script setup lang="ts">
import PaymentStatus from "@/component/PaymentStatus.vue";
import SearchStatus from "@/component/SearchStatus.vue";
</script>
<template lang="pug">
.status
    PaymentStatus(:paymentStatus="{ value: 'paid' }")
    SearchStatus(:paymentStatus="'ready'" :tagText="'Read'")
    
</template>

<style lang="sass" scoped>
.status
    display: flex
</style>
