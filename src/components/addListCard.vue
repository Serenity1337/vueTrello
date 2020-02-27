<template>
  <form id="new-address" @submit.prevent="getListValues">
      <input class="cardName" name="listCard" type="text" placeholder="Enter card title...."  >
      <div class="flex-container">
      <button type="submit" class = 'submit-btn'>Add Card</button>
      <div class="cancel-button" @click='list.visible = true'><i class="fas fa-times"></i></div>
    </div>
    </form>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  props: [
    'list', 'listIndex'

  ],
  computed: {
    ...mapGetters({
      listData: 'listData'
    })
  },
  methods: {
    ...mapActions({
      cancelBtnClick: 'cancelBtnClick',
      submitList: 'submitList'

    }),
    ...mapMutations({
      setCardDataState: 'setCardDataState'
    }),
    getListValues (submitEvent) {
      this.setCardDataState([...this.listData, this.list.listCards.push({
        cardName: submitEvent.target.elements.listCard.value,
        isCardEditing: false,
        id: this.list.listCards.length
      })])
      this.setCardDataState(this.listData.filter(list => list.listName))
      submitEvent.target.elements.listCard.value = null
      console.log(this.listData)
    }
  }
}
</script>

<style lang = 'scss' scoped>

#new-address {
  margin: 10px 0px 0px 10px;
  background-color: #ebecf0;
  width: 252px;
  height: auto;
  padding: 1px;
  border-radius: 5px;
.flex-container {
  display: flex;
  padding: 0px 0px 10px 0px;
  .cancel-button {
  display: block;
  color: #42526e;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px;
  padding-top: 10px;
  margin-left: 10px;
  margin: 0px 0px 0px 0px;
}
  .submit-btn {
  display: block;
  background-color: #61bd4f;
  border: none;
  border-radius: 5px;
  color: #f1f1f1;
  margin: 0px 0px 0px 0px;
  cursor: pointer;
  padding: 5px;

}
}
  input {
  padding: 10px;
  border-radius: 5px;
  width: 230px;
  border: none;
  margin: 0px 0px 10px 0px
}

}

</style>
