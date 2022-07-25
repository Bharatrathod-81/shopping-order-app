import { createContext, useContext, useReducer } from "react";


const orderDataContext = createContext();

export const OrderDataContextProvider = ({ children }) => {

    const updateHandler = (state,{type,payload}) => {
        switch(type) {
            case "ORDERS_LIST":
                return {...state,ordersList:payload};
            
            case "ORDERS_SUMMARY":
                return {...state,ordersSummary:payload};

            case "ORDERS_LAST_7_DAYS":
                return {...state,ordersLast7Days:payload}
            
            default:
                return state;
        }
    }

    const [data, dispatchData] = useReducer(updateHandler,{
        ordersList:[],
        ordersSummary:{},
        ordersLast7Days:{}
    })
    return(
        <orderDataContext.Provider value={{data, dispatchData}}>
            { children }
        </orderDataContext.Provider>
    )
}

export const useOrderData = () => useContext(orderDataContext);