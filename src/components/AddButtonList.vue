<template>
<div class="add-another-list" @click='addBtnClick'>
      + Add another list
    </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {
    ...mapActions({
      addBtnClick: 'addBtnClick'
    })
  }
}
</script>

<style lang = 'scss' scoped>
.add-another-list {
  background-color: #7f7f80;
  border-radius: 5px;
  padding: 10px;
  width: 200px;
  height: 20px;
  margin: 10px 0px 0px 10px;
  cursor: pointer;
  opacity: 0.7;
  color: rgb(255, 255, 255, 1);
}
</style>
