<template>
  <div class="home">
    <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="350" height="350" />
    <h3>You hava {{ todoCount }} todos!</h3>
    <div>
      <input
          v-model="newTodo"
          @keyup.enter="addTodo"
          placeholder="Add a Todo"
          type="text"
      >
    </div>
    <div>
      <ul>
        <li v-for="(todo, index) in todos" :key="todo.id">
          <span>{{ todo.name }}</span>
          <button @click="deleteTodo(index)">X</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        newTodo: "",
        todos: [
          {
            id: 1,
            name: "One"
          },
          {
            id: 2,
            name: "Two"
          },
          {
            id: 3,
            name: "Three"
          },
        ],
        swearwords: ["fart", "butt hair", "willy"]
      }
    },
    computed: {
      todoCount() {
        return this.todos.length;
      }
    },
    methods: {
      addTodo() {
        this.todos.push({
          id: this.todos.length + 1,
          name: this.newTodo
        });
        this.newTodo = "";
      },
      deleteTodo(index){
        this.todos.splice(index, 1);
      }
    },
    watch: {
      newTodo(newValue) {
        if(this.swearwords.includes(newValue.toLowerCase())){
          this.newTodo = "";
          alert(`You must NEVER say ${newValue} !!`);
        }
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