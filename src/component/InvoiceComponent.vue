<script setup lang="ts">
import ButtonComponent from './ButtonComponent.vue';
import IconArrowRight from './icons/IconArrowRight.vue';
import IconSave from './icons/IconSave.vue';
import PaymentStatus from './PaymentStatus.vue';
import { useRouter } from "vue-router";

const router = useRouter();

const goToInvoice = () => {
    router.push('/invoice')
}
</script>

<template lang="pug">
.invoice
    .invoice__header 
        .invoice__header-title Last invoice
        ButtonComponent.button(:secondary="true" @click="goToInvoice") See all
    .invoice__content
        .invoice__content-header
            .paragraph #
            .paragraph Invoice
            .paragraph Status
            .paragraph Email
            .paragraph Tax
            .paragraph Total
            .icons
        .invoice__content-status
            .invoice__number #234
            .invoice__details Invoice
            PaymentStatus.status(:tagText="'Fejl'", :paymentStatus="'failed'")
            .invoice__details Olivia@mail.com
            .invoice__details $456.20
            .invoice__details $456.20
            .invoice__icons
                IconArrowRight
                IconSave
        .invoice__content-status
            .invoice__number #234
            .invoice__details Invoice
            PaymentStatus.status(:tagText="'Betalt'", :paymentStatus="'paid'")
            .invoice__details Olivia@mail.com
            .invoice__details $456.20
            .invoice__details $456.20
            .invoice__icons
                IconArrowRight
                IconSave
        .invoice__content-status
            .invoice__number #234
            .invoice__details Invoice
            PaymentStatus.status(:tagText="'Afventer'", :paymentStatus="'pending'")
            .invoice__details Olivia@mail.com
            .invoice__details $456.20
            .invoice__details $456.20
            .invoice__icons
                IconArrowRight
                IconSave
        .invoice__content-status
            .invoice__number #234
            .invoice__details Invoice
            PaymentStatus.status(:tagText="'Betalt'", :paymentStatus="'paid'")
            .invoice__details Olivia@mail.com
            .invoice__details $456.20
            .invoice__details $456.20
            .invoice__icons
                IconArrowRight
                IconSave
        .invoice__content-status
            .invoice__number #234
            .invoice__details Invoice
            PaymentStatus.status(:tagText="'Betalt'", :paymentStatus="'paid'")
            .invoice__details Olivia@mail.com
            .invoice__details $456.20
            .invoice__details $456.20
            .invoice__icons
                IconArrowRight
                IconSave

</template>

<style scoped lang="sass">
.invoice
    box-shadow: 0px 1px 3px 0px #1018281A
    border-radius: 8px
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

.paragraph
    color: #98A2B3
.button
    width: 140px
</style>


