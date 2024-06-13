import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { Tooltip } from "@material-tailwind/react";
import { removeFromCart } from "../../features/slices/CartSlice";
function Cart({ openModal, setOpen }) {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div>
      {cart.length > 0 ? (
        <>
          <Dialog
            className="border-0 outline-0"
            open={openModal}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>Items in your cart</DialogHeader>
            <DialogBody
              divider
              className="flex flex-col justify-start items-start max-h-[80vh] overflow-y-auto p-4"
            >
              {cart.map((item, index) => {
                return (
                  <div key={index} className="w-full">
                    <div className="grid grid-cols-2 py-4">
                      <div>
                        <img className="h-[125px] rounded-md" src={item.img} alt={item.name} />
                      </div>
                      <div className="pl-4">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.description}</p>
                        <p className="text-sm font-semibold">${item.price}</p>
                        <p className="text-sm font-semibold">Color: {item.color}</p>
                        <p className="text-sm font-semibold">Size: {item.size}</p>
                      </div>
                    </div>
                    <div className="pt-4">
                          <Tooltip
                            content="Remove from the Cart"
                            placement="bottom"
                          >
                            <Button
                              onClick={() => dispatch(removeFromCart(item))}
                              size="sm"
                              color="red"
                              ripple={true}
                              variant="filled"
                            >
                              Remove
                            </Button>
                          </Tooltip>
                        </div>
                  </div>
                );
              })}
            </DialogBody>
            <DialogFooter className="flex justify-between items-center w-full p-4">
              <div className="text-lg font-semibold">Total Amount: ${totalPrice}</div>
              
            </DialogFooter>
          </Dialog>
        </>
      ) : (
        <>
          <Dialog
            className="border-0 outline-0"
            open={openModal}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>Items in your cart</DialogHeader>
            <DialogBody>
              <h1 className="text-2xl font-semibold">Your bag is empty booo!!!!</h1>
              <p>Karlo thodise shopping</p>
            </DialogBody>
          </Dialog>
        </>
      )}
    </div>
  );
}

export default Cart;
