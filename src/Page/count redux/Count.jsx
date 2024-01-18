
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "../../redux Services/action/Count_action"
const MyCounter = ({ count, incrementCounter, decrementCounter }) => {
    return (
        <>
            <div>
                <button onClick={incrementCounter}>Increment</button>
                <h1>{count}</h1>
                <button onClick={decrementCounter}>Decrement</button>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}
const mapDispatchToProps = {
    incrementCounter,
    decrementCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCounter);