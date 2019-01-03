<template lang="pug">
  .sidebar
    .item(v-for = "item in list" v-on:click="onClick(item)") {{item}}
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      value: 'stack'
    }
  },
  methods: {
    onClick(item) {
      this.$emit('click',item);
    }
  }
};
</script>

<style scoped lang="sass">
@import "../style/global"

.sidebar
  width: 360px
  height: 100%
  @include shadow(.12)
  padding: 12px 24px
  .item
    font-size: 24px
    margin-top: 12px
    cursor: pointer
    &:hover
      color: $black-light


</style>