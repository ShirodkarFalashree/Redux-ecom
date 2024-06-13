import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Tooltip, Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slices/CartSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.products.singleProduct);
  const initialSize = product[0]?.size ? product[0].size[0] : "";
  const initialColor = product[0]?.color ? product[0].color[0] : "";

  const [size, setSize] = useState(initialSize);
  const [color, setColor] = useState(initialColor);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const selectedItem = product.find((item) => item.id === id);
    if (selectedItem) {
      dispatch(
        addToCart({
          id: selectedItem.id,
          name: selectedItem.name,
          img: selectedItem.img,
          text: selectedItem.text,
          size: size,
          color: color,
          price: selectedItem.price,
          amount: 1,
          totalPrice: selectedItem.price,
        })
      );
    }
  };

  return (
    <div>
      {product.map((item, index) => {
        if (item.id === id) {
          return (
            <div key={index} className="flex justify-center items-center py-10">
              <div className="pl-44 grow-[2]">
                <img
                  className="h-[850px] rounded-lg"
                  src={item.img}
                  alt={item.name}
                />
              </div>
              <div className="grow-[3]">
                <div className="max-w-lg">
                  <h5 className="text-2xl font-inter font-bold tracking-normal leading-none pb-4">
                    {item.name}
                  </h5>
                  <p className="text-orange-700 text-xl font-inter font-bold tracking-normal leading-none pb-4">
                    15% OFF
                  </p>
                  <p className="text-gray-600 text-xl font-inter font-bold tracking-normal leading-none pb-4">
                    {item.text}
                  </p>
                  <div className="pb-4">
                    {item.size && (
                      <div>
                        <label
                          htmlFor="size"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Pick a size
                        </label>
                        <select
                          id="size"
                          name="size"
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {item.size.map((sizeItem, sizeIndex) => (
                            <option key={sizeIndex} value={sizeItem}>
                              {sizeItem}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>

                  <div className="pb-4">
                    {item.color && (
                      <div>
                        <label
                          htmlFor="color"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Pick a color
                        </label>
                        <select
                          id="color"
                          name="color"
                          value={color}
                          onChange={(e) => setColor(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {item.color.map((colorItem, colorIndex) => (
                            <option key={colorIndex} value={colorItem}>
                              {colorItem}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                  <Tooltip content="Add to Cart" placement="bottom">
                    <Button
                      color="gray"
                      size="lg"
                      variant="outlined"
                      ripple={true}
                      onClick={handleAddToCart}
                    >
                      Add to Cart
                    </Button>
                  </Tooltip>
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default SingleProduct;
