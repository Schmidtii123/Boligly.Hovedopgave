<script setup>
import ButtonComponent from './ButtonComponent.vue';

        
        
</script>
<template lang="pug">
.content
    .section
        .search
            .header Indtast adresse og søg!
            input( class="input" type="search" placeholder="adresse")
            ButtonComponent Find
</template>


<style lang="sass" scoped>
.section
    width: 458px
    height: 268px
    margin-top: auto
    padding: 32px 32px 0px 0px
    border-radius: 0px 32px 0px 32px
    background-color: var(--white-50)

.content
    width: 1240px
    margin: auto
    height: 450px
    display: flex
    border-radius: 32px
    flex-direction: column
    background-size: cover
    background-position: center
    background-image: url('/villa2.0.jpeg')

.header
    font-size: 24px
    font-weight: 700
    color: #1D2939

.search
    gap: 24px
    width: 426px
    height: 236px
    padding: 32px
    display: flex
    background: var(--background)
    border-radius: 16px
    flex-direction: column

.input
    gap: 8px
    width: 362px
    height: 44px
    border: none
    border-radius: 8px
    padding: 12px 16px 12px 16px
    
</style>