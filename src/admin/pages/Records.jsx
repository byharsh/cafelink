// const Records = () => {
//   return <div>Records are all here</div>;
// };

// export default Records;
const records = [
  {
    date: "22-10-26",
    orders: [
      {
        time: "3:45 PM",
        orderId: "#781234",
        table: "Table 6",
        cost: "$457",
        status: "Paid",
      },
      {
        time: "4:10 PM",
        orderId: "#781235",
        table: "Table 2",
        cost: "$320",
        status: "Paid",
      },
    ],
  },
  {
    date: "21-10-26",
    orders: [
      {
        time: "1:15 PM",
        orderId: "#781120",
        table: "Table 4",
        cost: "$610",
        status: "Paid",
      },
    ],
  },
];

const Records = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border border-gray-300 text-sm">
        {/* HEADER */}
        <thead className="bg-gray-300">
          <tr>
            <th className="px-4 py-2 text-left font-medium">Time</th>
            <th className="px-4 py-2 text-left font-medium">#Order ID</th>
            <th className="px-4 py-2 text-left font-medium">Table No.</th>
            <th className="px-4 py-2 text-left font-medium">Cost</th>
            <th className="px-4 py-2 text-left font-medium">Status</th>
          </tr>
        </thead>

        <tbody>
          {records.map((group) => (
            <>
              {/* DATE ROW */}
              <tr key={group.date}>
                <td colSpan={5} className="bg-gray-200 px-4 py-2 font-semibold">
                  {group.date}
                </td>
              </tr>

              {/* DATA ROWS */}
              {group.orders.map((order, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-300 bg-gray-100"
                >
                  <td className="px-4 py-3">{order.time}</td>
                  <td className="px-4 py-3">{order.orderId}</td>
                  <td className="px-4 py-3">{order.table}</td>
                  <td className="px-4 py-3">{order.cost}</td>
                  <td className="px-4 py-3">
                    <span className="rounded bg-gray-300 px-3 py-1 text-xs font-medium">
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Records;
