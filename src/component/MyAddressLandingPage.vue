<script setup lang="ts">
import SideBarRealtor from "./SideBarRealtor.vue";
import AvatarComponent from "./AvatarComponent.vue";
import ButtonComponent from "./ButtonComponent.vue";
import SettingsIcon from "./icons/SettingsIcon.vue";
import FilterIcon from "./icons/FilterIcon.vue";
import IconCreate from "./icons/IconCreate.vue";
import IconDots from "./icons/IconDots.vue";
import IconArrowLeft from "./icons/IconArrowLeft.vue";
import IconArrowRight from "./icons/IconArrowRight.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const navigateToNewUser = () => {
  router.push("/my-address/new-address");
};
const navigateToAddressSettings = () => {
  router.push("/my-address/settings");
};
</script>

<template lang="pug">

.my-address__dashboard
    .my-address__title My addresses
    .my-address__input-search
        input.input(type="text", value="", placeholder="Search and property")
        .icon
            a(href="#")
                SettingsIcon  
        .icon 
            a(href="#") 
                FilterIcon

    .my-address__list 

        .my-address__list-header
            .my-address__title List
            ButtonComponent(@click="navigateToNewUser") 
                IconCreate   
                slot Add address

        .my-address__list-content-header
            .input-name-list
                input.input-check(type="checkbox")
                p Name

            .list-content
                p Address 
                p Price
                p Lead

        .my-address__list-content        
                     
            .my-address__content-status(@click="navigateToAddressSettings")

                .input-name
                    input.input-check(type="checkbox")
                    .my-address__avatar-name 
                        AvatarComponent(:imageSrc="'/villa.jpeg'" :size="40")
                        .name Strandvejen 12
                        
                .list-content-items

                    .address-price
                        .my-address__mini-title-street 123 Main Street, Copenhagen, Denmark
                        .my-address__mini-title 10.000$

                    .my-address__lead
                        AvatarComponent(:imageSrc="'/buyer.jpeg'" :size="40")
                        .my-address__mini-title EDC
                        
                IconDots     

            .my-address__content-status

                .input-name
                    input.input-check(type="checkbox")
                    .my-address__avatar-name 
                        AvatarComponent(:imageSrc="'/villa.jpeg'" :size="40")
                        .name Strandvejen 12
                        
                .list-content-items

                    .address-price
                        .my-address__mini-title-street 123 Main Street, Copenhagen, Denmark
                        .my-address__mini-title 10.000$

                    .my-address__lead
                        AvatarComponent(:imageSrc="'/buyer.jpeg'" :size="40")
                        .my-address__mini-title EDC

                IconDots     

            .my-address__content-status

                .input-name
                    input.input-check(type="checkbox")
                    .my-address__avatar-name 
                        AvatarComponent(:imageSrc="'/villa.jpeg'" :size="40")
                        .name Strandvejen 12
                        
                .list-content-items

                    .address-price
                        .my-address__mini-title-street 123 Main Street, Copenhagen, Denmark
                        .my-address__mini-title 10.000$

                    .my-address__lead
                        AvatarComponent(:imageSrc="'/buyer.jpeg'" :size="40")
                        .my-address__mini-title EDC

                IconDots       

            .my-address__content-status

                .input-name
                    input.input-check(type="checkbox")
                    .my-address__avatar-name 
                        AvatarComponent(:imageSrc="'/villa.jpeg'" :size="40")
                        .name Strandvejen 12
                        
                .list-content-items

                    .address-price
                        .my-address__mini-title-street 123 Main Street, Copenhagen, Denmark
                        .my-address__mini-title 10.000$

                    .my-address__lead
                        AvatarComponent(:imageSrc="'/buyer.jpeg'" :size="40")
                        .my-address__mini-title EDC

                IconDots      

            .my-address__content-status

                .input-name
                    input.input-check(type="checkbox")
                    .my-address__avatar-name 
                        AvatarComponent(:imageSrc="'/villa.jpeg'" :size="40")
                        .name Strandvejen 12
                        
                .list-content-items

                    .address-price
                        .my-address__mini-title-street 123 Main Street, Copenhagen, Denmark
                        .my-address__mini-title 10.000$

                    .my-address__lead
                        AvatarComponent(:imageSrc="'/buyer.jpeg'" :size="40")
                        .my-address__mini-title EDC

                IconDots       
                   
            .my-address__content-status

                .input-name
                    input.input-check(type="checkbox")
                    .my-address__avatar-name 
                        AvatarComponent(:imageSrc="'/villa.jpeg'" :size="40")
                        .name Strandvejen 12
                        
                .list-content-items

                    .address-price
                        .my-address__mini-title-street 123 Main Street, Copenhagen, Denmark
                        .my-address__mini-title 10.000$

                    .my-address__lead
                        AvatarComponent(:imageSrc="'/buyer.jpeg'" :size="40")
                        .my-address__mini-title EDC

                IconDots     

            .my-address__content-status

                .input-name
                    input.input-check(type="checkbox")
                    .my-address__avatar-name 
                        AvatarComponent(:imageSrc="'/villa.jpeg'" :size="40")
                        .name Strandvejen 12
                        
                .list-content-items

                    .address-price
                        .my-address__mini-title-street 123 Main Street, Copenhagen, Denmark
                        .my-address__mini-title 10.000$

                    .my-address__lead
                        AvatarComponent(:imageSrc="'/buyer.jpeg'" :size="40")
                        .my-address__mini-title EDC

                IconDots  

            .my-address__content-status

                .input-name
                    input.input-check(type="checkbox")
                    .my-address__avatar-name 
                        AvatarComponent(:imageSrc="'/villa.jpeg'" :size="40")
                        .name Strandvejen 12
                        
                .list-content-items

                    .address-price
                        .my-address__mini-title-street 123 Main Street, Copenhagen, Denmark
                        .my-address__mini-title 10.000$

                    .my-address__lead
                        AvatarComponent(:imageSrc="'/buyer.jpeg'" :size="40")
                        .my-address__mini-title EDC

                IconDots          

                           

            
        .my-address__change 
            ButtonComponent(:secondary="true") 
                IconArrowLeft 
                slot Previous
            ButtonComponent(:secondary="true") 
                slot Next
                IconArrowRight
</template>

<style scoped lang="sass">
.my-address
    gap: 32px
    display: flex
    flex-direction: row

    &__dashboard
        gap: 32px
        width: 100%
        display: flex
        padding: 56px 32px
        flex-direction: column

    &__change
        display: flex
        padding: 16px 24px
        justify-content: space-between

    &__title
        font-size: 32px
        font-weight: 700
        color: var(--header)

    &__input-search
        gap: 16px
        display: flex
        align-items: center

    &__list
        border: 1px solid #eaecf0
        border-radius: 8px

    &__list-header
        display: flex
        justify-content: space-between
        padding: 20px 24px

    &__list-content-header
        display: flex
        color: #98A2B3
        gap: 5rem
        font-size: 12px
        padding: 16px 24px
        background-color: #f9fafb
        justify-content: space-between
        border-bottom: 1px solid #eaecf0

    &__list-content
        display: flex
        flex-direction: column

    &__content-status
        width: 100%
        display: flex
        cursor: pointer
        padding: 16px 24px
        align-items: center
        flex-direction: row
        justify-content: space-between
        border-bottom: 1px solid #eaecf0

    &__mini-title
        font-size: 14px
        font-weight: 500
        color: #667085

    &__mini-title-street
        font-size: 14px
        font-weight: 500
        color: #667085
        max-width: 14rem

    &__avatar-name
        gap: 8px
        display: flex
        align-items: center

    &__lead
        gap: 8px
        display: flex
        align-items: center

.input-name-list
    gap: 8px
    display: flex
    align-items: center

.list-content
    width: 100%
    display: flex
    align-items: center
    justify-content: space-around

.input-name
    gap: 12px
    display: flex
    min-width: 12rem

.title-icon
    gap: 8px
    display: flex
    align-items: center

.input
    width: 100%
    border-radius: 8px
    padding: 12px 18px
    border: 1px solid #eaf0ff
    background-color: #F7F9FF

.input-check
    border-radius: 6px
    border: 1px solid #D0D5DD

.icon
    color: #213976
    padding: 12px 18px
    border-radius: 8px
    text-decoration: none
    background-color: #F7F9FF

.name
    font-size: 14px
    font-weight: 500
    color: #111E3D

.address-price
    gap: 1rem
    display: flex

.list-content-items
    gap: 6rem
    width: 100%
    display: flex
    align-items: center
    justify-content: space-around
</style>
