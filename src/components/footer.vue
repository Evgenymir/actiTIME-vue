<template>
    <footer class="footer">
        <div class="footer__wrapper">
            <div class="footer__logo">
                <a href="/" class="logo">
                    <logo-white />
                </a>
            </div>
            <div class="footer__menu">
                <ul class="footer__menu-list">
                    <li class="footer__menu-item">
                        <a href="#" class="footer__menu-link">
                            About Us
                        </a>
                    </li>
                    <li class="footer__menu-item">
                        <a href="#" class="footer__menu-link">
                            Privacy Policy
                        </a>
                    </li>
                </ul>
            </div>
            <div class="footer__form">
                <Subscribe />
            </div>
        </div>
    </footer>
</template>
<script>
    import LogoWhite from '../image/icon/icon-logo-white';
    import Subscribe from '../components/form-subscribe'

    export default {
        components: {
            LogoWhite,
            Subscribe
        }
    }
</script>
<style lang="scss">
    @import '../assets/scss/mixins';
    @import '../assets/scss/variable';

    .footer {
        grid-area: footer;
        grid-column: 1 / -1;
        background-color: $violet;

        &__wrapper {
            display: grid;
            grid-template-columns: repeat(32, 1fr);
            grid-auto-rows: auto;
            align-items: start;
            padding: 58px 0 52px;

            @include tablet-portrait {
                padding: 52px 0 37px;
            }

            @include laptop {
                padding: 74px 0;

            }

            @include for-ie {
                @include flex(space-between);
                align-items: center;
                max-width: 1384px;
                margin-left: auto;
                margin-right: auto;
                padding-left: 32px;
                padding-right: 32px;
            }
        }

        &__logo {
            grid-column: 3 / span 5;

            @include tablet-portrait {
                grid-column: 2 / span 2;
            }

            @include laptop-wide {
                grid-column: 6 / span 2;
            }
        }

        &__menu {
            display: flex;
            grid-column: 20 / 31;
            justify-content: flex-end;

            @include tablet-portrait {
                grid-column: 7 / span 5;
                justify-content: flex-start;
            }

            @include laptop {
                grid-column: 8 / span 6;
                min-width: 30%;
            }

            @include laptop-wide {
                grid-column: 9 / span 7;
            }
        }

        &__menu-list {
            list-style-type: none;
            padding: 0;

            @include laptop {
                @include flex();
            }
        }
        &__menu-item {
            margin-bottom: 4px;

            &:last-child {
                margin-bottom: 0;
            }

            @include laptop {
                margin-right: 54px;

                &:last-child {
                    margin-right: 0;
                }
            }
        }

        &__menu-link {
            display: block;
            color: $white;
            text-decoration: none;
            line-height: 40px;
            font-weight: 500;
        }

        &__form {
            grid-column: 3 / -3;
            width: 100%;

            @include tablet-portrait {
                grid-column: 14 / -2;
                max-width: 464px;
                justify-self: right;
            }

            @include laptop {
                width: auto;
                max-width: none;
            }

            @include laptop-wide {
                grid-column: 18 / -6;
            }

            @include for-ie {

            }
        }

        @include for-ie {
            margin-top: auto;
        }
    }
</style>