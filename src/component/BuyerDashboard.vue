<script setup lang="ts">
import SideBarBuyer from './SideBarBuyer.vue';
import ButtonComponent from './ButtonComponent.vue';
import ProfileInfoComponent from './ProfileInfoComponent.vue';
import HouseType from './HouseType.vue';
import SpecialRequirements from './SpecialRequirements.vue';
import HousePreference from './HousePreference.vue';
</script>


<template lang="pug">
.container 
    SideBarBuyer
    .content 
        .header
            .header-title Dashboard 
            ButtonComponent.button Rediger
        .content-info
            .profile-info
                ProfileInfoComponent(
                    :name="'John Doe'" 
                    :email="'schmidtii@gmail.com'" 
                    :searchStatus="'ready'" 
                    :tagText="'Købeklar'" 
                    :phoneNumber="'12345678'" 
                    :price="1000000" 
                    :beskedNotification="'Foretrlkker opkald, Foretrækker email'" 
                    :friTekst="'Vi er en familie på 4 personer - vi er kritiske og har set alt på boligsiden'"
                )
            .buyer
                .buyer-title Køberkartotek
                .group
                    .mini-title Postnr. jeg søger bolig
                    input.input(type="text" placeholder="8000,8100")
                .buyer-two-inputs 
                    .group
                        .mini-title Område jeg søger bolig
                        input.input(type="text" placeholder="Voel, Sejs-svejbæk, ")
                    .group
                        .mini-title Adresse jeg søger bolig 
                        input.input(type="text" placeholder="Ikke indtastet")
                HouseType 
                HousePreference 
                SpecialRequirements
</template>
    
<style scoped lang="sass">
.container
    display: flex
    max-width: 100vw

.profile-info
    height: 450px
    width: 100%

.buyer-two-inputs
    gap: 24px
    display: flex
    width: 100% 
    justify-content: space-between

.mini-title
    color: #475467
    font-size: 12px
    font-weight: 400

.input
    padding: 12px 18px
    border-radius: 8px
    border: 1px solid #EAF0FF
    width: 100%

.buyer
    gap: 24px
    display: flex
    flex-direction: column
    width: 750px
   
.group
    gap: 4px
    width: 100%
    display: flex
    flex-direction: column

.buyer-title
    font-size: 24px
    font-weight: 500
    color: var(--header)

.content-info
    gap: 32px
    display: flex
    width: 100%
    box-sizing: border-box

.content
    display: flex
    flex-direction: column
    padding: 12px 18px
    width: 1140px
    box-sizing: border-box

.button
    width: 170px
    box-sizing: border-box

.header
    display: flex
    justify-content: space-between
    width: 100%
    box-sizing: border-box

.header-title
    font-size: 32px
    font-weight: bold
    margin-bottom: 20px
    width: 100%
</style>
