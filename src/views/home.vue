<template>
  <div>
      <ul>
          <li v-for="todo in todos">
              {{todo.text}}
          </li>
      </ul>
      <button @click="eClick()">事件</button>
  </div>
</template>
<script>
    export default {
        name: 'indexP',
        data () {
            return {
                todos: [
                    {text: 'Learn Javascript'},
                    {text: 'Learn Vue2'},
                    {text: 'Learn Webpack4'}
                ]
            }
        },
        methods:{
            eClick(){
                console.log('9999')
            }
        }
    }
</script>
