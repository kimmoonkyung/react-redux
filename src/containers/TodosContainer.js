import React, { useCallback } from 'react';
import Todos from '../components/Todos';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from '../modules/todos';

function TodosContainer() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const onCreate = useCallback((text) => dispatch(addTodo(text)), [dispatch]);
    const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

    return <Todos onCreate={onCreate} onToggle={onToggle} todos={todos} />;
}

export default TodosContainer;
