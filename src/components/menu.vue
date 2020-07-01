<template>
    <nav class="menu">
        <ul class="menu__list">
            <li
                v-for="mainMenuItem in mainMenuItems"
                v-bind:key="mainMenuItem.name"
                class="menu__item"
            >
                <a v-bind:href="mainMenuItem.href" class="menu__link">
                    {{mainMenuItem.name}}
                    <app-arrow v-if="mainMenuItem.submenuItems.length" class="menu__arrow" />
                </a>
                <ul
                    v-if="mainMenuItem.submenuItems.length"
                    class="menu__submenu"
                >
                    <li
                        v-for="submenuItem in mainMenuItem.submenuItems"
                        v-bind:key="submenuItem.name"
                        class="menu__submenu-item"
                    >
                        <a v-bind:href="submenuItem.href" class="menu__submenu-link">
                            {{submenuItem.name}}
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>
<script>
    import Arrow from '../image/icon/icon-arrow-bottom';

    export default {
        data() {
            return {
                mainMenuItems: [
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
                            }
                        ],
                    }, {
                        name: 'Features',
                        href: '#',
                        submenuItems: [],
                    },
                ]
            }
        },
        components: {
            appArrow: Arrow
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/mixins';
    @import '../assets/scss/variable';

    .menu {
        display: none;

        &__list {
            @include flex();
            list-style-type: none;
            padding: 0;
        }

        &__item {
            position: relative;
            margin-right: 47px;

            &:last-child {
                margin-right: 0;
            }

            &.is-active {
                .menu__link {
                    color: $violet;
                }
            }

            &:hover {
                .menu__submenu {
                    visibility: visible;
                    opacity: 1;
                }

                .menu__link {
                    color: $violet;
                }

                .menu__arrow {
                    fill: $violet;
                    transform: rotate(-180deg);
                }
            }
        }

        &__link {
            font-weight: 500;
            font-size: 18px;
            line-height: 30px;
            text-decoration: none;
            color: $blue-dark;
            transition: color ease 0.5s;
        }

        &__arrow {
            display: inline-block;
            vertical-align: middle;
            fill: $blue-dark;
            margin-left: 4px;
            transition: transform ease 0.5s;
        }

        &__submenu {
            position: absolute;
            top: calc(100% + 15px);
            left: -8px;
            list-style-type: none;
            background-color: $white;
            border: 1px solid $violet;
            border-radius: 10px;
            padding: 12px 17px 12px 24px;
            box-shadow: 0 4px 0 rgba($violet, 0.3);
            visibility: hidden;
            opacity: 0;
            transition: opacity, visibility, ease 0.5s;

            &:before {
                content: "";
                width: 18px;
                height: 18px;
                background-color: $white;
                border: 1px solid $violet;
                border-right: 0;
                border-bottom: 0;
                position: absolute;
                top: -10px;
                left: 58px;
                transform: rotate(45deg);
            }

            &:after {
                content: "";
                width: 100%;
                height: 25px;
                position: absolute;
                top: -25px;
                left: 0;
            }
        }

        &__submenu-link {
            font-size: 16px;
            line-height: 32px;
            white-space: nowrap;
            text-decoration: none;
            color: $blue-dark;
            transition: color ease 0.5s;

            &:hover {
                color: $violet;
            }
        }

        @include laptop {
            display: block;
        }
    }
</style>