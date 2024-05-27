<script setup lang="ts">
import { ref } from 'vue';
import ButtonComponent from "../component/ButtonComponent.vue";
import SideBarBuyer from "../component/SideBarBuyer.vue";
import IconPlus from "../component/icons/IconPlus.vue";
import FilterIcon from "../component/icons/FilterIcon.vue";
import AvatarComponent from "../component/AvatarComponent.vue";
import IconDots from '../component/icons/IconDots.vue';
import IconSend from '../component/icons/IconSend.vue';

// Holder øje med hvilken en der er aktiv 
const activeMessageIndex = ref(0);

// Funktionen til at ændre hvilken besked der er aktiv
const setActiveMessage = (index: number) => {
  activeMessageIndex.value = index;
};
</script>

<template lang="pug">

.container
    SideBarBuyer
    .messages
        .header-content 
            .header Beskeder
            ButtonComponent.button
                IconPlus 
                slot Ny besked
        .chat-messages
            .search_filter
                input.search(type="search" placeholder="Søg i beskeder..")
                .filter 
                    a(href="#") 
                        FilterIcon
        .active-messages
            .a_message(
                v-for="(message, index) in 8" 
                :key="index" 
                :class="{ active: index === activeMessageIndex }"
                @click="setActiveMessage(index)"
            )
                AvatarComponent(:size="40" :imageSrc="'/selling.jpeg'")
                .name-latest-message
                    .name Emil Schmidt
                    .latest-message Good.
                .date 24/01/2000
    .message 
        .chat-header 
            .title
                AvatarComponent(:size="40" :imageSrc="'/selling.jpeg'")
                .name Emil Schmidt
            IconDots.dot 
        .status I dag
        .chat-messages 
            .received
                .mini-title
                    AvatarComponent(:size="32" :imageSrc="'/selling.jpeg'")
                    .mini-name Emil Schmidt
                    .time 11:32
                .received-message Vi kunne godt tænke os at du vil komme og besøge ejendommen i morgen?

            .send
                .mini-title
                    AvatarComponent(:size="32" :imageSrc="'/realtor.jpeg'")
                    .mini-name Dig
                    .time 12:34
                .send-message Det lyder Perfekt, hvad tid på dagen regner i med at vi kan komme forbi og kigge?

            .received
                .mini-title
                    AvatarComponent(:size="32" :imageSrc="'/selling.jpeg'")
                    .mini-name Emil Schmidt
                    .time 11:32
                .received-message Jeg høre lige ejeren hvornår de er ude af huset.

                .received-message De er ude af huset fra 12:00 til 15:00 så det vil være bedst hvis i kunne komme forbi i det tidsrum.

            .send
                .mini-title
                    AvatarComponent(:size="32" :imageSrc="'/realtor.jpeg'")
                    .mini-name Dig
                    .time 12:34
                .send-message Okay, vi kommer forbi kl 13:00


        .input-text 
            input.input-send(type="text" placeholder="Skriv besked..")
            ButtonComponent
                IconSend

</template>     

<style scoped lang="sass">
.input-text
    gap: 8px
    display: flex

.input-send
    border-radius: 8px
    border: 1px solid #EAF0FF
    padding: 12px 18px
    width: 100%

.chat-messages
    gap: 24px
    display: flex
    flex-direction: column

.received
    gap: 16px
    display: flex
    flex-direction: column
    align-items: flex-start

.mini-title
    display: flex
    align-items: center
    gap: 8px
    margin-bottom: 4px

.mini-name
    font-size: 14px
    font-weight: 500
    color: var(--header)

.time
    font-size: 12px
    color: var(--gray-600)

.send
    gap: 16px
    display: flex
    flex-direction: column
    align-items: flex-end
    margin-bottom: 16px
    
.send-message
    padding: 16px
    color: var(--tertiary)
    border-radius: 8px 0 8px 8px
    background-color: var(--primary)

.received-message
    padding: 16px
    color: var(--gray-600)
    border-radius: 0 8px 8px 8px
    background-color: var(--tertiary)
    


.mini-title
    display: flex
    align-items: center
    gap: 8px
    margin-bottom: 4px

.mini-name
    font-size: 14px
    font-weight: 500
    color: var(--header)

.time
    font-size: 12px
    color: var(--gray-600)

.chat-header
    display: flex
    padding: 16px
    width: 100%
    border-radius: 8px
    align-items: center
    background-color: #FFFFFF
    justify-content: space-between

.title
    gap: 16px
    display: flex
    align-items: center

.status
    display: flex
    padding: 4px 16px
    border-radius: 100px
    border: 1px solid #96AEE9
    align-self: center
    width: 65px
    font-size: 14px

.message
    gap: 32px
    width: 100%
    display: flex
    padding: 32px
    margin-top: 2rem
    margin-bottom: 2rem
    border-radius: 8px
    flex-direction: column
    background-color: #F7F9FF

.container
    display: flex
    flex-direction: row
    gap: 32px

.messages
    display: flex
    flex-direction: column
    gap: 32px

.search_filter
    gap: 8px
    display: flex
    align-items: center

.search
    border-radius: 8px
    border: 1px solid #EAF0FF
    padding: 12px 18px
    width: 250px

.filter
    color: #213976
    padding: 12px 18px
    border-radius: 8px
    text-decoration: none
    background-color: #f7f9ff

.active-messages
    gap: 8px
    display: flex
    flex-direction: column

.a_message
    gap: 8px
    width: 100%
    height: 90px
    display: flex
    cursor: pointer
    padding: 16px
    align-items: flex-start

    &.active
        border: 1px solid #96AEE9
        border-radius: 8px
        background-color: #F7F9FF


.name-latest-message
    gap: 6px
    display: flex
    flex-direction: column

.name
    font-size: 18px
    font-weight: 500
    color: var(--header)

.latest-message
    font-size: 16px
    color: var(--gray-500)

.date
    font-size: 12px
    color: var(--gray-600)

.button
    width: 310px

.header-content
    gap: 32px
    display: flex
    margin-top: 2rem
    flex-direction: column

.header
    font-size: 32px
    font-weight: 700
    color: var(--header)
</style>