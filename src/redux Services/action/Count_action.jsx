
export const Increment = 'Incerment';
export const Decrement = 'Decrement';

export const incrementCounter = () => {
    return {
        type: Increment
    }
}


export const decrementCounter = () => {
    return {
        type: Decrement
    }
}