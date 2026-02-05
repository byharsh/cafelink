import { MenuItem } from "../components";

export const Inventory = () => {
  // Sample data for menu items
  const menuItems = [
    {
      id: 1,
      title: "Cappuccino",
      size: "Medium",
      price: "$4.50",
      image: "https://via.placeholder.com/300x200?text=Cappuccino",
      type: "Large",
      inStock: true,
    },
    {
      id: 2,
      title: "Latte",
      size: "Large",
      price: "$5.00",
      image: "https://via.placeholder.com/300x200?text=Latte",
      type: "Jumbo",
      inStock: true,
    },
    {
      id: 3,
      title: "Espresso",
      size: "Small",
      price: "$3.50",
      image: "https://via.placeholder.com/300x200?text=Espresso",
      type: "Std.",
      inStock: false,
    },
  ];

  const handleButtonClick = (itemId) => {
    console.log("Button clicked for item:", itemId);
    // Add your button click logic here
  };

  return (
    <div className="py-10">
      <div className="flex items-center gap-4 mb-8">
        <button
          type="button"
          className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
        >
          <span className="h-5 w-5 rounded-full border border-gray-400" aria-hidden />
          Add new item
        </button>
        <button
          type="button"
          className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
        >
          <span className="h-5 w-5 rounded-full border border-gray-400" aria-hidden />
          Delete item
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            title={item.title}
            size={item.size}
            price={item.price}
            image={item.image}
            type={item.type}
            inStock={item.inStock}
            onButtonClick={() => handleButtonClick(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
