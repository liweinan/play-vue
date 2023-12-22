<template>
  <div class="home">
    <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="350" height="350" />
    <h3>You hava {{ todoCount }} todos!</h3>
    <div>
      <input
          v-model="data.newTodo"
          @keyup.enter="addTodo"
          placeholder="Add a Todo"
          type="text"
      >
    </div>
    <div>
      <ul>
        <li v-for="(todo, index) in data.todos" :key="todo.id">
          <span>{{ todo.name }}</span>
          <button @click="deleteTodo(index)">X</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, computed, watch } from 'vue'
export default {
  setup() {
    /* <------------Data------------>*/
    let data = reactive({
      newTodo: "",
      todos: [],
    })

    const swearwords = ["fart", "butt hair", "willy"];

    let todoCount = computed(() => {
      return data.todos.length;
    })

    /* <-----------Method-------------->*/
    function addTodo(){
      let tempNewTodo = {
        id: data.todos.length + 1,
        name: data.newTodo
      }
      data.todos.push(tempNewTodo);
      data.newTodo = "";
    }

    function deleteTodo(index){
      data.todos.splice(index, 1);
    }

    watch(data, (newValue) => {
      console.log("newTodo changed");
      if(swearwords.includes(newValue.newTodo.toLowerCase())){
        data.newTodo = "";
        alert(`You must NEVER say ${newValue.newTodo} !!`);
      }
    })

    /* <-----------Return----------->*/
    return {
      data,

      todoCount,

      addTodo,
      deleteTodo,
    }
  }
}
</script>

<style>
.home {
  text-align: center;
}
ul {
  list-style: none;
  padding: 0;
  width: 200px;
  margin: 20px auto 0;
}
li {
  border: 1px solid;
  display: flex;
  margin-bottom: 10px;
}
li span {
  flex-grow: 1;
}
</style>