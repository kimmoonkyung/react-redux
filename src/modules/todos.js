// ducks 패턴을 사용할 땐
// 액션타입 선언시 문자열 앞에 접두사를 붙인다.
// 다른 모듈과 중복되지 않게 하기 위함.
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

let nextId = 1;

// 액션 생성 함수 작성시는 export 키워드를 붙인다.
// 내보 낸 뒤 불러와서 사용 할 것임.
export const addTodo = (text) => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text,
    },
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id,
});

// 초기 상태 선언
const initialState = [
    /*
    {
        id: 1,
        text: '예시',
        done: false
    }
     */
];

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.todo);
        case TOGGLE_TODO:
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo,
            );
        default:
            return state;
    }
}
