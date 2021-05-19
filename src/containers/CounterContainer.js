import React from 'react';
import Counter from '../components/Counter';
// 상태를 조회 할때는 useSelector를 사용 한다.
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';

function CounterContainer() {
    // 상태를 조회 할때는 useSelector를 사용 한다.
    const { number, diff } = useSelector(
        (state) => ({
            // state => store.getState() 반환 객체
            number: state.counter.number,
            // number 값은 state > counter > number 값.
            diff: state.counter.diff,
        }),
        // useSelector 최적화 두 번째 방법 equalityFn 함수
        // left 와 right를 가져와서 비교한다.
        // (left, right) => {
        //     return left.diff === right.diff && left.number === right.number;
        // }, // 객체인 경우는 내부 값이 다 일치하는지 확인해야 되는 작업이 귀찮으니

        // shallowEqual 함수(react-redux) 사용
        // 그러나 객체안의 모든 값을 제대로 비교 하는 것이 아님. === 얕게 비교
        /**
            const obj = {
                a: {
                    x:1,
                    y:2,
                    z:3
                },
                b: 1
                c: [1,2,3,4]
            }
            만약 이런 객체가 있을 때 shallowEqual 로 비교한다면
            (left, right) => left.a === right.a && left.b === right.b && left.c === right.c
            이런식으로 비교한다 => a.z 값이 바뀌었다면 감지하지 못한다.
            그렇기 때문에 리덕스에서 상태를 업데이트 할 때 불변성을 유지해야 한다. => left.a === rigth.a 단계에서 변화를 감지한다.
         */
        shallowEqual,
    );

    // useSelector 최적화 첫 번째 방법
    // const number = useSelector((state) => state.counter.number);
    // const diff = useSelector((state) => state.counter.diff);

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
