<template>
<div class="add-list-card" v-on:click='list.visible = !list.visible'>
  + Add a card
</div>
</template>

<script>
export default {
  props: ['list']
}
</script>

<style lang = 'scss' scoped>
.add-list-card {
  background-color: #ebecf0;
  border-radius: 5px;
  padding: 10px;
  width: 200px;
  height: 20px;
  margin: 10px 0px 0px 10px;
  cursor: pointer;
  opacity: 0.7;
  color: #3b4b68;
}
</style>
