<script setup lang="ts">
import CardLeads from "./CardLeads.vue"
import SideBarRealtor from "./SideBarRealtor.vue"
import ButtonComponent from "./ButtonComponent.vue"
import FilterIcon from "./icons/FilterIcon.vue"
import { ref } from "vue";
import { useRouter } from 'vue-router';

const selectedOption = ref("");

const selectOption = (option: string) => {
  selectedOption.value = option;
};
const router = useRouter();

const goToChat = () => {
    router.push('/chat');
    };

</script>

<template lang="pug">
.leads 
    .leads__container
        SideBarRealtor
        .leads__search
            .header Leads
            ButtonComponent(:primary="true" :fullWidth="true") New search

            .leads__filter
                .leads__input-container
                    input.input(type="search" placeholder="Search and property")
                    FilterIcon
                .leads__options

                    .option(:class="{ 'selected': selectedOption === 'All' }" @click="selectOption('All')")
                        .name All
                        .number 164

                    .option(:class="{ 'selected': selectedOption === 'Strandvejen 12' }" @click="selectOption('Strandvejen 12')")
                        .name Strandvejen 12 
                        .number 12

                    .option(:class="{ 'selected': selectedOption === 'Borgergade 35' }" @click="selectOption('Borgergade 35')")
                        .name Borgergade 35 
                        .number 16 

                    .option(:class="{ 'selected': selectedOption === 'Ege alle 16' }" @click="selectOption('Ege alle 16')")
                        .name Ege alle 16
                        .number 14

                    .option(:class="{ 'selected': selectedOption === 'Ege alle 14' }" @click="selectOption('Ege alle 14')")
                        .name Ege alle 14
                        .number 14

                    .option(:class="{ 'selected': selectedOption === 'Ege alle 12' }" @click="selectOption('Ege alle 12')")
                        .name Ege alle 12
                        .number 14

                    .option(:class="{ 'selected': selectedOption === 'Ege alle 10' }" @click="selectOption('Ege alle 10')")
                        .name Ege alle 10
                        .number 14

        .leads__cards
            .header All leads
            .cards
                CardLeads(:avatarImageSrc="'/buyer.jpeg'" :name="'EDC'" :size="80" :tertiary="true" :match="'Maching 9/9 properties'" :address="'Strandvejen 12'" :buttonText="'Contact'" :showIcon="true" @click="goToChat" )

                CardLeads(:avatarImageSrc="'/selling.jpeg'" :name="'EDC'" :size="80" :primary="true" :match="'Maching 9/9 properties'" :address="'Strandvejen 12'" :buttonText="'Buy lead'" )

                CardLeads(:avatarImageSrc="'/realtor.jpeg'" :name="'EDC'" :size="80" :tertiary="true" :match="'Maching 9/9 properties'" :address="'Strandvejen 12'" :buttonText="'See details'"  )

                CardLeads(:avatarImageSrc="'/buyer.jpeg'" :name="'EDC'" :size="80" :primary="true" :match="'Maching 9/9 properties'" :address="'Strandvejen 12'" :buttonText="'Buy lead'" )

                CardLeads(:avatarImageSrc="'/selling.jpeg'" :name="'EDC'" :size="80" :tertiary="true" :match="'Maching 9/9 properties'" :address="'Strandvejen 12'" :buttonText="'Contact'" :showIcon="true" @click="goToChat" )

                CardLeads(:avatarImageSrc="'/realtor.jpeg'" :name="'EDC'" :size="80" :primary="true" :match="'Maching 9/9 properties'" :address="'Strandvejen 12'" :buttonText="'Buy lead'" )

                CardLeads(:avatarImageSrc="'/realtor.jpeg'" :name="'EDC'" :size="80" :primary="true" :match="'Maching 9/9 properties'" :address="'Strandvejen 12'" :buttonText="'Buy lead'" )

                CardLeads(:avatarImageSrc="'/selling.jpeg'" :name="'EDC'" :size="80" :tertiary="true" :match="'Maching 9/9 properties'" :address="'Strandvejen 12'" :buttonText="'Contact'" :showIcon="true" @click="goToChat" )

</template>


<style scoped lang="sass">
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
    gap: 24px
    display: flex
    flex-direction: row
    flex-wrap: wrap


</style>