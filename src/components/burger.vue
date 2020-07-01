<template>
    <div :class="['burger', {'burger--is-active': isActive}]" @click="clickHandler">
        <div class="burger__line"></div>
        <div class="burger__line"></div>
        <div class="burger__line"></div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isActive: false
            }
        },

        methods: {
            clickHandler() {
                this.isActive = !this.isActive;
                this.$emit('menuIsOpen', this.isActive);
            }
        }
    }
</script>
<style lang="scss">
    @import '../assets/scss/mixins';
    @import '../assets/scss/variable';

    .burger {
        width: 36px;
        height: 24px;
        cursor: pointer;

        &__line {
            position: relative;
            left: 0;
            top: 0;
            width: 100%;
            height: 3px;
            background-color: $blue-dark;
            transition: all ease 0.3s;

            &:not(:last-child) {
                margin-bottom: 7.5px;
            }
        }

        &--is-active {
            .burger__line {
                &:nth-child(1) {
                    top: 11px;
                    transform: rotate(45deg);
                }

                &:nth-child(2) {
                    opacity: 0;
                    left: -15px;
                }

                &:nth-child(3) {
                    top: -10px;
                    transform: rotate(-45deg);
                }
            }
        }

        @include laptop {
            display: none;
        }
    }
</style>