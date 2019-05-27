const reducer=(currentState,action)=>{
    switch (action.type) {
        case "ADD":
            const newState = currentState+ action.payload; 
            return newState;
            break;
    
        default:
            return currentState;
            break;
    }
}
export default reducer;