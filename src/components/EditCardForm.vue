<template>
  <form id="new-card-name" @submit.prevent="editCardValue" >
      <input id="cardName" name="cardName" type="text" placeholder="Enter new card title...."  >
      <div class="flex-container">
      <button type="submit" class = 'submit-btn'>Change Card Title</button>
      <div class="cancel-button" @click='card.isCardEditing = false'><i class="fas fa-times"></i></div>
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
    'list', 'listIndex', 'cardIndex', 'card'

  ],
  computed: {
    ...mapGetters({
      listData: 'listData'
    })
  },
  methods: {
    ...mapActions({
      cancelListEditForm: 'cancelListEditForm'

    }),
    ...mapMutations({
      setIsListEditing: 'setIsListEditing',
      setIsCardEditing: 'setIsCardEditing',
      setCardDataState: 'setCardDataState'
    }),
    editCardValue (submitEvent) {
      const newCardData = ([...this.listData, this.list.listCards[this.cardIndex].cardName = submitEvent.target.elements.cardName.value])
      this.setCardDataState(newCardData)
      this.setCardDataState(this.listData.filter(list => list.listName))
      this.card.isCardEditing = false
      console.log(this.card)
    }

  }

}
</script>

<style lang = 'scss' scoped>

#new-card-name {
  margin: 0px 0px 0px 0px;
  background-color: #ebecf0;
  width: 280px;
  height: 82px;
  padding: 1px;
  border-radius: 5px;
  position: absolute;
          z-index: 1000000;
.flex-container {
  display: flex;
  .cancel-button {
  display: block;
  color: #42526e;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px;
  padding-top: 10px;
}
  .submit-btn {
  display: block;
  background-color: #61bd4f;
  border: none;
  border-radius: 5px;
  color: #f1f1f1;
  margin: 5px;
  cursor: pointer;
  padding: 5px;

}
}
  input {
  padding: 10px;
  border-radius: 5px;
  width: 230px;
  border: none;
  margin: 5px;
}
}

</style>
