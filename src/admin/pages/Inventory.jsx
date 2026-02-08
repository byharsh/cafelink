import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { MenuItem } from "../components";

export const Inventory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  const createMenu = (menu) => ({
    id: uuidv4(),
    title: menu.title,
    size: menu.size,
    price: menu.price,
    // image: "https://via.placeholder.com/300x200?text=Cappuccino",
    portion: menu.portion,
    ingridients: menu.ingredients,
    inStock: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(e);
  };

  const addItem = (data) => {
    setMenuItems((prev) => [createMenu(data), ...prev]);
  };

  const deleteItem = (deleteId) => {
    setMenuItems((prev) => prev.filter((menuItem) => menuItem.id !== deleteId));
    console.log("deleteid is:", deleteId);
  };

  const editItem = (editItemId, data) => {
    setMenuItems((prev) =>
      prev.map((menuItem) =>
        menuItem.id === editItemId ? { ...data } : menuItem,
      ),
    );
  };
  // Sample data for menu items
  // const dummyMenuItems = [
  //   {
  //     id: 1,
  //     title: "Cappuccino",
  //     size: "Medium",
  //     price: "$4.50",
  //     image: "https://via.placeholder.com/300x200?text=Cappuccino",
  //     type: "Large",
  //     inStock: true,
  //   },
  // ];

  // const handleButtonClick = (itemId) => {
  //   console.log("Button clicked for item:", itemId);
  //   // Add your button click logic here
  // };

  return (
    <div className="py-10">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => setIsModalOpen(!isModalOpen)}
          type="button"
          className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
        >
          <span
            className="h-5 w-5 rounded-full border border-gray-400"
            aria-hidden
          />
          Add new item
        </button>
        <button
          type="button"
          className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
        >
          <span
            className="h-5 w-5 rounded-full border border-gray-400"
            aria-hidden
          />
          Delete item
        </button>
      </div>

      {isModalOpen && (
        <div className="is-overlay">
          <div className="is-container bg-red-400">
            <form action="submit" onSubmit={handleSubmit}>
              <div className="is-content">
                <div>
                  <input type="image" />
                </div>
                <div>
                  <label htmlFor="">
                    <span>Item Name</span>
                    <input type="text" placeholder="Pizza or salad" />
                  </label>

                  <label htmlFor="">
                    <span>Size</span>
                    <input type="text" placeholder="small, medium, std" />
                  </label>
                </div>
                <div>
                  <label htmlFor="">
                    <span>Item Ingridents</span>
                    <input type="text" placeholder="somethig like potato?" />
                  </label>
                </div>
                <div>
                  <label htmlFor="">
                    <span>Portion</span>
                    <input
                      type="text"
                      placeholder="size of something or weight"
                    />
                  </label>
                  <label htmlFor="">
                    <span>Price</span>
                    <input type="text" placeholder="price in rupees" />
                  </label>
                </div>
                <button onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}

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
            onEdit={() => editItem(item.id)}
            onDelete={() => deleteItem(item.id)}
            onButtonClick={() => deleteItem(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
