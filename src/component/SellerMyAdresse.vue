<script setup lang="ts">
import ButtonComponent from "./ButtonComponent.vue";
import HousePreference from "./HousePreference.vue";
import SpecialRequirements from "./SpecialRequirements.vue";
import HouseType from "./HouseType.vue";
import ProfileInfoComponent from "./ProfileInfoComponent.vue";
import LeftArrow from "./icons/LeftArrow.vue";
import SideBarRealtor from "./SideBarRealtor.vue";
import HouseInfoComponent from "./HouseInfoComponent.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const goBack = () => {
  router.go(-1);
};
const goToNewAddress = () => {
  router.push("/seller/setting");
};

const goToMyAddress = () => {
    if (confirm("Er du sikker på du vil slettet adressen?")) 
    router.push("/seller/adresse");
    };

</script>

<template lang="pug">
.settings
 
    .settings__content 
        .settings__return
            ButtonComponent.arrow(:secondary="true" @click="goToMyAddress") 
                LeftArrow 
            .button-text Tilbage til Mine boliger

        .settings__edit

            .settings__house-person
                HouseInfoComponent(:name="'Flintemarken 19'", :text="'Lorem ipsum dolor sit amet consectetur. Elit natoque diam augue laoreet lacinia aenean in at malesuada.'", :address="'7190 Flintemarken 19, Billund, Denmark'", :price="1000000", :imageSrc="'/villa.jpeg'",)
            .settings__house-type
                .title Real estate settings
                HouseType
                
                HousePreference 

                SpecialRequirements

        .buttons
            ButtonComponent.button(:red="true" @click="goToMyAddress") Slet/solgt
            .button-right
                ButtonComponent.button(:secondary="true" @click="goToMyAddress") Anullere
                ButtonComponent.button(:primary="true" @click="goToNewAddress") Rediger  
</template>

<style scoped lang="sass">
.settings
    gap: 8px
    display: flex

    &__content
        gap: 32px
        display: flex
        padding: 56px 32px
        flex-direction: column

    &__house-person
        gap: 32px
        display: flex
        flex-direction: column

    &__edit
        gap: 32px
        display: flex

    &__return
        gap: 15px
        display: flex
        align-items: center

    &__house-type
        gap: 24px
        display: flex
        flex-direction: column
.buttons
    gap: 8px
    display: flex
    align-items: center
    justify-content: space-between


.button
    min-width: 170px

.title
    font-size: 24px
    font-weight: 500
    color: var(--header)

.button-right
    gap: 32px
    display: flex

.button-text
    font-size: 16px
    font-weight: 500
    color: #344054
</style>
