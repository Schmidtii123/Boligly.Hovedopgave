        <script setup lang="ts">
        import ButtonComponent from './ButtonComponent.vue';
        import LeftIcon from './icons/LeftIcon.vue';
        import RightIcon from './icons/RightIcon.vue';
        import IconArrowDown from './icons/IconArrowDown.vue';
        import IconCreate from './icons/IconCreate.vue';
        </script>
<template lang="pug">

div.button
            ButtonComponent(:primary="true")
                LeftIcon
                | Button
                IconArrowDown

            ButtonComponent  
                |Hej
            
            ButtonComponent(:primary="false")
                |Create a new user


</template>


<style scoped lang="sass">

.button
    width: 207px
    gap: 8px
    display: flex
    flex-direction: column
    margin: 0 auto
    align-items: center
</style>