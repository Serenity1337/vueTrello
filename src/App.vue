<template>
<div id="app">
  <draggable
  v-model="listTestData"
  group="lists"
  @start="drag = true"
  @end="drag=false"
  :options="{group:{name:'pages',pull:true,put:true},animation: 150}"

  >
  <div class="wrapper"
  v-for="(list,listIndex) in listData"
  :key='list.id'
  >

<Card class = "card">

   <h1 @click="test(list)" v-show="!list.isListEditing" >{{ list.listName }} <i class="fas fa-times" @click="delList(list, listIndex)"></i>
   <i class="fas fa-edit" @click="turnListEdit(list)"></i></h1>
   <EditListForm
      v-show="list.isListEditing"
     :list=list
     :listIndex=listIndex
     />
<draggable
  v-model="listCardData"
  group="cards"
  @start="drag = true"
  @end="drag=false"

  >
   <div

   class="listDoCards"
   v-for="(card,cardIndex) in list.
   listCards"
   :key='cardIndex'
   >
    <EditCardForm
      class = "card-edit-form"
       v-show="card.isCardEditing"
     :list=list
     :listIndex=listIndex
     :card=card
     :cardIndex=cardIndex
     />
     <span > {{ card.cardName }}</span>

     <DelCardBtn
     :list=list
     :listIndex=listIndex
     :card=card
     :cardIndex=cardIndex

     />
     <i class="fas fa-edit" @click='turnCardEdit(list,card)'></i>
     </div>
</draggable>

<AddListCardBtn v-show='list.visible' :list=list />
<AddListCard v-show='!list.visible' :list=list />

</Card>
</div>
</draggable>

<AddButtonList v-if='addBtnState'>
</AddButtonList>
<AddList v-else/>
</div>
</template>

<script>
import AddButtonList from '@/components/AddButtonList'
import AddList from '@/components/AddList'
import Card from '@/components/Card'
import AddListCardBtn from '@/components/addListCardBtn'
import AddListCard from '@/components/addListCard'
import DelCardBtn from '@/components/DelCardBtn'
import EditListForm from '@/components/EditListForm'
import EditCardForm from '@/components/EditCardForm'
import draggable from 'vuedraggable'

import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  components: {
    AddButtonList,
    AddList,
    Card,
    AddListCardBtn,
    AddListCard,
    DelCardBtn,
    EditListForm,
    EditCardForm,
    draggable
  },
  data () {
    return {
      isVisible: true
    }
  },
  computed: {
    ...mapGetters({
      addBtnState: 'addBtnState',
      addListState: 'addListState',
      listData: 'listData'
    }),
    listTestData: {
      get () {
        return this.$store.state.listData
      },
      set (value) {
        this.$store.commit('setCardDataState', value)
      }
    },
    listCardData: {
      get () {
        return this.$store.state.listData.listCards
      },
      set (value) {
        this.$store.commit('setTestDataState', value)
        console.log(this.listData)
      }
    }

  },
  methods: {
    ...mapActions({
      addBtnClick: 'addBtnClick'
    }),
    ...mapMutations({
      setAddBtnState: 'setAddBtnState',
      setCardDataState: 'setCardDataState',
      setTestDataState: 'setTestDataState'
    }),
    delList (list, listIndex) {
      this.setCardDataState(this.listData.filter((entry, entryIndex) => listIndex !== entryIndex))
    },
    turnListEdit (list) {
      list.isListEditing = true
    },
    turnCardEdit (list, card) {
      card.isCardEditing = true
      console.log(card)
    },
    test (list) {
      console.log(list)
      console.log(this.listData)
      console.log('asda')
    }
  }
}

</script>

<style lang = 'scss'>
* {
  margin: 0;
  padding: 0;
}
body {
background-image: url('./assets/images/bg-image.jpg');
background-color: #cccccc;
background-size: cover;
background-position: 50%;
background-repeat: no-repeat;
background-attachment: fixed;
height: 100%;
}
#app {
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;

}
.wrapper {
    width: 272px;
    height: 100%;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
    margin: 10px 0px 0px 10px;
    border-radius: 5px;
    .card {
      h1 {
        font-size: 14px;
        font-weight: 600;
        padding: 15px 15px 0px 20px;
        .fa-edit {
          float:right;
          cursor: pointer;
          margin-right: 10px;
        }
        .fa-times {
          float:right;
          cursor: pointer;
        }
        .fa-edit:hover {
          background-color: #dadbe2;
        }
        .fa-times:hover {
          background-color: #dadbe2;
        }
      }
      .listDoCards {
        margin: 10px;
        background-color: #ffffff;
        border-radius: 5px;
        height: 30px;
        padding-top: 10px;
        padding: 10px 0px 0px 10px;
        .fa-edit {
          cursor: pointer;
          float: right;
          margin: 2px 10px 0px 0px;
        }
        .fa-edit:hover {
          background-color: #dadbe2;
        }
        span {
          font-size: 14px;
          font-weight: 600;
          background-color: #ffffff;

        }
      }
    }
}
</style>
