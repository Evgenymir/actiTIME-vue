<template>
    <main class="main-content">
        <div class="index-content">
            <h1 class="title-h1">
                {{mainTitle}}
            </h1>
            <div class="description description--max-width">
                {{mainDescription}}
            </div>
        </div>
        <section class="description-product-slider">
            <app-slider-links />
        </section>
    </main>
</template>

<script>
    import SliderLinks from './slider';

    export default {
        name: "main-content",
        data() {
            return {
                mainTitle: 'Features',
                mainDescription: 'Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.',
            }
        },
        components: {
            appSliderLinks: SliderLinks
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/mixins';
    @import '../assets/scss/variable';

    .main-content {
        display: grid;
        grid-template-columns: repeat(32, 1fr);
        grid-auto-rows: auto;
        grid-area: content;
        grid-column: 1 / -1;
        padding-top: 50px;
        padding-bottom: 73px;

        @include tablet-portrait {
            padding-top: 45px;
            padding-bottom: 92px;
        }

        @include laptop {
            padding-top: 105px;
            padding-bottom: 151px;
        }
    }

    .index-content {
        grid-column: 3 / -3;

        @include tablet-portrait {
            grid-column: 2 / -2;
        }

        @include laptop-wide {
            grid-column: 6 / -6;
        }
    }

    .description-product-slider {
        grid-column: 1 / -1;

        @include tablet-portrait {
            grid-column: 3 / -3;
        }

        @include tablet-landscape {
            grid-column: 6 / -6;
        }

        @include laptop {
            grid-column: 3 / -3;
        }

        @include fullhd {
            max-width: 100%;
            grid-column: 7 / -7;
        }

        @include for-ie {
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>