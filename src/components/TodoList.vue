<template>
    <div>
          <li class="todo__list-item">
                        <div class="item__left">
                            <span class="item__status-color item__status-color--primary"></span>
                            <span class="item__checkbox" :class="{checked: todo.done}" @click="handleSetDone(index)"></span>
                        </div>

                        <div class="item__content">
                            <div class="content__text">
                                <span class="textContent" :class="{done: todo.done}">{{ todo.content }}</span> 
                                <!-- <span class="item__status">{{ (todo.done) ? 'Success' : '' }}</span> -->
                            </div>
                            <p class="content__author">BN2002</p>
                        </div>

                        <div class="item__right">
                                <span class="" @click="handleRemoveTask(index)"><i class="far fa-trash-alt action__icon action__icon--danger"></i></span>
                        </div>
                        
    </li>
    </div>
</template>

<script>
export default {
    props: ['index', 'todo', 'handleRemoveTask', 'handleSetDone'],
    data() {
        return {

        }
    }
}
</script>

<style scoped>

.todo__list-item {
    display: flex;
    height: 60px;
    border-bottom: 1px solid #DFDFDF;
    align-items: center;
    padding: 8px;
}

.item__left {
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 20px;
}

.item__status-color {
    display: inline-block;
    height: 100%;
    border-radius: 4px;
    width: 4px;
}

.item__status-color--warning {
    background-color: #FBD57B;
}

.item__status-color--danger {
    background-color: #DC3545;
}

.item__status-color--primary {
    background-color: #3F6AD8;
}

.item__status-color--success {
    background-color: #7ECA8F;
}

.item__checkbox {
    display: inline-block;
    height: 14px;
    width: 14px;
    border: 1px solid #C1C7CD;
    border-radius: 4px;
    margin-left: 6px;
    cursor: pointer;
}

.item__checkbox.checked {
    background-color: #3F6AD8;
}

.item__content {
    text-align: left;
    flex-grow: 4;
}

.content__text {
    color: rgb(88,97,109);
}

.content__text .done {
    text-decoration: line-through;
}
.item__status {
    display: inline-block;
    background: #6200EA;
    color: #fff;
    padding: 2px 4px;
    border-radius: 4px;
    font-size: 10px;
    margin-left: 8px;
}

.content__author {
    margin-top: 2px;
    font-size: 10px;
    color: rgb(166,172,165);
    font-style: italic;
}
.item__right {
    margin-right: 16px;
}

.action__icon {
    margin: 0 8px;
    cursor: pointer;
}

.action__icon.action__icon--success {
    color: #47C680;
}

.action__icon.action__icon--danger {
    color: #DE4453;
}

</style>
