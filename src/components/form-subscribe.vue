<template>
    <form action="" method="POST" class="form-subscribe">
        <input
                type="email"
                id="email"
                name="email"
                class="input-block"
                placeholder="Enter your email"
                required
        >
        <button type="submit" class="button button--yellow button--submit">
            Sign Up Now
        </button>
    </form>
</template>
<script>

</script>
<style lang="scss">
    @import '../assets/scss/mixins';
    @import '../assets/scss/variable';

    .form-subscribe {
        width: 100%;
        text-align: center;
        padding-top: 34px;

        .input-block {
            margin-bottom: 22px;
        }

        @include tablet-portrait {
            @include flex();
            align-items: flex-end;
            width: 434px;
            padding-top: 0;
            margin-left: auto;

            .input-block {
                width: 57%;
                margin-bottom: 0;
                margin-right: 8.7%;
            }
        }

        @include laptop {
            min-width: 560px;

            .input-block {
                width: 68.5%;
                margin-right: 5%;
            }
        }

        @include laptop-wide {
            min-width: 600px;
        }
    }

    .input-block {
        display: block;
        width: 100%;
        height: 48px;
        font-size: 16px;
        line-height: 28px;
        background-color: $white;
        border: none;
        border-radius: 4px;
        padding: 0 15px;


        // Отключаем стандартный крестик в полях в IE
        &::-ms-clear {
            display: none;
        }
    }
</style>