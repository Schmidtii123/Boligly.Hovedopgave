<script setup lang="ts">
import ButtonComponent from './ButtonComponent.vue';
import IconArrowRight from './icons/IconArrowRight.vue';
import IconSave from './icons/IconSave.vue';
import PaymentStatus from './PaymentStatus.vue';
import IconArrowLeft from './icons/IconArrowLeft.vue';
import FilterIcon from './icons/FilterIcon.vue';
</script>

<template lang="pug">
.invoice
    .invoice__header 
        .invoice__header-title Fakturaoversigt
        .invoice__search_filter
            input.invoice__search(type="search" placeholder="Søg efter faktura")
            .icon 
                    a(href="#") 
                        FilterIcon
    .invoice__content
        .invoice__content-header
            .paragraph #
            .paragraph Faktura
            .paragraph Status
            .paragraph Email
            .paragraph Moms
            .paragraph Total
            .icons
        .invoice__content-status
            .invoice__number #234
            .invoice__details Faktura
            PaymentStatus.status(:tagText="'Betalt'", :paymentStatus="'paid'")
            .invoice__details olivia@mail.com
            .invoice__details $456.20
            .invoice__details $456.20
            .invoice__icons
                IconArrowRight
                IconSave
        .invoice__content-status
            .invoice__number #234
            .invoice__details Faktura
            PaymentStatus.status(:tagText="'Afventer'", :paymentStatus="'pending'")
            .invoice__details olivia@mail.com
            .invoice__details $456.20
            .invoice__details $456.20
            .invoice__icons
                IconArrowRight
                IconSave
        .invoice__content-status
            .invoice__number #234
            .invoice__details Faktura
            PaymentStatus.status(:tagText="'Fejl'", :paymentStatus="'failed'")
            .invoice__details olivia@mail.com
            .invoice__details $456.20
            .invoice__details $456.20
            .invoice__icons
                IconArrowRight
                IconSave
        .invoice__content-status
            .invoice__number #234
            .invoice__details Faktura
            PaymentStatus.status(:tagText="'Betalt'", :paymentStatus="'paid'")
            .invoice__details olivia@mail.com
            .invoice__details $456.20
            .invoice__details $456.20
            .invoice__icons
                IconArrowRight
                IconSave
        .invoice__content-status
            .invoice__number #234
            .invoice__details Faktura
            PaymentStatus.status(:tagText="'Betalt'", :paymentStatus="'paid'")
            .invoice__details olivia@mail.com
            .invoice__details $456.20
            .invoice__details $456.20
            .invoice__icons
                IconArrowRight
                IconSave
        .invoice__content-status
            .invoice__number #234
            .invoice__details Faktura
            PaymentStatus.status(:tagText="'Fejl'", :paymentStatus="'failed'")
            .invoice__details olivia@mail.com
            .invoice__details $456.20
            .invoice__details $456.20
            .invoice__icons
                IconArrowRight
                IconSave
        .invoice__content-status
            .invoice__number #234
            .invoice__details Faktura
            PaymentStatus.status(:tagText="'Betalt'", :paymentStatus="'paid'")
            .invoice__details olivia@mail.com
            .invoice__details $456.20
            .invoice__details $456.20
            .invoice__icons
                IconArrowRight
                IconSave
        .invoice__content-status
            .invoice__number #234
            .invoice__details Faktura
            PaymentStatus.status(:tagText="'Betalt'", :paymentStatus="'paid'")
            .invoice__details olivia@mail.com
            .invoice__details $456.20
            .invoice__details $456.20
            .invoice__icons
                IconArrowRight
                IconSave
        .invoice__content-status
            .invoice__number #234
            .invoice__details Faktura
            PaymentStatus.status(:tagText="'Afventer'", :paymentStatus="'pending'")
            .invoice__details olivia@mail.com
            .invoice__details $456.20
            .invoice__details $456.20
            .invoice__icons
                IconArrowRight
                IconSave

    .invoice__footer
        .sider
            ButtonComponent.button(:secondary="true")  
                IconArrowLeft 
                slot Forrige
            .sider__numbers 1 2 3 ... 9 10
            ButtonComponent.button(:secondary="true")
                slot Næste 
                IconArrowRight
</template>

<style scoped lang="sass">
.invoice
    box-shadow: 0px 1px 3px 0px #1018281A
    border-radius: 8px
    background-color: var(--white)
    margin-right: 2rem

    &__header
        display: flex
        align-items: center
        margin: 2rem
        justify-content: space-between

    &__header-title
        font-size: 24px
        font-weight: 700
        color: var(--header)

    &__number
        font-size: 14px
        font-weight: 500
        color: var(--header)

    &__details
        font-size: 14px
        color: var(--gray-500)

    &__content-header
        display: flex
        flex-direction: row
        justify-content: space-between
        padding: 16px 24px
        border-bottom: 1px solid #eaecf0
        background-color: #f9fafb

    &__content-status
        height: 72px
        display: flex
        padding: 16px 24px
        align-items: center
        flex-direction: row
        justify-content: space-between
        border-bottom: 1px solid #EAECF0

    &__icons
        gap: 8px
        display: flex
        align-items: center
        flex-direction: row

    &__footer
        display: flex
        padding: 1rem
        border-top: 1px solid #eaecf0
        justify-content: space-between

    &__search_filter
        gap: 8px
        display: flex
        align-items: center

.paragraph
    color: #98A2B3
    font-size: 14px
    text-align: center

.invoice__search
    border-radius: 8px
    border: 1px solid #EAF0FF
    padding: 12px 18px
    width: 300px

.icon
    color: #213976
    padding: 12px 18px
    border-radius: 8px
    text-decoration: none
    background-color: #f7f9ff

.button
    width: 140px

.sider
    display: flex
    align-items: center
    justify-content: space-between
    width: 100%
    gap: 0.5rem
    
    &__numbers
        display: flex
        gap: 0.25rem
        font-size: 14px
        color: #98A2B3
</style>
