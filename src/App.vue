<template>
  <div id="app">
    <Header></Header>
    <Main-content></Main-content>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './components/header';
import MainContent from './components/main-content';
import Footer from './components/footer';

export default {
  name: 'App',
  components: {
    Header,
    MainContent,
    Footer
  }
}
</script>

<style lang="scss">
  @import './assets/scss/mixins';

  #app {
    min-width: 320px;
    min-height: 100%;
    display: grid;
    grid-template-columns: repeat(32, 1fr);
    grid-template-rows: auto 1fr auto;
    grid-template-areas: "header"
                         "content"
                         "footer";
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: #4b5d68;
    line-height: 1.42;
    -webkit-font-smoothing: antialiased;
    background-color: #ffffff;

    @include for-ie {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }
  }
</style>
