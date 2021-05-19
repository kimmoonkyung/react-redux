import React from 'react';
// import { bindActionCreators } from 'react-redux';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';

function CounterContainer({ number, diff, increase, decrease, setDiff }) {
    return (
        <Counter
            number={number}
            diff={diff}
            onIncrease={increase}
            onDecrease={decrease}
            onSetDiff={setDiff}
        />
    );
}

// connect 함수(react-redux) 를 사용 할 땐 2가지 함수(state, dispatch) 를 선언해줘야 함
const mapStateToProps = (state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
});
// const mapDispatchToProps = (dispatch) => ({
//     onIncrease: () => dispatch(increase()),
//     onDecrease: () => dispatch(decrease()),
//     onSetDiff: (diff) => dispatch(setDiff(diff)),
// });
// => bindActionCreators
// const mapDispatchToProps = (dispatch) =>
//     bindActionCreators(
//         {
//             increase,
//             decrease,
//             setDiff,
//         },
//         dispatch,
//     );
// =>  mapDispatchToProps를 함수타입이 아닌 객체 타입으로 하게 된다면
//     bindActionCreators 커넥터 내부에서 이루어져서 바로 사용 할 수 있다.
const mapDispatchToProps = { increase, decrease, setDiff };

// const enhance = connect(mapStateToProps, mapDispatchToProps);
// export default enhance(CounterContainer);
// =>
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
