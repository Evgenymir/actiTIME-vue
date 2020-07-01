<template>
    <div class="slider-description-links">
        <div class="slider-description-links__wrapper">
            <Slick-Slider
                    ref="slick"
                    :options="slickOptions"
                    class="slider-description-links__content">
                <div
                    v-for="sliderItem of sliderItems"
                    v-bind:key="sliderItem.title"
                    class="slider-description-links__item"
                >
                    <article class="slider-description-links__item-content">
                        <span v-if="sliderItem.label.length" class="slider-description-links__item-label">
                            {{ sliderItem.label }}
                        </span>
                        <h2 class="slider-description-links__item-title">
                            {{ sliderItem.title }}
                        </h2>
                        <p class="slider-description-links__item-text">
                            {{ sliderItem.text }}
                        </p>
                        <a :href="sliderItem.href" class="slider-description-links__item-link">
                            Learn more
                            <ArrowRight class="slider-description-links__item-icon" />
                        </a>
                    </article>
                </div>
            </Slick-Slider>
        </div>
    </div>
</template>

<script>
    import ArrowRight from '../image/icon/icon-arrow-right-color';
    import SlickSlider from 'vue-slick';

    export default {
        name: "slider.vue",
        data() {
            return {
                slickOptions: {
                    infinite: false,
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    mobileFirst: true,
                    responsive: [{
                        breakpoint: 1279,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        }

                    }]
                },
                sliderItems: [
                    {
                        label: '',
                        title: 'First Feature',
                        text: 'Little Red Cap opened her eyes and when she saw the sunbeams dancing to and fro through the trees and how the ground was covered with beautiful flowers.',
                        href: '#',
                    }, {
                        label: '',
                        title: 'Second Feature',
                        text: 'Each time she picked one she thought that she could see an even more beautiful one a little way off, and she ran after it, going further and further into the woods.',
                        href: '#',
                    }, {
                        label: '',
                        title: 'Third Feature',
                        text: 'The wolf pressed the latch, and the door opened. He stepped inside, went straight to the grandmother\'s bed, and ate her up.',
                        href: '#',
                    }, {
                        label: 'new',
                        title: 'Fourth Feature',
                        text: 'Little Red Cap had run after the flowers. After she had gathered so many that she could not carry any more, she remembered her grandmother.',
                        href: '#',
                    },
                ]
            }
        },
        components: {
            ArrowRight,
            SlickSlider,
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/mixins';
    @import '../assets/scss/variable';

    .slider-description-links {
        background-color: $yellow;
        padding: 38px 0 27px;

        &__wrapper {
            position: relative;
            padding-top: 6px;
            overflow: hidden;

            @include tablet-portrait {
                max-width: 574px;
                margin-left: auto;
                margin-right: auto;
            }

            @include laptop {
                max-width: 1080px;
            }
        }

        &__item {
            position: relative;
            padding: 0 20px;
        }

        &__item-content {
            position: relative;
            max-width: 340px;
            background-color: $yellow-light;
            border-radius: 50px;
            box-shadow: 0 10px 0 $article-shadow;
            padding: 41px 30px;
            margin-left: auto;
            margin-right: auto;

            @include tablet-portrait {
                max-width: 390px;
                padding-left: 118px;
                padding-right: 56px;
            }
        }

        &__item-label {
            position: absolute;
            top: -6px;
            left: 30px;
            display: block;
            width: 69px;
            color: $white;
            font-size: 18px;
            line-height: 34px;
            text-transform: uppercase;
            text-align: center;
            background-color: $pink;
            border-radius: 0 0 4px 4px;
            box-shadow: 0 4px 0 rgba($black, 0.07);

            @include tablet-portrait {
                left: 118px;
            }
        }

        &__item-title {
            font-size: 25px;
            line-height: 50px;
            font-weight: 400;
            margin-bottom: 20px;
        }

        &__item-text {
            height: 160px;
            font-size: 16px;
            line-height: 26px;
            margin-bottom: 20px;
            overflow: hidden;
        }

        &__item-link {
            font-size: 16px;
            line-height: 26px;
            text-decoration: none;
            color: $blue-dark;
            font-weight: 700;

            @include laptop {
                transition: color ease 0.5s;

                &:hover {
                    color: $violet;
                }
            }
        }

        &__item-icon {
            display: inline-block;
            vertical-align: middle;
            margin-left: 24px;
            margin-top: -2px;
        }

        .slick-track {
            display: flex;
            counter-reset: slides;
        }

        .slick-slide {
            @include tablet-portrait {
                position: relative;

                &:before {
                    counter-increment: slides;
                    content: counter(slides);
                    position: absolute;
                    top: 45px;
                    left: 0;
                    z-index: 1;
                    width: 167px;
                    height: 194px;
                    text-align: center;
                    font-size: 202px;
                    line-height: 194px;
                    color: $violet;
                    font-weight: 700;

                    @include laptop {
                        left: -15px;
                    }
                }
            }
        }

        .slick-dots {
            @include flex(center);
            list-style-type: none;
            padding-top: 46px;

            li {
                @include flex(center);
                align-items: center;
                width: 26px;
                height: 26px;
                padding: 8px;
                cursor: pointer;

                &.slick-active {
                    button {
                        width: 10px;
                        height: 10px;
                        background-color: $pink;
                    }
                }
            }

            button {
                display: block;
                width: 6px;
                height: 6px;
                background-color: $white;
                border-radius: 50%;
                border: none;
                margin: 0;
                padding: 0;
                text-indent: -2000px;
                transition: width, height, background, ease 0.5s;
                cursor: pointer;

                &:focus {
                    outline: 0;
                }
            }

            @include tablet-portrait {
                justify-content: flex-start;
                padding-top: 52px;
            }
        }

        @include tablet-portrait {
            width: 100%;
            max-width: 1200px;
            border-radius: 50px;
            margin-left: auto;
            margin-right: auto;
            padding-top: 97px;
            padding-bottom: 52px;
        }
    }
</style>