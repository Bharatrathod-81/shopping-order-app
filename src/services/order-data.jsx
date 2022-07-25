import axios from "axios";


export const  OrdersList = async (dispatch) => {
    try{
        const { data } = await axios.get("13.76.214.165:8001/api/orders?page=1&limit=15&order_status=",
        {
            headers : {Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOlsiYzQ5MGRmYTgtZWJmMy00NTE5LWI1M2EtZDc1Y2I3NGJlMDUwIiwiVXJ2aXNoIiwiU2hhaCIsInVydmlzaC5zaGFoQHB1c2hwYWsuYWkiXSwiaWF0IjoxNjQ5NzUyODc0LCJleHAiOjE2ODEyODg4NzR9.13UfXk_CVjKSqyC5pq2HgQK6KKI_PPM886C0dZB5CtM"}
        })
        dispatch({type:'ORDERS_LIST',payload:data.data})
    }catch(err){
        console.log(err)
    }
};

export const  OrdersSummary = async (dispatch) => {
    try{
        const { data } = await axios.get("13.76.214.165:8001/api/analytics/summary",
        {
            headers : {Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOlsiYzQ5MGRmYTgtZWJmMy00NTE5LWI1M2EtZDc1Y2I3NGJlMDUwIiwiVXJ2aXNoIiwiU2hhaCIsInVydmlzaC5zaGFoQHB1c2hwYWsuYWkiXSwiaWF0IjoxNjQ5NzUyODc0LCJleHAiOjE2ODEyODg4NzR9.13UfXk_CVjKSqyC5pq2HgQK6KKI_PPM886C0dZB5CtM"}
        });
        dispatch({type:'ORDERS_SUMMARY',payload:data.data})
    }catch(err){
        console.log(err)
    }
};

export const  OrdersLast7Days = async (dispatch) => {
    try{
        const { data } = await axios.get("13.76.214.165:8001/api/analytics/last7Days",
        {
            headers : {Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOlsiYzQ5MGRmYTgtZWJmMy00NTE5LWI1M2EtZDc1Y2I3NGJlMDUwIiwiVXJ2aXNoIiwiU2hhaCIsInVydmlzaC5zaGFoQHB1c2hwYWsuYWkiXSwiaWF0IjoxNjQ5NzUyODc0LCJleHAiOjE2ODEyODg4NzR9.13UfXk_CVjKSqyC5pq2HgQK6KKI_PPM886C0dZB5CtM"}
        })
        dispatch({type:'ORDERS_LAST_7_DAYS',payload:data.data})
    }catch(err){
        console.log(err)
    }
};
