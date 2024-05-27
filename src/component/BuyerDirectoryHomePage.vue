<script setup lang="ts">
import SideBarRealtor from "./SideBarRealtor.vue";
import AvatarComponent from "./AvatarComponent.vue";
import ButtonComponent from "./ButtonComponent.vue";
import SettingsIcon from "./icons/SettingsIcon.vue";
import FilterIcon from "./icons/FilterIcon.vue";
import IconCreate from "./icons/IconCreate.vue";
import IconArrowDown from "./icons/IconArrowDown.vue";
import SearchStatus from "./SearchStatus.vue";
import IconDots from "./icons/IconDots.vue";
import IconArrowLeft from "./icons/IconArrowLeft.vue";
import IconArrowRight from "./icons/IconArrowRight.vue";
import IconEye from "./icons/IconEye.vue";
import IconRediger from "./icons/IconRediger.vue";
import IconCopy from "./icons/IconCopy.vue";
import IconDelete from "./icons/IconDelete.vue";
import { useRouter } from "vue-router";
import { ref } from 'vue';
const router = useRouter();

const navigateToNewUser = () => {
  router.push('/new-user');
};
// Reactive variable to track which menu is open
const openMenuIndex = ref<number | null>(null);

const toggleMenu = (index: number) => {
  openMenuIndex.value = openMenuIndex.value === index ? null : index;
};

const closeMenu = () => {
  openMenuIndex.value = null;
};

// Function to handle menu item clicks
const handleMenuItemClick = (action: string, index: number) => {
  console.log(`Action: ${action} on item index: ${index}`);
  closeMenu();
};

document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;
  if (!target.closest('.menu') && !target.closest('.icon-dots')) {
    closeMenu();
  }
});

const buyers = [
  { name: "John Doe", email: "Olivia@mail.com", phone: "10203040", price: "10.000$", status: "ready", tagText:"Købeklar", preference: "Fortrækker opkald" },
  { name: "Julie Sørensen", email: "jane@mail.com", phone: "11223344", price: "20.000$", status: "interested", tagText:"Interesseret i info", preference: "Fortrækker SMS" },
  { name: "Brendan Johnson", email: "jack@mail.com", phone: "55667788", price: "15.000$", status: "looking", tagText:"Kigger", preference: "Fortrækker Email" },
  { name: "Emilie Jensen", email: "emily@mail.com", phone: "99887766", price: "25.000$", status: "passiv", tagText:"Passiv", preference: "Fortrækker opkald" },
  { name: "Emil Schmidt", email: "Schmidtii2000@mail.com", phone: "33445566", price: "30.000$", status: "ready", tagText:"Købeklar", preference: "Fortrækker SMS" },
  { name: "Emma Watson", email: "emma@mail.com", phone: "22334455", price: "40.000$", status: "interested", tagText:"Interesseret i info", preference: "Fortrækker opkald" },
  { name: "Lucas Hansen", email: "lucas@mail.com", phone: "77889900", price: "35.000$", status: "looking", tagText:"Kigger", preference: "Fortrækker Email" },
  { name: "Sophie Pedersen", email: "sophia@mail.com", phone: "66778899", price: "45.000$", status: "passiv", tagText:"Passiv", preference: "Fortrækker opkald" },
];

</script>

<template lang="pug">
.buyer 
    SideBarRealtor 
    .buyer__dashboard
        .buyer__title My buyer directory
        .buyer__input-search
            input.input(type="text", value="", placeholder="Search the buyer database")
            .icon
                a(href="#")
                    SettingsIcon  
            .icon 
                a(href="#") 
                    FilterIcon
        .buyer__list 
            .buyer__list-header
                .buyer__title List
                ButtonComponent(@click="navigateToNewUser") 
                    IconCreate   
                    slot Create a new user
            .buyer__list-content-header
                .input-name
                    input.input-check(type="checkbox")
                    p Name
                p Email 
                p Phone number
                p Price
                .title-icon
                    p Search status 
                    IconArrowDown
                .buyer__mini-title Message notifications
            .buyer__list-content
                .buyer__content-status(v-for="(buyer, index) in buyers" :key="index")
                    .content-item
                        .input-name
                            input.input-check(type="checkbox")
                            .buyer__avatar-name 
                                AvatarComponent(:imageSrc="'/selling.jpeg'" :size="40")
                                .name {{ buyer.name }}
                    .content-item {{ buyer.email }}
                    .content-item {{ buyer.phone }}
                    .content-item {{ buyer.price }}
                    .content-item
                        SearchStatus(:tagText="buyer.tagText", :searchStatus="buyer.status")
                    .content-item {{ buyer.preference }}
                    .content-item
                        .menu-container
                            .icon-dots(@click="toggleMenu(index)")
                                IconDots
                            .menu(v-if="openMenuIndex === index")
                                ul
                                    li(@click="handleMenuItemClick('details', index)")
                                        IconEye
                                        | Se detaljer
                                    li(@click="handleMenuItemClick('edit', index)")
                                        IconRediger
                                        | Rediger profil
                                    li(@click="handleMenuItemClick('copy', index)")
                                        IconCopy
                                        | Kopier
                                    li(@click="handleMenuItemClick('delete', index)")
                                        IconDelete
                                        | Slet profil

            .buyer__change 
                ButtonComponent(:secondary="true") 
                    IconArrowLeft 
                    slot Previous
                ButtonComponent(:secondary="true") 
                    slot Next
                    IconArrowRight
</template>
    

<style scoped lang="sass">
.buyer
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
        justify-content: space-around
        padding: 16px 24px
        border-bottom: 1px solid #eaecf0
        background-color: #f9fafb
        font-size: 12px
        color: #98a2b3
        .header-item
            flex: 1
            text-align: center
    &__list-content
        display: flex
        flex-direction: column
    &__content-status
        display: flex
        justify-content: space-between
        padding: 16px 24px
        align-items: center
        border-bottom: 1px solid #eaecf0
        .content-item
            flex: 1
            font-size: 14px
            text-align: center
            color: #667085

    &__mini-title
        font-size: 14px
        font-weight: 500
        color: #667085
    &__avatar-name
        gap: 8px
        display: flex
        align-items: center
.input-name
    display: flex
    gap: 12px
.title-icon
    display: flex
    align-items: center
    gap: 8px
.input
    width: 100%
    border-radius: 8px
    padding: 12px 18px
    border: 1px solid #eaf0ff
    background-color: #f7f9ff
.input-check
    border-radius: 6px
    border: 1px solid #d0d5dd
.icon
    color: #213976
    padding: 12px 18px
    border-radius: 8px
    text-decoration: none
    background-color: #f7f9ff
.name
    font-size: 14px
    font-weight: 500
    color: #111e3d
.self-width
    width: 125px
.icon-dots
    cursor: pointer
.menu-container
    position: relative
.menu
    position: absolute
    top: 100%
    right: 0
    background: white
    border: 1px solid #eaecf0
    border-radius: 8px
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)
    z-index: 10
    ul
        list-style: none
        margin: 0
        padding: 8px 0
        li
            font-size: 14px
            display: flex
            align-items: center
            padding: 8px 16px
            cursor: pointer
            min-width: 155px
            &:hover
                background: #f0f0f0
                cursor: pointer
            svg
                margin-right: 8px
</style>

