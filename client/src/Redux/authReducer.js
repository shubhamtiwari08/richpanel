const initialState ={
    signedUp:false,
    loggedIn:false,
    user:{},
    error:null,
}



export const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case"SIGN_UP":
        return{
            ...state,
            signedUp:true,
        }
        case"SIGN_UP_ERROR":
        return{
            ...state,
            error:"could not sign in"
        }
        case"LOG_IN":
        return{
            ...state,
            user:{...action.payload},
            loggedIn:true,
        }
        case"LOG_IN_ERROR":
        return{
            ...state,
            error:"could not log in"
        }
        case"LOG_OUT":
        return{
            ...state,
            loggedIn:false
        }
        default:
            return state
    }

}