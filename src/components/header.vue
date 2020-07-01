<template>
    <header class="header">
        <div class="header__wrapper">
            <div class="header__logo">
                <a href="/" class="logo">
                    <app-logo />
                </a>
            </div>
            <div class="header__menu">
                <app-menu />
            </div>
            <div class="header__button">
                <a href="#" class="button">
                    Sign Up
                </a>
            </div>
            <div class="header__burger">
                <app-burger v-on:menuIsOpen="mobileMenuIsOpen = $event"/>
            </div>
        </div>
        <app-mobile-menu v-bind:mobileMenuIsOpen="mobileMenuIsOpen"/>
    </header>
</template>

<script>
import Logo from '../image/icon/icon-logo';
import Menu from './menu';
import MobileMenu from './mobile-menu';
import Burger from './burger';

export default {
    data() {
        return {
            mobileMenuIsOpen: false,
        }
    },
    components: {
        appLogo: Logo,
        appMenu: Menu,
        appMobileMenu: MobileMenu,
        appBurger: Burger
    }
}
</script>

<style lang="scss">
    @import '../assets/scss/mixins';

    .header__wrapper {
        display: grid;
        grid-template-columns: repeat(32, 1fr);
        align-items: center;
        padding: 25px 0;

        @include laptop {
            justify-content: flex-start;
            padding: 30px 0;
        }

        @include for-ie {
            @include flex(space-between);
            max-width: 1384px;
            margin-left: auto;
            margin-right: auto;
            padding-left: 32px;
            padding-right: 32px;
        }
    }

    .header {
        grid-area: header;
        grid-column: 1 / -1;
        position: relative;
        background-color: #ffffff;

        &__logo {
            grid-column: 3 / span 5;

            @include tablet-portrait {
                grid-column: 2 / span 5;
            }

            @include laptop-wide {
                grid-column: 6 / span 2;
            }
        }

        &__menu {
            display: none;

            @include laptop {
                display: block;
                grid-column: 8 / 23;
            }

            @include laptop-wide {
                grid-column: 9 / 23;
            }

            @include for-ie {
                width: 65%;
                margin-left: 130px;
            }
        }

        &__button {
            display: none;

            @include laptop {
                display: flex;
                grid-column: -7 / -2;
                justify-content: flex-end;
            }

            @include laptop-wide {
                grid-column: -10 / -6;
            }

            @include for-ie {
                margin-left: auto;
            }
        }

        &__burger {
            display: grid;
            grid-column: -7 / -3;
            justify-content: end;

            @include tablet-portrait {
                grid-column: -4 / -2;
            }

            @include laptop {
                display: none;
            }
        }
    }
</style>