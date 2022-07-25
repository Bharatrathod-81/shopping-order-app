import { useState } from "react";


export const LatestOrders = ({ data }) => {

    const [list, setList] = useState(data)

    let colorsOfData = [
        { name: "processing", color: "yellow", icon: "" },
        { name: "delivered", color: "green", icon: "" },
        { name: "in delivery", color: "skyblue", icon: "" },
        { name: "refund", color: "red", icon: "" },
        { name: "cancelled", color: "black", icon: "" }
    ];

    const colorsFunc = (e) => {
        return colorsOfData.find(a => a.name === e).color;
    };

    const clickHandler = (e) => {
        if (e.target.value === "Choose...") {
            setList(data)
        } else {
            setList(data.filter(a => a.order_status === e.target.value))
        }
    };

    return (
        <div className="container">
            <div className="text-end">
                <i className="fa fa-search text-black me-3 mt-2" style={{ fontSize: "24px" }}></i>
                <i className="fa fa-bell-o text-black me-1 mt-2" style={{ fontSize: "24px" }}></i>
            </div>
            <div className="text-start mb-5">
                <h1 className="text-black">Lastest Orders</h1>
            </div>
            <div className="input-group mb-3">
                <button className="border-0 rounded-start pe-3 ps-3" style={{ backgroundColor: "white" }}><i className="fa fa-filter" style={{ fontSize: "24px" }}></i></button>
                <select
                    onClick={e => clickHandler(e)}
                    className="form-select border-0" id="inputGroupSelect03" aria-label="Example select with button addon" style={{ height: "6vh" }}>
                    <option selected>Choose...</option>
                    <option value="in delivery">in delivery</option>
                    <option value="refund">refund</option>
                    <option value="processing">processing</option>
                    <option value="delivered">delivered</option>
                    <option value="cancelled">cancelled</option>
                </select>
            </div>
            <div>
                <div className="m-3 d-flex justify-content-between text-black">
                    <span className="m-1">Date</span>
                    <span className="m-1">ID</span>
                    <span className="m-1">Billing name</span>
                    <span className="m-1">Amount</span>
                    <span className="m-1">Order Status</span>
                </div>
                {list[0] !== undefined ?
                    <div class="list-group  mb-5">
                        {list.map(e => {
                            return (
                                <div class="list-group-item d-flex justify-content-between pt-3" key={e.id}>
                                    <span>{e.date.slice(0, 10)}</span>
                                    <span>{e.id}</span>
                                    <span>{e.billing_name}</span>
                                    <span>{e.amount}</span>
                                    <span
                                        className="rounded p-1 ms-1 bg-opacity-10"
                                        style={{
                                            backgroundColor: `${colorsFunc(e.order_status)}`,
                                            color: `${e.order_status === "cancelled" ? "white" : "black"}`
                                        }}
                                    >{e.order_status}</span>
                                </div>
                            )
                        })}
                    </div>
                    :
                    <div></div>
                }
                <div className="text-end">
                    <button type="button" class="btn btn-primary btn-lg mb-3 rounded-4">More orders</button>
                </div>
            </div>
        </div>
    )
}