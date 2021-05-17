// ducks 패턴을 사용할 땐
// 액션타입 선언시 문자열 앞에 접두사를 붙인다.
// 다른 모듈과 중복되지 않게 하기 위함.
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 작성시는 export 키워드를 붙인다.
// 내보 낸 뒤 불러와서 사용 할 것임.
export const setDiff = (diff) => ({
    type: SET_DIFF,
    diff,
});

export const increase = () => ({
    type: INCREASE,
});

export const decrease = () => ({
    type: DECREASE,
});

// 리듀서에서 관리할 초기 상태 선언
const initialState = {
    number: 0,
    diff: 1,
};

// 리듀서 작성 ( state에 기본 값 설정, default )
export default function counter(state = initialState, action) {
    switch (action.type) {
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff,
            };
        case INCREASE:
            return {
                ...state,
                number: state.number + state.diff,
            };
        case DECREASE:
            return {
                ...state,
                number: state.number - state.diff,
            };
        default:
            return state;
    }
}
