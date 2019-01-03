<template>
  <div class="stackVis">
    <div class="wrapper">
      <svg class="stack"></svg>

      <input id="stack-push-input" placeholder="push value">
      <div id="stack-push-btn" class="btn">
      push
      </div>

      <div id='stack-pop-btn' class="btn">
      pop
      </div>
    </div>
  </div>
</template>

<script>
import 'jagu';

export default {
  mounted() {
    const stack = jagu.stack();

    for (let i=0; i<5; i++) {
      stack.push(i);
    }

    const stackVis = jagu.vis('.stack', stack).stack();

    stackVis.draw();

    document.getElementById('stack-push-btn').addEventListener('click', ()=>{
      const val = document.getElementById('stack-push-input').value;
      stackVis.push(val);
    });

    document.getElementById('stack-pop-btn').addEventListener('click', ()=>{
      stackVis.pop();
    });
  },
  progs: {

  },
  data() {
    return {
      disabled: false
    };
  },
  methods:{
  }
};
</script>

<style lang="sass" scoped>
  svg.stack
    width: 200px
    height: 480px
    background-color: #ececec

  .btn
    width: 96px
    height: 32px
    background-color: #ffbc73
    border-radius: 4px
    color: #fff
    text-align: center
    line-height: 32px
    margin: 8px


  input
    height: 32px
    text-indent: 8px

  .wrapper
    display: flex;

</style>
