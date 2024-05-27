<script setup>
import ButtonComponent from "./ButtonComponent.vue";
import IconPlay from "./icons/IconPlay.vue";
</script>
<template lang="pug">
div
    .content
        .how
            .paragraph Så nemt er det
            .header Sådan virker det
        .text
            | Måden vores system virker på, er ret simpelt. Du skal blot følge de tre trin som er vist her. Hvis du ønsker at registrere dig i vores køberkartotek, så klik blot på øverst på siden på køberkartotek.  
    .buttons
        ButtonComponent(:fullWidth="true") Start now
        ButtonComponent(:fullWidth="true"
            :primary="false"
        ) 
            | Watch more
            IconPlay(:color="'#213976'") 

</template>

<style lang="sass" scoped>
.content 
  gap: 16px
  width: 480px
  height: 162px
.how 
  gap: 4px
  width: 100%
  height: 66px
.paragraph 
  font-size: 12px
  font-weight: 400
  line-height: 18px
  letter-spacing: 0em

.header 
  font-size: 32px
  width: 100%
  font-weight: 500
  line-height: 44px
  color: var(--header)
  letter-spacing: -0.02em

.text 
  width: 480px
  height: 80px
  font-size: 14px
  text-align: left
  font-weight: 400
  line-height: 20px
  letter-spacing: 0em
  color: var(--gray-500)
.buttons 
  gap: 8px
  width: 100%
  height: 48px
  display: flex
</style>
