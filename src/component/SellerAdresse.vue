<script setup lang="ts">
import ButtonComponent from './ButtonComponent.vue';
import IconCreate from './icons/IconCreate.vue';
import SideBarSelling from './SideBarSelling.vue';
import MyAddresses from './MyAddresses.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goToSellerAdresse = () => {
    router.push('/seller/my-adresse');
    };
const goToNewAddress = () => {
    router.push('/seller/setting');
    };
</script>

<template lang="pug">
.container 
    SideBarSelling
    .content 
        .header 
            .header-title Mine boliger
            ButtonComponent(:primary="true" @click="goToNewAddress" ) 
                IconCreate
                slot Opret ny adresse
        .adresse
            MyAddresses(
                myAddresse="Flintemarken 19", 
                aboutAddresse="this is my pretty home and i have lived here for over 20 years, but i think it's about time i move out"
                image="/villa.jpeg"
                @click="goToSellerAdresse"
                )
            MyAddresses(
                myAddresse="Dalgas avenue 6 2,15", 
                aboutAddresse="this is my pretty home and i have lived here for over 20 years, but i think it's about time i move out"
                image="/villa3.0.jpeg"
                @click="goToSellerAdresse"
            )
</template>


<style scoped lang="sass">
.container
    display: flex
    width: 100%
.content
    width: 100%
    padding: 2rem 4rem
.header
    display: flex
    justify-content: space-between
    align-items: center
    width: 100%

.adresse
    display: flex 
    gap: 1rem


.header-title
    font-size: 24px
    font-weight: 700
    color: var(--header)

</style>