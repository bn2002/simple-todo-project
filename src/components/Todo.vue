<template>
     <div class="todo">
                <div class="todo__header">
                  
                    <p><i class="fas fa-tasks"></i> Task Lists </p>

                </div>
                <div class="todo__body">
                    <ul class="todo__list">
                        <Todo-list 
                            v-for="(todo, index) in todoList" 
                            :todo="todo" 
                            :key="index" 
                            :index="index"
                            :handleRemoveTask="handleRemoveTask" 
                            :handleSetDone="handleSetDone"
                        />
                    </ul>
                   
                </div>
                <div class="todo__footer">
                    <input type="text" placeholder="Nội dung task" v-model="newTodo">
                    <button class="footer__button footer__button--primary" @click="handleAddTask()">Add Task</button>
                </div>
            </div>
</template>

<script>
import TodoList from './TodoList.vue';
export default {
  
   data() {
       return {
           newTodo: '',
           todoList: [
               {content: 'ABC', done: true}
           ]
       }
   },
   props: ['message', 'changeAge'],
   components: {TodoList},
   methods: {
       handleAddTask: function() {
           this.todoList.push({content: this.newTodo, done: false});
           this.newTodo = '';
       },
       handleRemoveTask: function(index) {
           this.todoList.splice(index, 1);
       },
       handleSetDone: function(index) {
           this.todoList[index].done = !this.todoList[index].done;
       }
   }
}
</script>

<style scoped>
.todo {
    background-color: #fff;
    position: absolute;
    top: 50%;
    width: 712px;
    height: auto;
    transform: translateY(-50%);
    border-radius: 4px;
    padding: 0 8px;
}

.todo__header {
    font-size: 14px;
    height: 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid #DFDFDF;
    padding: 0 12px;
    font-weight: 200;
} 

.todo__body {
   margin-bottom: 12px;
   border-bottom: 1px solid #DFDFDF;
}
.todo__list {
    list-style-type: none;
    height: 300px;
    overflow-y: scroll;
}


.todo__footer {
    display: flex;
    justify-content: space-between;
    margin: 0 12px 12px 0;
}

.todo__footer input {
    display: inline-block;
    width: 84%;
    font-size: 12px;
    outline: none;
    border-radius: 4px;
    padding-left: 4px;
    border: 1px solid #DFDFDF;
}

.footer__button {
    outline: none;
    border: none;
    padding: 8px;
    cursor: pointer;
    margin-left: 8px;
    border-radius: 4px;
}

.footer__button--primary {
    color: #fff;
    background-color: #3F6AD8;
}

.footer__button--danger {
    color: #fff;
    background-color: #DC3545;
}
</style>
