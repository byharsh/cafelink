import { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";

import { MenuItem } from "../components";

export const Inventory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  const { handleSubmit, register, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    addItem(data);
    setIsModalOpen(false);
    reset();
  };

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

  const handleTheSubmit = (e) => {
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

      {/* <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-gray-500 border rounded-sm"
      >
        <input
          {...register("itemName", { required: true })}
          placeholder="Your Item Name🙄"
        />
        <button
          type="submit"
          className="bg-slate-300 border border-slate-400 drop-shadow-xs rounded-md px-4 py-2 text-red-600 cursor-pointer"
        >
          Submit
        </button>
      </form> */}

      {/* ------ */}
      {isModalOpen && (
        <div className="is-overlay">
          <div className="is-container ">
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div className="is-content flex flex-col gap-4">
                <div className="bg-gray-100 mx-auto ">
                  <input type="image" />
                </div>
                <div className="flex gap-4">
                  <label
                    htmlFor="item-name"
                    className="flex items-center gap-2"
                  >
                    <span>Item Name:</span>
                    <input
                      {...register("itemName", { required: true })}
                      className="p-1 placeholder-gray-400 focus:outline-1 focus:outline-red-700  "
                      placeholder="Pizza or salad"
                      id="item-name"
                    />
                  </label>

                  <label
                    htmlFor="item-size"
                    className="flex items-center gap-2"
                  >
                    <span>Size:</span>
                    <input
                      {...register("size", { required: true })}
                      className="p-1 placeholder-gray-400 focus:outline-1"
                      placeholder="small, medium, std"
                      id="item-size"
                    />
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="item-ingredients"
                    className="flex items-center gap-2"
                  >
                    <span>Item Ingridients:</span>
                    <input
                      {...register("itemIngridients", { required: true })}
                      className="p-1 placeholder-gray-400 focus:outline-1"
                      placeholder="somethig like potato?"
                      id="item-ingredients"
                    />
                  </label>
                </div>
                <div className="flex gap-10">
                  <label
                    htmlFor="item-portion"
                    className="flex items-center gap-2"
                  >
                    <span>Portion:</span>
                    <input
                      {...register("Portion", { required: true })}
                      className="p-1 placeholder-gray-400 focus:outline-1"
                      placeholder="size of something or weight"
                      id="item-portion"
                    />
                  </label>
                  <label
                    htmlFor="item-price"
                    className="flex items-center gap-2"
                  >
                    <span>Price:</span>
                    <input
                      {...register("price", {
                        required: true,
                        valueAsNumber: true,
                      })}
                      className="p-1 placeholder-gray-400 focus:outline-1"
                      placeholder="price in rupees"
                      id="item-price"
                    />
                  </label>
                </div>
                <div className="flex">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="bg-red-200 flex-1 cursor-pointer"
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-red-500 flex-1 cursor-pointer"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
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
