// Partire dalla definizione di un array con 3 oggetti ( i todo).
// Ogni oggetto todo avrà le seguenti proprietà:
// - text, una stringa che indica il testo del todo
// - completed, un booleano (true/false) che indica se il todo è stato completato oppure no

const app = new Vue({
    el: "#app",
    data:{
        todos: [
            {
                text: 'terminare web app',
                completed: false
            },
            {
                text: 'fare compiti',
                completed: true
            },
            {
                text: 'fare spesa',
                completed: false
            }
        ],
        newTodo: '',
        filterActive: false
    },
    computed: {
        completedTodos(){
            const completed = this.todos.filter(todo => todo.completed);
            console.log(completed)
            return completed.lenght;
        }
    },
    // funzioni
    methods:{
        addTodo(){
            if(this.newTodo !== ""){
                // pusha newtdod in todos
                this.todos.unshift({
                    text: this.newTodo,
                    completed: false
                });
                // pulizia todo
                this.newTodo = '';
                // usiamo attributo ref per targhettizzare elemento nel dom
                this.$refs.todoInput.focus();
            }
        },

        // togliamo todo completato
        removeTodo(index){
            this.todos.splice(index, 1);
            const deleted = this.todos.splice(index, 1);
            console.log(deleted);
        },

        // cambiamo lo status
        updateStatus(index){
            console.log(index)
            if(this.todos[index].completed == false){
                this.todos[index].completed = true
            }else{
                this.todos[index].completed = false
            }
        },

        toggleFilter(){
            this.filterActive = !this.filterActive;
        },

    }


})