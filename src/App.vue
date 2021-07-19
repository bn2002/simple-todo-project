<template>
    <div id="app">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <Todo />
        
     
    </div>
</template>

<script>
import Todo from './components/Todo.vue';
export default {
    data() {
        return {
          
        }
    },

    components: {
        Todo
    },
   
}
</script>

<style>

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

::-webkit-scrollbar {
    width: 8px;
    height: 10px;

}
::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: #c2c9d2;
}
#app {
    display: flex;
    justify-content: center;
    height: 100vh;
    background-color: #6200EA;
    width: 100vw;
}



</style>