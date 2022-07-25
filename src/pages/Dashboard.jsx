import { useEffect } from "react";
import { useOrderData } from "../context/orderData-context";
import { OrdersLast7Days, OrdersList, OrdersSummary } from "../services/order-data";
import { Chart } from "./chart";
import { LatestOrders } from "./latest-orders";


export const Dashboard = () => {

    const { data: { ordersLast7Days, ordersList, ordersSummary }, dispatchData } = useOrderData();
    useEffect(() => {
        OrdersList(dispatchData)
        OrdersSummary(dispatchData)
        OrdersLast7Days(dispatchData)
    }, []);

    let colorsOfData = [
        { name: "processing", color: "yellow", icon: "fa-refresh" },
        { name: "delivered", color: "green", icon: "fa-check-square-o" },
        { name: "in delivery", color: "skyblue", icon: "fa-truck" },
        { name: "refund", color: "red", icon: "fa-sign-out" },
        { name: "cancelled", color: "black", icon: "fa-times-rectangle-o" }
    ]

    const quantity = (count) => {
        let totalSummaryCount = ordersSummary.summary.reduce((acc, curr) => acc + curr.count, 0);
        return count / totalSummaryCount * 100;
    }

    const ascending = () => {
        if (ordersSummary.summary) {
            return ordersSummary.summary.sort((a, b) => a.count - b.count);
        };
        return []
    };

    const colorsFunc = (e,type) => {
        if(type==="color"){
            return colorsOfData.find(a => a.name === e).color;
        }else{
            return colorsOfData.find(a => a.name === e).icon;
        };
    };

    return (
        <>
            {
                ordersSummary.overview !== undefined ?
                    <div className="d-flex justify-content-center flex-wrap pt-5">
                        <div className="d-flex flex-column align-items-center pt-4" style={{ width: "55rem" }}>
                            <div className="d-flex flex-column align-items-start mb-4" style={{ width: "68%" }}>
                                <p className="text-black-50 ms-3 ">Welcome Natalia</p>
                                <h1 className="ms-3">Overview Shop</h1>
                            </div>

                            <div className="d-flex justify-content-center flex-wrap" style={{ width: "100%" }}>
                                <div className="card text-bg-warning bg-opacity-10 m-2 rounded-4" style={{ width: "12rem", height: "12rem" }}>
                                    <div className="card-body text-start" style={{ width: "7rem" }}>
                                        <h4 className="card-text">New orders</h4>
                                    </div>
                                    <p className="text-start text-muted ms-3">+5% <i class="fa fa-upload"></i></p>
                                    <h4 className="text-start ms-3">$ {ordersSummary.overview.average_sale[0].average_sale}</h4>
                                </div>

                                <div className="card text-bg-secondary bg-opacity-10 m-2 rounded-4" style={{ width: "12rem", height: "12rem" }}>
                                    <div className="card-body text-start" style={{ width: "8rem" }}>
                                        <h4 className="card-text text-black">Average sale</h4>
                                    </div>
                                    <p className="text-start text-muted ms-3">+4.8% <i class="fa fa-upload"></i></p>
                                    <h4 className="text-black text-start ms-3">$ {ordersSummary.overview.new_orders[0].new_orders}</h4>
                                </div>

                                <div className="card text-bg-info bg-opacity-10 m-2 rounded-4" style={{ width: "12rem", height: "12rem" }}>
                                    <div className="card-body text-start" style={{ width: "8.5rem" }}>
                                        <h4 className="card-text">Total Earnings</h4>
                                    </div>
                                    <p className="text-start text-muted ms-3">+3.2% <i class="fa fa-upload"></i></p>
                                    <h4 className="text-start ms-3">$ {ordersSummary.overview.total_earnings[0].total_earnings}</h4>
                                </div>
                            </div>

                            <div className="d-flex justify-content-around text-bg-secondary bg-opacity-10 rounded-4 p-4 mt-4" style={{ width: "95%", height: "50vh" }}>
                                <div className="text-bg-secondary bg-opacity-10 overflow-hidden rounded-4" style={{ width: "5%", height: "100%" }}>
                                    {ascending().map(e => {
                                        return (
                                            <div className="opacity-75"
                                                style={{
                                                    height: `${quantity(e.count)}%`,
                                                    backgroundColor: `${colorsFunc(e.order_status)}`
                                                }}></div>
                                        )
                                    })}
                                </div>

                                <div className="d-flex flex-column justify-content-between m-1" style={{ width: "85%" }}>
                                    {ascending().reverse().map(e => {
                                        return (
                                            <div className="d-flex justify-content-around align-items-center opacity-75">

                                                <p className="d-flex justify-content-center align-items-center rounded mb-0"
                                                    style={{ width: "3rem", height: "3rem", backgroundColor: `${colorsFunc(e.order_status,"color")}` }}>

                                                    <i className={`fa ${colorsFunc(e.order_status,"icon")} text-primary text-white`} style={{ fontSize: "24px" }}></i>
                                                </p>
                                                <div className="d-flex justify-content-between align-items-center" style={{ width: "90%" }}>
                                                    <h5 className="text-dark m-1">{e.order_status}</h5>
                                                    <h6 className="text-dark m-1">{e.count}</h6>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                            <div className="mt-5" style={{ width: "95%" }}>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <div className="d-flex justify-content-between ms-1" style={{ width: "10rem" }}>
                                        <h5>Revenue</h5>
                                        <h5>Orders</h5>
                                    </div>
                                    <select class="form-select me-2" aria-label="Default select example" style={{ width: "8.5rem" }}>
                                        <option selected>Last 7 Days</option>
                                        <option value="1">Last Month</option>
                                        <option value="2">Last Year</option>
                                        <option value="3">Last 3 Year</option>
                                    </select>
                                </div>
                                <Chart data={ordersLast7Days} />
                            </div>
                        </div>
                        <div className=" pt-4 text-bg-secondary bg-opacity-10 rounded-4" style={{ width: "55rem" }}>
                            <LatestOrders data={ordersList}/>
                        </div>
                    </div>
                    :
                    <div></div>
            }
        </>
    )
}