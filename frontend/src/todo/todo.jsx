// impostando React e atribuindo a classe Componente
import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm';
import TodoList from './todoList';

import Axios from 'axios'
const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props){
        super(props)
        //props: somente leitura
        this.state = {description: '', list: []}
        
        //Amarrando contexto de eventos a classe 'Todo'
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

        this.refresh()
    }

    refresh(){
        Axios.get(`${URL}?sort=-createAt`).then(res =>
            this.setState({ ...this.state, description: '', list: res.data})
        )
    }

    //Controlando Eventos do 'Todo':
    handleAdd(){
        const description = this.state.description //pegando ultimo estado do input
        Axios.post(URL, {description}).then(res => this.refresh())        
    }

    handleRemove(todo){
        Axios.delete(`${URL}/${todo._id}`).then(res => this.refresh())
    }

    handleChange(e){
        //target: tag do contexto
        this.setState({ ...this.state, description: e.target.value })        
    }


    //render(): Método Obrigatório da classe
    render(){
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
               
                <TodoForm handleAdd = {this.handleAdd}
                          handleChange = {this.handleChange} />
                
                <TodoList list = {this.state.list}
                          handleRemove = {this.handleRemove}/>
            </div>
        )
    }
 }