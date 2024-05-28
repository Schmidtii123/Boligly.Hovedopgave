<script setup lang="ts">
import PeopleIcon from "./icons/PeopleIcon.vue";
import HomeIcon from "./icons/HomeIcon.vue";
import FAQIcon from "./icons/FAQIcon.vue";
import ShieldIcon from "./icons/ShieldIcon.vue";
import MoneyIcon from "./icons/MoneyIcon.vue";
import QuestionRegister from "./QuestionRegister.vue";
import QuestionRealEstate from "./QuestionRealEstate.vue";
import QuestionFinancial from "./QuestionFinancial.vue";
import QuestionSupport from "./QuestionSupport.vue";
import QuestionSecurity from "./QuestionSecurity.vue";
import { ref } from "vue";

let selectedIcon = ref("QuestionRegister");
</script>

<template lang="pug">
.questions-faq-list
    .header-list
        .header FAQ
        .list 
            a.list__choice(:class="{ 'active': selectedIcon === 'QuestionRegister' }", v-on:click="selectedIcon = 'QuestionRegister'")
                PeopleIcon
                p Registration and Account
                
            a.list__choice(:class="{ 'active': selectedIcon === 'QuestionRealEstate' }", v-on:click="selectedIcon = 'QuestionRealEstate'")
                HomeIcon
                p Real Estate Ads and Search

            a.list__choice(:class="{ 'active': selectedIcon === 'QuestionFinancial' }", v-on:click="selectedIcon = 'QuestionFinancial'")
                MoneyIcon
                p Financial Issues

            a.list__choice(:class="{ 'active': selectedIcon === 'QuestionSupport' }", v-on:click="selectedIcon = 'QuestionSupport'")
                FAQIcon
                p Support

            a.list__choice(:class="{ 'active': selectedIcon === 'QuestionSecurity' }", v-on:click="selectedIcon = 'QuestionSecurity'")
                ShieldIcon
                p Security and Privacy

    .questions__section 
        QuestionRegister(v-if="selectedIcon === 'QuestionRegister'")
        QuestionRealEstate(v-if="selectedIcon === 'QuestionRealEstate'")
        QuestionFinancial(v-if="selectedIcon === 'QuestionFinancial'")
        QuestionSupport(v-if="selectedIcon === 'QuestionSupport'")
        QuestionSecurity(v-if="selectedIcon === 'QuestionSecurity'")
</template>

<style lang="sass" scoped>
.questions-faq-list
    gap: 56px
    display: flex
    margin-top: 2rem
    flex-direction: row
    justify-content: center
    align-items: flex-start
.list
    display: flex
    flex-direction: column
    gap: 12px

.list__choice
    gap: 8px
    height: 60px
    display: flex
    padding: 16px
    cursor: pointer
    border-radius: 8px
    align-items: center
    flex-direction: row
    color: var(--gray-500)
    &:hover
        background-color: var(--background)
        color: #1D2939
.active
    color: #1D2939
    background-color: var(--background)
.header
    font-size: 32px
    font-weight: 700
    color: var(--header)

.header-list
    gap: 56px
    display: flex
    flex-direction: column
</style>
