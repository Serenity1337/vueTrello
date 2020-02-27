<template>
  <form id="new-address" @submit.prevent="getListValues">
      <input id="listName" name="listName" type="text" placeholder="Enter list title...."  >
      <div class="flex-container">
      <button type="submit" class = 'submit-btn'>Add List</button>
      <div class="cancel-button" @click='cancelBtnClick'><i class="fas fa-times"></i></div>
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
      setDataState: 'setDataState'
    }),
    getListValues (submitEvent) {
      this.setDataState(
        {
          isListEditing: false,
          visible: true,
          id: this.listData.length + 1,
          listName: this.listName = submitEvent.target.elements.listName.value,
          listCards: []

        },
        submitEvent.target.elements.listName.value = null
      )
    }
  }
}
</script>

<style lang = 'scss' scoped>

#new-address {
  margin: 10px 0px 0px 10px;
  background-color: #ebecf0;
  width: 272px;
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
  width: 243px;
  border: none;
  margin: 5px;
}
}

</style>
