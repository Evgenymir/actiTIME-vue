<template>
    <div v-bind:class="['mobile-menu', {'is-active': mobileMenuIsOpen}]">
        <ul class="mobile-menu__list">
            <li
                v-for="menuItem in menuItems"
                v-bind:key="menuItem.name"
                class="mobile-menu__item">
                <a v-bind:href="menuItem.href" class="mobile-menu__link" @click="clickHandler">
                    {{menuItem.name}}
                    <ArrowRight v-if="menuItem.submenuItems.length" />
                </a>
                <ul
                    v-if="menuItem.submenuItems.length"
                    v-bind:class="['mobile-menu__submenu', {'is-open': submenuIsActive}]">
                    <li
                        v-for="submenuItem in menuItem.submenuItems"
                        v-bind:key="submenuItem.name"
                        class="mobile-menu__submenu-item">
                        <a v-bind:href="submenuItem.href" class="mobile-menu__submenu-link">
                            {{submenuItem.name}}
                        </a>
                    </li>
                </ul>
            </li>
        </ul>

        <div class="mobile-menu__buttons">
            <a href="#" class="button">
                Sign Up
            </a>
        </div>
    </div>
</template>

<script>
    import ArrowRight from '../image/icon/icon-arrow-right';

    export default {
        props: ['mobileMenuIsOpen'],
        name: "mobile-menu",
        data() {
            return {
                menuItems: [
                    {
                        name: 'About',
                        href: '#',
                        submenuItems: [],
                    }, {
                        name: 'Help',
                        href: '#',
                        submenuItems: [
                            {
                                name: 'User Guide',
                                href: '#',
                            }, {
                                name: 'Contact Support',
                                href: '#',
                            },
                        ],
                    }, {
                        name: 'Features',
                        href: '#',
                        submenuItems: [],
                    },
                ],
                isActive: false,
                submenuIsActive: false,
            }
        },
        components: {
            ArrowRight
        },
        methods: {
            clickHandler: function(event) {
                const submenu = event.target.nextElementSibling;
                if (submenu) {
                    event.preventDefault();
                    if (submenu.classList.contains('is-open')) {
                        event.target.classList.remove('is-open');
                        submenu.classList.remove('is-open');
                    } else {
                        event.target.classList.add('is-open');
                        submenu.classList.add('is-open');
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/mixins';
    @import '../assets/scss/variable';

    .mobile-menu {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 5;
        width: 100%;
        background-color: $white;
        border-top: 1px solid $violet-light-two;
        box-shadow: 0 8px 0 rgba($black, 0.15);
        visibility: hidden;
        opacity: 0;
        transition: visibility, opacity, ease 0.5s;

        &.is-active {
            visibility: visible;
            opacity: 1;
        }

        &__list {
            list-style-type: none;
            padding: 0;
        }

        &__link {
            position: relative;
            display: block;
            font-size: 27px;
            line-height: 74px;
            color: $blue-dark;
            font-weight: 500;
            text-decoration: none;
            border-bottom: 1px solid $violet-light-two;
            padding: 0 6%;

            svg {
                fill: $blue-dark;
                position: absolute;
                top: 50%;
                right: 6%;
                margin-top: -9px;
                transition: transform ease 0.5s;

                @include tablet-portrait {
                    right: 3%;
                }

                @include for-ie {
                    right: 32px;
                }
            }

            &.is-open {
                svg {
                    transform: rotate(90deg);
                }
            }

            @include tablet-portrait {
                padding: 0 3%;
            }

            @include for-ie {
                padding: 0 32px;
            }
        }

        &__buttons {
            text-align: center;
            padding: 44px 0;
        }

        &__submenu {
            height: 0;
            list-style-type: none;
            background-color: $violet-light-three;
            visibility: hidden;
            opacity: 0;
            overflow: hidden;
            transition: visibility, opacity, ease 0.5s;

            &.is-open {
                height: auto;
                visibility: visible;
                opacity: 1;
            }
        }

        &__submenu-item {
            padding: 0 40px;

            &:last-child {
                border-bottom: 1px solid $violet-light-two;
            }

            @include tablet-portrait {
                padding: 0 48px;
            }

            @include tablet-landscape {
                padding: 0 64px;
            }
        }

        &__submenu-link {
            display: block;
            font-size: 25px;
            line-height: 74px;
            color: $blue-dark;
            text-decoration: none;
        }

        @include laptop {
            display: none;
        }
    }
</style>