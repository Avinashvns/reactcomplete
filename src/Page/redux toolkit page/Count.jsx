
import { UseSelector, useDispatch, useSelector } from "react-redux";

import { double, triple } from '../../redux toolkit/reducer/Count'

const Counttool = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
    return (
        <>
            <div className="App">
                <h1>Welcome redux Tool kit</h1>

                {/* Letest */}
                <h1>Triple</h1>
                <button
                    aria-label="value"
                    onClick={() => dispatch(double())}
                >
                    Double
                </button>

                <span>{count}</span>

                <button
                    aria-label="value"
                    onClick={() => dispatch(triple())}
                >
                    Triple
                </button>

            </div>
        </>
    );
}

export default Counttool;