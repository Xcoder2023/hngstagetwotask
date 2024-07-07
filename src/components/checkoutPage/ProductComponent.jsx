import React, { useState } from 'react';
import Counter from './Counter'; 
import { deleteicon, minus, plus } from '../../assets/Index';
const ProductComponent = ({ product, onDelete }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const [basePrice, setBasePrice] = useState(product.price);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    setBasePrice(prevPrice => prevPrice + product.pricePerUnit);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
      setBasePrice(prevPrice => prevPrice - product.pricePerUnit);
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(); 
    }
  };

  return (
    <div className="flex justify-between items-center border rounded-xl p-3">
      <div className="flex gap-5">
        <div className="bg-[#e9f6e2] flex p-5 rounded-lg items-center w-[77px]">
          <img src={product.image} alt="" width={product.imageWidth} />
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-semibold md:text-[18px] text-[12px]">
            {product.name}
          </p>
          <p className="text-[12px] text-[#b5b3b3]">
            {product.price} {product.availability}
          </p>
          <div className="flex items-center gap-2">
            <img src={minus} alt="" onClick={decrementQuantity} />
            <p>{quantity}</p>
            <img src={plus} alt="" onClick={incrementQuantity} />
            <p className="md:text-[unset] text-[12.67px]">x ₦{basePrice}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-bold md:text-[24px] text-[14px]">
          ₦{basePrice}
        </p>
        <div className="flex justify-end">
          <img src={deleteicon} title='click to remove this item from your cart' alt="Delete" onClick={handleDelete} style={{ cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
