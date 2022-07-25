import axios from "axios";


export const  Login = async (dispatch,{ username, password }) => {
    try{
        const { data } = await axios.post("13.76.214.165:8001/api/login",
        {
            username,
            password
        })
        localStorage.setItem("token",data.token)
        dispatch({type:'LOGIN',payload:data.token})
    }catch(err){
        console.log(err.massage)
        dispatch({type:"ERROR"})
    }
};

