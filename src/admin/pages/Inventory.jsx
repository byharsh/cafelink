import { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";

import { AutoConfirmModal, ConfirmationModal, MenuItem } from "../components";

export const Inventory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [Openhai, setOpenhai] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    addItem(data);
    setIsModalOpen(false);
    reset();
  };

  const createMenu = (data) => ({
    id: uuidv4(),
    title: data.title,
    size: data.size,
    price: data.price,
    portion: data.portion,
    ingridients: data.ingredients,
    inStock: true,
  });

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
          <div className="is-container ">
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div className="is-content flex flex-col gap-4">
                {/* upload Image */}
                <div className="bg-gray-100 mx-auto ">
                  <input type="image" />
                </div>
                <div className="flex gap-4">
                  {/* Item Name */}
                  <label
                    htmlFor="item-name"
                    className="flex flex-col flex-1 gap-1"
                  >
                    <span>Item Name:</span>
                    <input
                      {...register("itemName", {
                        required: "Item name is required",
                        minLength: {
                          value: 2,
                          message: "Item name should be at least 2 characters",
                        },
                        pattern: {
                          value: /^[a-zA-Z0-9\s]+$/,
                          message:
                            "Item name should not contain special characters",
                        },
                      })}
                      className={`p-1 placeholder-gray-400 border ${
                        errors.itemName
                          ? "border-red-500 outline  outline-red-500"
                          : "border-gray-300 focus:outline-1 focus:outline-red-700"
                      } rounded`}
                      placeholder="Pizza or salad"
                      id="item-name"
                    />
                    {errors.itemName && (
                      <span className="text-red-500 text-xs">
                        {errors.itemName.message}
                      </span>
                    )}
                  </label>
                  {/* Item Size */}
                  <label
                    htmlFor="item-size"
                    className="flex flex-col flex-1 gap-1"
                  >
                    <span>Size:</span>
                    <input
                      {...register("size", {
                        required: "Size is required",
                        minLength: {
                          value: 2,
                          message: "Size should be at least 2 characters",
                        },
                      })}
                      className={`p-1 placeholder-gray-400 border ${
                        errors.size
                          ? "border-red-500 outline  outline-red-500"
                          : "border-gray-300 focus:outline focus:outline-red-700"
                      } rounded`}
                      placeholder="small, medium, std"
                      id="item-size"
                    />
                    {errors.size && (
                      <span className="text-red-500 text-xs">
                        {errors.size.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* Item Ingredients */}
                <div>
                  <label
                    htmlFor="item-ingredients"
                    className="flex flex-col gap-1"
                  >
                    <span>Item Ingredients:</span>
                    <input
                      {...register("itemIngridients", {
                        required: "Ingredients are required",
                        minLength: {
                          value: 3,
                          message:
                            "Ingredients should be at least 3 characters",
                        },
                      })}
                      className={`p-1 placeholder-gray-400 border ${
                        errors.itemIngridients
                          ? "border-red-500 outline  outline-red-500"
                          : "border-gray-300 focus:outline focus:outline-red-700"
                      } rounded`}
                      placeholder="something like potato?"
                      id="item-ingredients"
                    />
                    {errors.itemIngridients && (
                      <span className="text-red-500 text-xs">
                        {errors.itemIngridients.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="flex gap-10">
                  {/* Item Portion */}
                  <label
                    htmlFor="item-portion"
                    className="flex flex-col flex-1 gap-1"
                  >
                    <span>Portion:</span>
                    <input
                      {...register("Portion", {
                        required: "Portion is required",
                        pattern: {
                          value: /^[0-9]+(\s*[a-zA-Z]+)?$/,
                          message:
                            "Please enter a valid portion (e.g. 100g, 2 pieces, 250ml)",
                        },
                      })}
                      className={`p-1 placeholder-gray-400 border ${
                        errors.Portion
                          ? "border-red-500 outline outline-red-500"
                          : "border-gray-300 focus:outline focus:outline-red-700"
                      } rounded`}
                      placeholder="size of something or weight"
                      id="item-portion"
                    />
                    {errors.Portion && (
                      <span className="text-red-500 text-xs">
                        {errors.Portion.message}
                      </span>
                    )}
                  </label>
                  {/* Item Price */}
                  <label
                    htmlFor="item-price"
                    className="flex flex-col flex-1 gap-1"
                  >
                    <span>Price:</span>
                    <div className="relative flex items-center">
                      <span className="absolute left-0 h-full flex items-center bg-white px-1.5 bg-red-400 border border-gray-300 rounded-l-sm">
                        &#8377;
                      </span>
                      <input
                        type="number"
                        {...register("price", {
                          required: "Price is required",
                          valueAsNumber: true,
                          min: {
                            value: 1,
                            message: "Price must be at least 1",
                          },
                          max: {
                            value: 100000,
                            message: "Price seems too high",
                          },
                          validate: (v) =>
                            (!isNaN(v) && v > 0) ||
                            "Enter a valid number greater than 0",
                        })}
                        className={`pl-7 p-1 placeholder-gray-400 border ${
                          errors.price
                            ? "border-red-500 outline outline-red-500"
                            : "border-gray-300 focus:outline focus:outline-red-700"
                        } rounded`}
                        placeholder="price in rupees"
                        id="item-price"
                        style={{
                          borderTopLeftRadius: 4,
                          borderBottomLeftRadius: 4,
                        }}
                      />
                    </div>
                    {errors.price && (
                      <span className="text-red-500 text-xs">
                        {errors.price.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* Form buttons */}
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

      <button onClick={() => setOpenhai(!Openhai)} className="bg-gray-400 text-white px-4 py-2 rounded-md cursor-pointer" >Modal</button>
      
      <AutoConfirmModal isOpen={Openhai} onClose={() => setOpenhai(false)} onConfirm={() => setOpenhai(false)} message="Are you sure you want to delete this item?" />
      
      
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
