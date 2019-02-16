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
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }

    //Controlando Eventos do 'TodoForm':
    handleChange(e){
        //target: tag do contexto
        this.setState({ ...this.state, description: e.target.value })        
    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    handleClear(){
        this.refresh()
    }

    refresh(description = ''){
        const search = description ? `&description__regex=/${description}/` : ''
        Axios.get(`${URL}?sort=-createAt${search}`).then(res =>
            this.setState({ ...this.state, description, list: res.data})
        )
    }

    //Controlando Eventos do 'TodoList':
    handleAdd(){
        const description = this.state.description //pegando ultimo estado do input
        Axios.post(URL, {description}).then(res => 
            this.refresh()
        )        
    }

    handleRemove(todo){
        Axios.delete(`${URL}/${todo._id}`).then(res => 
            this.refresh(this.state.description)
        )
    }

    handleMarkAsDone(todo){
        Axios.put(`${URL}/${todo._id}`, { ...this.todo, done: true}).then(res =>
            this.refresh(this.state.description)
        )
    }

    handleMarkAsPending(todo){
        Axios.put(`${URL}/${todo._id}`, { ...this.todo, done: false}).then(res =>
            this.refresh(this.state.description)
        )
    }

    //render(): Método Obrigatório da classe
    render(){
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
               
                <TodoForm handleAdd = {this.handleAdd}
                          handleChange = {this.handleChange} 
                          handleSearch = {this.handleSearch} 
                          handleClear = {this.handleClear} />
                
                <TodoList list = {this.state.list}
                          handleRemove = {this.handleRemove}
                          handleMarkAsDone = {this.handleMarkAsDone}
                          handleMarkAsPending = {this.handleMarkAsPending}
                          handleSearch = {this.handleSearch} />
            </div>
        )
    }
 }