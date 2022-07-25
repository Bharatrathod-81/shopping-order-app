import { createContext, useContext, useReducer } from "react";


const loginContext = createContext();

export const LoginContextProvider = ({ children }) => {

    const updateHandler = (state,{type,payload}) => {
        switch(type) {
            case "LOGIN":
                return {...state,isLogin:localStorage.getItem("token",payload)};
            
            case "LOGOUT":
                localStorage.removeItem("token");
                return {...state,isLogin:null, error:false};

            case "ERROR":
                return {...state, error:true}
            
            default:
                return state;
        }
    }

    const [State, dispatch] = useReducer(updateHandler,{
        isLogin: localStorage.getItem("token"),
        error:false,
    })
    return(
        <loginContext.Provider value={{State,dispatch}}>
            { children }
        </loginContext.Provider>
    )
}

export const useLogin = () => useContext(loginContext);
