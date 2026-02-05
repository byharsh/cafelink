import { OrderCard } from "../components";

const LiveOrders = () => {
  return (
    <section
      className="
      
      grid
      grid-cols-1
      gap-4
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
      
      "
    >
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </section>
  );
};
export default LiveOrders;
