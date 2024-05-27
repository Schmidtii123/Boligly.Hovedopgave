<script setup lang="ts">
import SideBarRealtor from "./SideBarRealtor.vue";
import DashboardComponent from "./DashboardComponent.vue";
import BuyerCardComponent from "./BuyerCardComponent.vue";
import MessageCardComponent from "./MessageCardComponent.vue";
import InvoiceComponent from "./InvoiceComponent.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goToLeads = () => {
    router.push('/leads')
}
const goToBuyerList = () => {
    router.push('/buyer-list')
}
const goToChat = () => {
    router.push('/chat')
}
</script>

<template lang="pug">
.homepage
    SideBarRealtor 
    .homepage__dashboard
        .homepage__title Dashboard
        .homepage__options
            .homepage__latest-leads 
                .homepage__mini-header 
                    .homepage__mini-title Latest leads
                    .homepage__mini-link(@click="goToLeads") See all
                .homepage__leads 
                    DashboardComponent(:avatarImageSrc="'/buyer.jpeg'"
                                        :person="'John Doe'"
                                        :address="'1234 Main St'") 
                    DashboardComponent(:avatarImageSrc="'/realtor.jpeg'"
                                        :person="'John Doe'"
                                        :address="'1234 Main St'") 
                    DashboardComponent(:avatarImageSrc="'/selling.jpeg'"
                                        :person="'John Doe'"
                                        :address="'1234 Main St'") 
        
            .homepage__new-buyers 
                .homepage__mini-header 
                    .homepage__mini-title New buyers
                    .homepage__mini-link(@click="goToBuyerList") See all
                .homepage__leads 
                    BuyerCardComponent(:avatarImageSrc="'/selling.jpeg'"
                            :person="'John Doe'"
                            :status="'looking'"
                            :tagText="'Kigger'")
                    BuyerCardComponent(:avatarImageSrc="'/selling.jpeg'"
                            :person="'John Doe'"
                            :status="'ready'"
                            :tagText="'Købeklar'")
                    BuyerCardComponent(:avatarImageSrc="'/selling.jpeg'"
                            :person="'John Doe'"
                            :status="'interested'"
                            :tagText="'Interesseret i info'")
            .homepage__latest-messages 
                .homepage__mini-header 
                    .homepage__mini-title Latest messages
                    .homepage__mini-link(@click="goToChat") See all
                .homepage__leads
                    MessageCardComponent(:avatarImageSrc="'/realtor.jpeg'"
                            :person="'John Doe'"
                            :text="'Good.'"
                            :Date="'26/3-2024'")
                    MessageCardComponent(:avatarImageSrc="'/realtor.jpeg'"
                            :person="'John Doe'"
                            :text="'Sounds fine by me'"
                            :Date="'14/2-2024'")
                    MessageCardComponent(:avatarImageSrc="'/realtor.jpeg'"
                            :person="'John Doe'"
                            :text="'Hi, John Doe'"
                            :Date="'24/1-2024'")
        InvoiceComponent
</template>

<style scoped lang="sass">
.homepage
    display: flex
    flex-direction: row

    &__dashboard
        gap: 32px
        display: flex
        max-width: 100vw
        padding: 56px 32px
        flex-direction: column

    &__title
        font-size: 32px
        font-weight: 700
        color: var(--header)

    &__options
        gap: 24px
        display: flex
        flex-direction: row

    &__mini-header
        display: flex
        flex-direction: row
        align-items: center
        justify-content: space-between

    &__mini-title
        font-size: 24px
        font-weight: 700
        color: var(--header)

    &__mini-link
        cursor: pointer
        color: var(--primary)
        text-decoration: underline

    &__latest-leads
        gap: 24px
        width: 340px
        display: flex
        flex-direction: column
    
    &__leads
        gap: 8px
        display: flex
        flex-direction: column

    &__new-buyers
        gap: 24px
        width: 340px
        display: flex
        flex-direction: column

    &__latest-messages
        gap: 24px
        width: 340px
        display: flex
        flex-direction: column

</style>./Buyers.vue./BuyerCardComponent.vue