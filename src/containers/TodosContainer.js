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

// connect의 3번째 파라미터 mergeProps
// 생략해도 상관 없는 파라미터,
// 하나의 함수인데 이를 통해서 컴포넌트롤 통해 전달 받게 될 props 를 정의 할 수 있다
/**
    (stateProps, dispatchProps, ownProps) => Object
    생략 된다면
    { ...ownProps, ...stateProps, ...dispatchProps }
    이런 형태의 객체를 리턴함
 */

// connect의 4번째 파라미터 options
/**
    {
        ... 다양한 옵션들이 있음
    }
 */
// 잘 사용하지 않아서 넘어가도록 한다.
