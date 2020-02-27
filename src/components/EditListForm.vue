<template>
  <form id="new-list-name" @submit.prevent="editListValue" >
      <input id="listName" name="listName" type="text" placeholder="Enter new list title...."  >
      <div class="flex-container">
      <button type="submit" class = 'submit-btn'>Change Title</button>
      <div class="cancel-button" @click='list.isListEditing = false'><i class="fas fa-times"></i></div>
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
      cancelListEditForm: 'cancelListEditForm'

    }),
    ...mapMutations({
      setIsListEditing: 'setIsListEditing',
      setIsCardEditing: 'setIsCardEditing',
      setCardDataState: 'setCardDataState'
    }),
    editListValue (submitEvent) {
      const newListData = ([...this.listData, this.list.listName = submitEvent.target.elements.listName.value])
      this.setCardDataState(newListData)
      this.setCardDataState(this.listData.filter(list => list.listName))
      this.list.isListEditing = false
    }

  }

}
</script>

<style lang = 'scss' scoped>

#new-list-name {
  margin: 10px 0px 0px 5px;
  background-color: #ebecf0;
  width: 200px;
  height: 82px;
  padding: 1px;
  border-radius: 5px;
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
