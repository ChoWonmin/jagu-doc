<template lang="pug">
  #app
    Header
    .container
      Sidebar(:list="datastructures", v-on:click="search")
      .content(v-if="content!==undefined")
        .datastructure-title {{content.title}}
        .title Usage
        .code
          .text {{content.usage}}
        .title Function
        .func(v-for="func in content.funcs")
          .name {{func.usage}}
          .description {{func.description}}

        template(v-if="content.visualization")
          .Visualization Visualization
          .title Usage
          .code
            .text {{content.visualization.usage}}
          .title Function
          .func(v-for="func in content.visualization.funcs")
            .name {{func}}

        //router-view
      .content(v-else)
        .notice to be continue ...
  </div>
</template>

<script>
import doc from './data/doc';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

export default {
  name: 'App',
  data() {
    return {
      datastructures: Object.keys(doc),
      content: doc['stack']
    }
  },
  components: {
    Header,
    Sidebar
  },
  methods: {
    search(item) {
      this.content = doc[item];
      console.log(item, doc[item])
    }
  },
}

</script>

<style lang="sass">
@import "style/global"

body
  margin: 0

*
  box-sizing: border-box
  font-family: Helvetica, Arial, sans-serif
  font-size: 16px
  color: $black

#app
  .container
    width: 100%
    height: calc(100vh - #{$header-height})
    display: flex
    .content
      padding: 24px
      width: 100%
      height: 100%
      overflow-y: auto
      .datastructure-title
        font-size: 36px
        font-weight: bold
      .title
        font-size: 24px
        margin-top: 24px

      .func
        margin-top: 16px
        padding: 12px
        @include shadow(.08)
        .name
          font-size: 18px
        .description
          margin-top: 12px

      .Visualization
        font-size: 26px
        margin-top: 32px
        font-weight: bold

      .notice
        font-size: 48px
        font-weight: bold
        padding: 48px

  .code
    width: 100%
    background-color: $code-background
    padding: 24px 48px
    border-radius: 4px
    margin-top: 16px
    .text
      color: $white-light

</style>
