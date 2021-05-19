import React, { useCallback } from 'react';
import Todos from '../components/Todos';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../modules/todos';

function TodosContainer({ addTodo, toggleTodo, todos }) {
    const onCreate = useCallback((text) => addTodo(text), [addTodo]);
    const onToggle = useCallback((id) => toggleTodo(id), [toggleTodo]);

    return <Todos onCreate={onCreate} onToggle={onToggle} todos={todos} />;
}

// 객체 형태로 리턴한다.
// const mapStateToProps = (state) => ({ todos: state.todos });
// const mapDispatchToProps = {
//     addTodo,
//     toggleTodo,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
// 이렇게도 가능함
// hooks 이 메인이다 ! 클래스형으로 컴포넌트를 작성하게 된다면 참고 할 것.
export default connect((state) => ({ todos: state.todos }), {
    addTodo,
    toggleTodo,
})(TodosContainer);
