import React from 'react';
import Counter from '../components/Counter';
// 상태를 조회 할때는 useSelector를 사용 한다.
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';

function CounterContainer() {
    // 상태를 조회 할때는 useSelector를 사용 한다.
    const { number, diff } = useSelector((state) => ({
        // state => store.getState() 반환 객체
        number: state.counter.number,
        // number 값은 state > counter > number 값.
        diff: state.counter.diff,
    }));

    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = (diff) => dispatch(setDiff(diff));

    return (
        <Counter
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    );
}

export default CounterContainer;
