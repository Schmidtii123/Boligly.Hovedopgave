<script setup lang="ts">
import LeftArrow from "./icons/LeftArrow.vue";
import ButtonComponent from "./ButtonComponent.vue";
import ImageIcon from "./icons/ImageIcon.vue";
import HouseType from "./HouseType.vue";
import SpecialRequirements from "./SpecialRequirements.vue";
import HousePreference from "./HousePreference.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const imageFile = ref(null);
const imageUrl = ref("");

const fileInputId = ref("fileInputId");

const yourData = ref(0);

const checkValue = () => {
  if (yourData.value < 0) {
    yourData.value = 0;
  }
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }
    imageFile.value = file;
    imageUrl.value = URL.createObjectURL(file);
  }
};

const goBack = () => {
  if (confirm("Er du sikker på, at du vil annullere? Alle ændringer vil gå tabt.")) {
    router.go(-1);
  }
};

const handleSave = () => {
  alert("Tillykke din adresse er nu opdateret!");
  setTimeout(() => {
    router.push('/my-address/settings');
  }, 500); // Delay på 0.5 sekund inden den sender en tilbage til my-address
};

</script>

<template lang="pug">
.my-address
    .my-address-btn__content
        ButtonComponent(:secondary="true" @click="goBack")
            LeftArrow
        .my-address__btn-text Back to My addresses
    .header New Address
    .my-address__settings 
        .my-address_settings__p Settings
        .my-address-settings__image-address
            label.my-address__image(:for="fileInputId" :style="{ backgroundImage: `url(${imageUrl})` }")
                ImageIcon.img__icon(v-if="!imageFile")
                input(type="file" id="fileInputId" v-show="!imageFile" @change="handleFileChange")
            .my-address__address-selling
                .my-address__place
                    .my-address__address-p Enter the Address
                    input.my-address__input(placeholder="Enter the Address")
                .my-address__price
                    .my-address__address-p Desired sellings price
                    input.my-address__input(placeholder="10.000 €" type="number" v-model="yourData" @input="checkValue")

        HouseType
        HousePreference 
        SpecialRequirements
        .buttons
            ButtonComponent.button(:secondary="true" @click="goBack") Annullere
            ButtonComponent.button(@click="handleSave") Gem
</template>

<style lang="sass" scoped>
.my-address
    gap: 32px
    left: 300px
    width: 1141px
    display: flex
    height: 1230px
    flex-direction: column
    padding: 56px 32px 56px 32px

.my-address-btn__content
    gap: 15px
    height: 48px
    display: flex
    align-items: center
.my-address__btn-text
    color: var(--gray-text)

.header
    font-size: 32px
    text-align: left
    font-weight: 700
    line-height: 44px
    color: var(--header)
    letter-spacing: -0.02em

.my-address__settings
    gap: 24px
    width: 1077px
    height: 882px
    padding: 24px
    display: flex
    border-radius: 16px
    flex-direction: column

.my-address_settings__p
    font-size: 24px
    text-align: left
    font-weight: 500
    line-height: 32px
    letter-spacing: 0em
    color: var(--header)

.my-address-settings__image-address
    gap: 24px
    width: 1029px
    height: 154px
    display: flex
    flex-direction: row
.my-address-settings_image
    gap: 16px
    border: 1px
    height: 154px
    padding: 24px
    width: 502.5px
    display: flex
    border-radius: 16px

.img__icon
    background-color: var(--secondary)
    gap: 8px
    width: 40px
    height: 40px
    padding: 8px
    display: flex
    border-radius: 4px

.my-address__image
    gap: 16px
    height: 154px
    display: flex
    width: 502.5px
    cursor: pointer
    align-items: center
    border-radius: 16px
    flex-direction: column
    background-size: cover
    justify-content: center
    background-position: center
    border: 1px dashed var(--primary)

.my-address__address-selling
    gap: 14px
    height: 154px
    display: flex
    width: 502.5px
    flex-direction: column

.my-address__place, .my-address__price
    gap: 4px
    height: 70px
    display: flex
    width: 502.5px
    flex-direction: column

.my-address__address-p, .housing-type__header
    font-size: 12px
    text-align: left
    font-weight: 400
    line-height: 18px
    letter-spacing: 0em
    color: var(--gray-600)

.my-address__input
    gap: 8px
    height: 48px
    display: flex
    font-size: 14px
    text-align: left
    font-weight: 400
    line-height: 20px
    border-radius: 8px
    letter-spacing: 0em
    color: var(--header)
    border: solid 1px #EAF0FF
    padding: 12px 18px 12px 18px

.buttons
    gap: 8px
    display: flex
    align-items: center
    justify-content: flex-end

.button
    min-width: 170px

</style>
