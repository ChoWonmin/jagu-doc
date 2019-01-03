<template lang="pug">
  .header
    .logo 자구
    .title Document
    .empty
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="sass">
@import "../style/global"

.header
  width: 100vw
  height: $header-height
  background-color: $white-light
  @include shadow(.12)
  z-index: 10
  display: flex
  align-items: center
  .logo
    font-size: 32px
    text-indent: 24px
    font-weight: bold
  .title
    text-indent: 24px
    font-size: 24px

</style>