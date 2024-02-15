
export const signUp=async(dispatch,data)=>{
    try {
        const res = await fetch('https://richpanel-dxy6.onrender.com/auth/signup',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(data)

        })

        const user = await res.json()
        dispatch({type:"SIGN_UP"})

    } catch (error) {
        dispatch({type:"SIGN_UP_ERROR"})
    }
}


export const logIn=async(dispatch,data)=>{
    try {
        const res = await fetch('https://richpanel-dxy6.onrender.com/auth/login',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(data)

        })

        const user = await res.json()
        if(user.user){
            dispatch({type:"LOG_IN",payload:user.user})
        }else{
            dispatch({type:"LOG_IN_ERROR"})
        }
       
    } catch (error) {
        dispatch({type:"LOG_IN_ERROR"})
    }
}

export const logOut = async(dispatch)=>{
    dispatch({type:"LOG_OUT"})
}

