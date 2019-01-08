<template>
  <div class="queueVis">
    <div class="wrapper">
      <svg class="queue"></svg>

      <input id="queue-enqueue-input" placeholder="enqueue value">
      <div id="queue-enqueue-btn" class="btn">
        enqueue
      </div>

      <div id='queue-dequeue-btn' class="btn">
        dequeue
      </div>
    </div>
  </div>
</template>

<script>
import 'jagu';

export default {
  mounted() {
    const queue = jagu.queue();

    for (let i=0; i<5; i++) {
      queue.enqueue(i);
    }

    const queueVis = jagu.vis('.queue', queue).queue();

    queueVis.draw();

    document.getElementById('queue-enqueue-btn').addEventListener('click', ()=>{
      const val = document.getElementById('queue-enqueue-input').value;
      queueVis.enqueue(val);
    });

    document.getElementById('queue-dequeue-btn').addEventListener('click', ()=>{
      queueVis.dequeue();
    });
  }
};
</script>

<style lang="sass" scoped>
  svg
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
