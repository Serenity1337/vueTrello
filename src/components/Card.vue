<template>
<div id="card">
<slot />
</div>
</template>
<script>

import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {

  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      addBtnState: 'addBtnState',
      addListState: 'addListState',
      listData: 'listData'
    })
  },
  methods: {
    ...mapActions({

    }),
    ...mapMutations({

    })
  }

}
</script>
<style>
#card {
  background-color: #ebecf0;
  width: 272px;
  height: auto;
  padding: 1px;
  border-radius: 5px;
}
</style>
