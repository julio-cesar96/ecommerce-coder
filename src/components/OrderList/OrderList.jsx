import useFetchData from "../../hooks/useFetchData";

function OrderList() {
    
    const orders = useFetchData('/api/orders');
    return <OrderList orders={orders} />;
  }

export default OrderList;
  