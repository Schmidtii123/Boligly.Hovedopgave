<script lang="ts" setup>
import HomeIcon from "./icons/HomeIcon.vue";
import LogOutIcon from "./icons/LogOutIcon.vue";
import BuyerIcon from "./icons/BuyerIcon.vue";
import ChatIcon from "./icons/ChatIcon.vue";
import SettingsIcon from "./icons/SettingsIcon.vue";
import FAQIcon from "./icons/FAQIcon.vue";
</script>

<template lang="pug">
.sidebar
  .section
    .header-container
      .header Boligly
    .header-link
      .router-links
        router-link(:to="'/buyer'" class="nav-link" active-class="active")
          HomeIcon
          | Home
        router-link(:to="'/buyer/leads'" class="nav-link" active-class="active")
          BuyerIcon
          | Køberådgivere
        router-link(:to="'/buyer/chat'" class="nav-link" active-class="active")
          ChatIcon
          | Chat
  .profile
    .profile-link
      router-link(:to="'/buyer/faq'" class="nav-link" active-class="active")
        FAQIcon
        | FAQ
      router-link(:to="'#'" class="nav-link" )
        SettingsIcon
        | Settings
    .profile-bar
      .profile-info
        img.image(src="/buyer.jpeg", alt="Profile Picture")
        .profile-name Henrik Oldenborg
      .logout-container
        router-link(:to="'/'")
          LogOutIcon.log-out 
</template>


<style lang="sass" scoped>
.sidebar
  position: sticky
  display: flex
  flex-direction: column
  justify-content: space-between
  top: 0
  left: 0
  height: 100vh
  width: 20vw
  padding: 56px 32px 56px 32px
  background-color: var(--secondary)

.section
  width: 236px
  height: 374px
  gap: 56px
  display: flex
  flex-direction: column
  max-height: 374px

.header-link
  width: 236px
  height: 374px
  display: flex
  flex-direction: column
  align-items: center
  gap: 56px

.router-links
  width: 100%
  height: auto
  gap: 8px
  display: flex
  flex-direction: column

.nav-link
  display: flex
  width: 100%
  height: 40px
  padding: 8px
  border-radius: 4px
  gap: 8px
  color: var(--gray-500)
  text-decoration: none
  align-items: center
  font-size: 16px
  font-weight: 400
  line-height: 24px
  letter-spacing: 0em
  text-align: center
.nav-link:hover 
  background-color: var(--primary)
  color: var(--white-50)

.material-icons
  width: 24px
  height: 24px
  padding: 2.27px 3px 3px 3px
.active
  background-color: var(--primary)
  color: var(--white-50)
.profile
  width: 236px
  height: 160px
  gap: 16px
  display: flex
  flex-direction: column
.profile-link
  width: 236px
  height: 88px
  gap: 8px
  display: flex
  flex-direction: column
.profile-info
  display: flex
  align-items: center
  gap: 8px
.profile-bar
  display: flex
  align-items: center
  justify-content: space-between
  background-color: var(--white-50)
  border-radius: 4px
  padding: 8px
.image
  display: flex
  width: 40px
  height: 40px
  border-radius: 4px
  gap: 8px
  object-fit: cover
.profile-name
  font-size: 16px
  font-weight: 400
  line-height: 24px
  letter-spacing: 0em
  text-align: left
  color: var(--gray-text)
.log-out
  text-decoration: none
  color: var(--gray-500)
.header
  font-size: 24px
  font-weight: 700
  line-height: 38px
  letter-spacing: 0em
  
</style>
