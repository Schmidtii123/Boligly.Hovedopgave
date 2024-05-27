<script setup lang="ts">
import SideBarSelling from "./SideBarSelling.vue";
import CardLeadsSeller from "./CardLeadsSeller.vue";
import FilterIcon from "./icons/FilterIcon.vue";
import ButtonComponent from "./ButtonComponent.vue";
import { ref } from "vue";
import { useRouter } from 'vue-router';

const selectedOption = ref("");

const selectOption = (option: string) => {
  selectedOption.value = option;
};

</script>

<template lang="pug">

.container 
    SideBarSelling
    .content  
        .leads__search
            .header-title Dashboard
            .leads__filter
                .leads__input-container
                    input.input(type="search" placeholder="Search and property")
                    FilterIcon
                .leads__options
                    .option(:class="{ 'selected': selectedOption === 'All' }" @click="selectOption('All')")
                        .name Flintemarken 19
                        .number 164
                    .option(:class="{ 'selected': selectedOption === 'Strandvejen 12' }" @click="selectOption('Strandvejen 12')")
                        .name Real estate 2 
                        .number 12
        .leads__cards
            .header
                .header-text
                    .header-title Aktuelle leads
                    .mini-text Flintemarken 19, 7190, Billund
                ButtonComponent.button(:secondary="true") Se alle
            .cards
                CardLeadsSeller(:avatarImageSrc="'/buyer.jpeg'" :name="'EDC'" :size="80" :tertiary="true" :match="'Link'" :address="'Vi er et ejendomsselvskab der har hjulpet over 40.000 kunder med at finde eller sælge deres drømme bolig, hvis du mangler rådgivning, så skriv endelig '" :buttonText="'Kontakt'" :showIcon="true" @click="goToChat" )
                
                CardLeadsSeller(:avatarImageSrc="'/selling.jpeg'" :name="'EDC'" :size="80" :primary="true" :match="'Link'" :address="'Vi er et ejendomsselvskab der har hjulpet over 40.000 kunder med at finde eller sælge deres drømme bolig, hvis du mangler rådgivning, så skriv endelig '" :buttonText="'Køb lead'" )

                CardLeadsSeller(:avatarImageSrc="'/realtor.jpeg'" :name="'EDC'" :size="80" :tertiary="true" :match="'Link'" :address="' Vi er et ejendomsselvskab der har hjulpet over 40.000 kunder med at finde eller sælge deres drømme bolig, hvis du mangler rådgivning, så skriv endelig'" :buttonText="' Kontakt'" :showIcon="true" @click="goToChat"  )

                CardLeadsSeller(:avatarImageSrc="'/buyer.jpeg'" :name="'EDC'" :size="80" :primary="true" :match="'Link'" :address="' Vi er et ejendomsselvskab der har hjulpet over 40.000 kunder med at finde eller sælge deres drømme bolig, hvis du mangler rådgivning, så skriv endelig'" :buttonText="'Køb lead'" )

                CardLeadsSeller(:avatarImageSrc="'/selling.jpeg'" :name="'EDC'" :size="80" :tertiary="true" :match="'Link'" :address="' Vi er et ejendomsselvskab der har hjulpet over 40.000 kunder med at finde eller sælge deres drømme bolig, hvis du mangler rådgivning, så skriv endelig'" :buttonText="'Kontakt'" :showIcon="true" @click="goToChat" )

                CardLeadsSeller(:avatarImageSrc="'/realtor.jpeg'" :name="'EDC'" :size="80" :primary="true" :match="'Link'" :address="'Vi er et ejendomsselvskab der har hjulpet over 40.000 kunder med at finde eller sælge deres drømme bolig, hvis du mangler rådgivning, så skriv endelig '" :buttonText="'Køb lead'" )

                CardLeadsSeller(:avatarImageSrc="'/realtor.jpeg'" :name="'EDC'" :size="80" :primary="true" :match="'Link'" :address="'Vi er et ejendomsselvskab der har hjulpet over 40.000 kunder med at finde eller sælge deres drømme bolig, hvis du mangler rådgivning, så skriv endelig '" :buttonText="'Kontakt'" :showIcon="true" @click="goToChat")

                CardLeadsSeller(:avatarImageSrc="'/selling.jpeg'" :name="'EDC'" :size="80" :tertiary="true" :match="'Link'" :address="'Vi er et ejendomsselvskab der har hjulpet over 40.000 kunder med at finde eller sælge deres drømme bolig, hvis du mangler rådgivning, så skriv endelig '" :buttonText="'Kontakt'" :showIcon="true" @click="goToChat" )
</template>

<style scoped lang="sass">
.container
    display: flex
    gap: 32px

.content
    display: flex
.leads

    &__container
        gap: 16px
        display: flex
        flex-direction: row

    &__search
        gap: 56px
        display: flex
        min-width: 20vw
        flex-direction: column
        padding: 56px 24px

    &__cards
        gap: 32px
        display: flex
        min-width: 30vw
        padding: 56px 32px
        flex-direction: column

    &__filter
        gap: 24px
        display: flex
        flex-direction: column

    &__input-container
        gap: 8px
        display: flex
        flex-direction: row
        align-items: center

    &__options
        gap: 8px
        display: flex
        flex-direction: column

.header
    display: flex
    justify-content: space-between

.button
    width: 140px

.header-title
    font-size: 28px
    font-weight: 700
    color: var(--header)

.input
    border-radius: 8px
    border: 1px solid #EAF0FF
    padding: 12px 18px

.option
    padding: 8px
    display: flex
    border-radius: 4px
    align-items: center
    justify-content: space-between
    &:hover
        background-color: #F5F8FF
        border-radius: 8px
        cursor: pointer
        .name
            color: var(--header)
            font-weight: 500

        .number
            background-color: #ffffff
.selected 
    border: 1px solid #96AEE9
    background-color: #F5F8FF
.name
    font-weight: 700
.number
    background-color: #ffffff
    
.name
    color: #344054
    font-size: 16px

.number
    padding: 4px
    color: #667085
    font-size: 12px
    border-radius: 50%
    background-color: #F9FAFB

.cards
    gap: 22px
    display: flex
    flex-direction: row
    flex-wrap: wrap
</style>
