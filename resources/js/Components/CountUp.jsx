import {useEffect, useRef, useState} from "react";

const CountUp = ({start = 0, end}) => {
    const [state, setState] = useState(null);
    const ref = useRef(start);
    const accumulator = end / 200;

    const updateCounterState = () => {
        if(ref.current < end){
            const result = Math.ceil(ref.current + accumulator);
            if(result > end) return setState(end);
            setState(result);
            ref.current = result;
        }
        setTimeout(updateCounterState,5)
    }

    useEffect(() => {
        let isMounted = true;
        if(isMounted){
            updateCounterState();
        }
        return () => (isMounted = true);
    },[end,start])

    return <div>{state}</div>

}

export default CountUp
