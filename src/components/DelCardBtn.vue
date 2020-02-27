<template>
  <i class="fas fa-trash" @click='deleteCard(list,listIndex)'></i>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data () {
    return {

    }
  },
  props: [
    'list', 'listIndex', 'card', 'cardIndex'
  ],
  computed: {
    ...mapGetters({
      listData: 'listData'
    })
  },
  methods: {
    ...mapMutations({
      setCardDataState: 'setCardDataState'
    }),
    deleteCard () {
      const cardsArr = this.list.listCards.filter((entry, entryIndex) => this.cardIndex !== entryIndex)
      this.setCardDataState([...this.listData, this.list.listCards = cardsArr])
      this.setCardDataState(this.listData.filter(list => list.listName))
    }
  }
}
</script>

<style lang='scss' scoped>
.fa-trash {
        float: right;
        margin: 2px 10px 0px 0px;
        cursor: pointer;
        }
</style>
