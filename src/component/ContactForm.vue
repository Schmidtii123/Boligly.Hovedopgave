<script setup lang="ts">
import Footer from './Footer.vue';
import TwitterIcon from './icons/TwitterIcon.vue';
import NavbarComponent from './NavbarComponent.vue'
import ButtonComponent from './ButtonComponent.vue';
import FacebookIcon from './icons/FacebookIcon.vue';
import LinkedinIcon from './icons/LinkedinIcon.vue';
import InstagramIcon from './icons/InstagramIcon.vue';
</script>
<template lang="pug">
.contact
    NavbarComponent
    .contact-info-form
        .contact__information
            .white-space__bottom 
            .white-space__top
            .contact-overlay
                .contact-overlay__header Get in touch
                .contact-overlay__options 
                    .contact-overlay__visit
                        .mini-header Visit us
                        .mini-message Come say hellp at our office.
                        .mini-info Lorem ipsum dolor sit amet consectetur. 
                    .contact-overlay__chat 
                        .mini-header Chat to us
                        .mini-message Our friendly team is here to help.
                        .mini-info example@mail.com
                    .contact-overlay__call 
                        .mini-header Call us
                        .mini-message Mon-Fri from 8am to 5pm
                        .mini-info +12345678
                    .contact-overlay__some
                        .mini-header Social media
                        .some 
                            a(href="https://www.facebook.com/") 
                                FacebookIcon.icon
                            a(href="https://www.instagram.com/") 
                                InstagramIcon.icon
                            a(href="https://twitter.com/home") 
                                TwitterIcon.icon
                            a(href="https://www.linkedin.com/feed/") 
                                LinkedinIcon.icon
        .contact-form
            .contact-form__text
                .contact-form__content
                    .contact-form__header Leave us a message
                    .contact-form__paragraph Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            .form
                .form-inputs
                    .contact__name
                        .firstname
                            .contact__title Enter your first name
                            input(type="text", placeholder="Firstname" class="input")
                        .lastname
                            .contact__title Enter your last name
                            input(type="text", placeholder="Lastname" class="input")
                    .contact__email
                        .contact__title Enter your email
                        input(type="text", placeholder="Email" class="input")
                    .contact__number
                        .contact__title Enter your phone number
                        input(type="number", placeholder="+12345678" class="input")
                    .contact__message
                        .contact__title Message
                        textarea(placeholder="Tell us what we can help you with" class="input__message")
                    .label
                        input(type="checkbox" class="checkbox") 
                        | I`d like to receive more information about company. I understand and agree to the Privacy Police.
                ButtonComponent(:primary="true") Send Message
Footer
</template>
<style lang="sass" scoped>
.white-space__bottom
    width: 200px
    height: 77px
    border-radius: 32px 0px 32px 0px
    background-color: var(--tertiary)
    position: absolute
    bottom: 0 
    right: 0
.white-space__top
    width: 256px
    height: 77px
    border-radius: 32px 0px 32px 0px
    background-color: var(--tertiary)
    position: absolute
    top: 0 
    left: 0
.contact
    gap: 100px
    width: 1240px
    display: Flex
    height: 1137px
    margin: 0 auto
    margin-top: 50px
    align-items: center
    flex-direction: column
.contact-text__content
    gap: 8px
    width: 603px
    height: 86px
    display: flex
    flex-direction: column

.contact-info-form
    gap: 56px
    width: 1240px
    height: 727px
    display: flex
    flex-direction: row
.contact__information
    gap: 90px
    width: 581px
    height: 727px
    display: flex
    position: relative
    align-items: center
    border-radius: 32px
    background-size: cover
    padding: 50px 80px 50px 80px
    background-image: url('/villa3.0.jpeg')
.contact-form
    gap: 46px
    width: 603px
    height: 727px
    display: flex
    flex-direction: column
.contact-form__text
    gap: 8px
    width: 603px
    height: 86px
    display: flex
    flex-direction: column
.contact-form__header
    font-size: 24px
    text-align: left
    font-weight: 700
    line-height: 38px
    letter-spacing: 0em
    color: var(--header)
.contact__paragraph
    font-size: 14px
    text-align: left
    font-weight: 400
    line-height: 20px
    letter-spacing: 0em
    color: var(--gray-500)

.form
    gap: 32px
    width: 603px
    height: 585px
    display: flex
    flex-direction: column
.form-inputs
    gap: 14px
    width: 603px
    height: 505px
    display: flex
    flex-direction: column

.contact__name
    gap: 16px
    width: 603px
    height: 70px
    display: flex
.firstname 
    gap: 4px
    width: 248px
    height: 70px
    display: flex
    flex-direction: column
.lastname
    gap: 4px
    width: 339px
    height: 70
    display: flex
    flex-direction: column
.contact__email
    gap: 4px
    width: 603px
    height: 70px
    display: flex
    flex-direction: column
.contact__number
    gap: 4px
    width: 603px
    height: 70px
    display: flex
    flex-direction: column
.contact__message
    gap: 4px
    width: 603px
    height: 191px
    display: flex
    flex-direction: column
.checkbox
    width: 18px
    height: 18px
.label
    gap: 8px
    display: flex
    font-size: 16px
    text-align: left
    font-weight: 400
    line-height: 24px
    letter-spacing: 0em
    flex-direction: row
.input
    gap: 8px
    border: 1px
    height: 48px
    display: flex
    border-radius: 8px
    padding: 12px 18px 12px 18px
    border: 1px solid var(--interested-50)
.input__message
    gap: 8px
    border: 1px
    width: 603px
    display: flex
    height: 169px
    border-radius: 8px
    line-height: 1.5rem
    padding: 12px 18px 12px 18px
    border: 1px solid var(--interested-50)
.contact__title
    font-size: 12px
    text-align: left
    font-weight: 400
    line-height: 18px
    letter-spacing: 0em
    color: var(--gray-600)
.contact-overlay
    gap: 40px
    width: 421px
    height: 552px
    display: flex
    padding: 40px
    border-radius: 32px
    flex-direction: column
    background-color: var(--tertiary)
    box-shadow: 0px 24px 48px -12px #1018282E
    &__header
        color: #1D2939
        font-size: 48px
        font-weight: 700
        line-height: 60px
        letter-spacing: -0.02em
    &__options 
        gap: 24px
        width: 341px
        height: 380px
        display: flex
        flex-direction: column
    &__visit, &__chat, &__call, &__some
        gap: 8px
        width: 341px
        height: 82px
        display: flex
        flex-direction: column
.mini-header
    font-size: 20px
    text-align: left
    font-weight: 500
    line-height: 30px
    letter-spacing: 0em
    color: var(--header)
.mini-message
    font-size: 14px
    text-align: left
    font-weight: 400
    line-height: 20px
    letter-spacing: 0em
    color: var(--gray-500)
.mini-info
    color: #1D2939
    font-size: 14px
    text-align: left
    font-weight: 500
    line-height: 20px
    letter-spacing: 0em
.some
    gap: 16px
    width: 144px
    height: 24px
    display: flex
.icon
    width: 24px
    height: 24px
</style>