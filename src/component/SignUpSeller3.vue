<script setup lang="ts">
import ButtonComponent from "./ButtonComponent.vue";
import LeftArrow from "./icons/LeftArrow.vue";
import CardLeads from "./CardLeads.vue";
import { useRouter } from "vue-router";


const router = useRouter();

const goBack = () => {
    router.go(-1);
};

const goToChat = () => {
    router.push('/sign-up/seller');
    };

const goToSeller = () => {
    router.push('/sign-up/seller');
    };

</script>

<template lang="pug">

.container
    .go-back
        ButtonComponent(:secondary="true" @click="goBack")
            LeftArrow 
        .back-text Gå tilbage
    .header
        .header-title Her er de potentielle købere til din ejendom
        .header-text Du kan vælge at gemme din bolig og efterfølgende rette dine krav - på den måde kan du hurtigt se nye leads når du justere på dine parametre. Du kan også gå tilbage og rette med det samme

    .mini-header Matches

    .cards
                CardLeads(:avatarImageSrc="'/buyer.jpeg'" :name="'EDC'" :size="80" :tertiary="true" :match="'Maching 9/9 properties'" :address="'Strandvejen 12'" :buttonText="'Kontakt mægler'" :showIcon="true" @click="goToChat" )

                CardLeads(:avatarImageSrc="'/selling.jpeg'" :name="'EDC'" :size="80" :primary="true" :match="'Maching 9/9 properties'" :address="'Strandvejen 12'" :buttonText="'Køb lead'" )

                CardLeads(:avatarImageSrc="'/realtor.jpeg'" :name="'EDC'" :size="80" :tertiary="true" :match="'Maching 9/9 properties'" :address="'Strandvejen 12'" :buttonText="'Kontakt mægler'" :showIcon="true" @click="goToChat" )

                CardLeads(:avatarImageSrc="'/buyer.jpeg'" :name="'EDC'" :size="80" :primary="true" :match="'Maching 9/9 properties'" :address="'Strandvejen 12'" :buttonText="'Køb lead'" )

                CardLeads(:avatarImageSrc="'/selling.jpeg'" :name="'EDC'" :size="80" :tertiary="true" :match="'Maching 9/9 properties'" :address="'Strandvejen 12'" :buttonText="'Kontakt mægler'" :showIcon="true" @click="goToChat" )

                CardLeads(:avatarImageSrc="'/realtor.jpeg'" :name="'EDC'" :size="80" :tertiary="true" :match="'Maching 9/9 properties'" :address="'Strandvejen 12'" :buttonText="'Kontakt mægler'" :showIcon="true" @click="goToChat" )

                CardLeads(:avatarImageSrc="'/realtor.jpeg'" :name="'EDC'" :size="80" :primary="true" :match="'Maching 9/9 properties'" :address="'Strandvejen 12'" :buttonText="'Køb lead'" )

                CardLeads(:avatarImageSrc="'/selling.jpeg'" :name="'EDC'" :size="80" :tertiary="true" :match="'Maching 9/9 properties'" :address="'Strandvejen 12'" :buttonText="'Kontakt mægler'" :showIcon="true" @click="goToChat" )

                CardLeads(:avatarImageSrc="'/selling.jpeg'" :name="'EDC'" :size="80" :tertiary="true" :match="'Maching 9/9 properties'" :address="'Strandvejen 12'" :buttonText="'Kontakt mægler'" :showIcon="true" @click="goToChat" )

    .buttons 
        ButtonComponent.button(:secondary="true" @click="goBack") Tilbage
        ButtonComponent.button(@click="goToSeller") Gem bolig
</template>


<style scoped lang="sass">
.cards
    gap: 24px
    width: 100%
    display: flex
    flex-wrap: wrap

.container
    gap: 80px
    display: flex
    padding: 2rem 4rem 
    flex-direction: column

.buttons
    gap: 8px
    display: flex
    justify-content: center

.button
    width: 220px

.mini-header
    font-size: 24px
    font-weight: 700
    color: #1D2939


.header
    display: flex
    flex-direction: column

.header-title
    font-size: 48px
    font-weight: 700
    color: var(--header)

.header-text
    font-size: 14px
    font-weight: 400
    color: #667085



.go-back
    gap: 8px
    display: flex 
    align-items: center

</style>