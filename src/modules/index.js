// 루트 리듀서를 만들 때는 combineReducers를 불러와서 사용한다.
import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer;
