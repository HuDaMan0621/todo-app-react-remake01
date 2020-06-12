import React from 'react'

const Todos = ({todos}) => {
    
    const todoList = todos.length ? () :  (
        <p className = "center">You have no todo's left, go party!</p> 
    ) 
    return (
        <div className="todos collection">

        </div>
    )
}