const TransReducer = ((state,action) => {
    switch (action.type){
        case 'ADD_TRANSACTION':
            return [action.payload , ...state];
        case 'default':
            return state;
    }
    
});
export default TransReducer;