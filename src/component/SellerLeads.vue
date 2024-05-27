<script setup lang="ts">
import SideBarSelling from './SideBarSelling.vue';
import SettingsIcon from './icons/SettingsIcon.vue';
import FilterIcon from './icons/FilterIcon.vue';
import CardLeadsSeller from './CardLeadsSeller.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToChat = () => {
    router.push('/seller/chat');
}

</script>

<template lang="pug">

.container
    SideBarSelling
    .content 
        .header
            .header-title Buyer leads
        .input-search
            input.input(type="text", value="", placeholder="Søg efter salgsrådgiver")
            .icon
                a(href="#")
                    SettingsIcon  
            .icon
                a(href="#") 
                    FilterIcon
        .cards
            CardLeadsSeller(:avatarImageSrc="'/buyer.jpeg'" :name="'Karl Jespersen'" :size="80" :tertiary="true" :address="'Vi er et ejendomsselvskab der har hjulpet over 40.000 kunder med at finde eller sælge deres drømme bolig, hvis du mangler rådgivning, så skriv endelig '" :buttonText="'Kontakt'" :showIcon="true" @click="goToChat" )
                    
            CardLeadsSeller(:avatarImageSrc="'/selling.jpeg'" :name="'EDC'" :size="80" :tertiary="true" :address="'Vi er et ejendomsselvskab der har hjulpet over 40.000 kunder med at finde eller sælge deres drømme bolig, hvis du mangler rådgivning, så skriv endelig '" :buttonText="'Kontakt'" :showIcon="true" @click="goToChat" )

            CardLeadsSeller(:avatarImageSrc="'/realtor.jpeg'" :name="'Danbolig Silkeborg'" :size="80" :tertiary="true" :address="' Vi er et ejendomsselvskab der har hjulpet over 40.000 kunder med at finde eller sælge deres drømme bolig, hvis du mangler rådgivning, så skriv endelig'" :buttonText="'Kontakt'" :showIcon="true" @click="goToChat" )

</template>

<style scoped lang="sass">
.container
    display: flex
    width: 100%

.cards
    gap: 14px
    width: 100%
    display: flex
    flex-wrap: wrap
    flex-direction: row

.content
    gap: 32px
    width: 100%
    display: flex
    flex-direction: column
    padding: 56px 32px

.header-title
    font-size: 32px
    font-weight: 700
    color: var(--header)

.input
    width: 100%
    padding: 12px 18px
    border-radius: 8px
    border: 1px solid #EAF0FF

.input-search
    gap: 16px
    display: flex
    align-items: center

.icon
    width: 48px
    height: 48px
    display: flex
    border-radius: 8px
    align-items: center
    justify-content: center
    background-color: #F7F9FF

</style>