/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";

interface IProp {
  value: number;
  setValue: (X: number) => void;
}
const QuantityInput: React.FC<IProp> = ({ value, setValue }) => {
  const [quantity, setQuantity] = useState(value);

  const increaseQTY = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQTY = () => {
    setQuantity((prev) => {
      if (prev > 1) {
        return prev - 1;
      } else return 1;
    });
  };

  const handleChange = (e: any) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };
  useEffect(() => {
    setValue(quantity);
  }, [quantity, setValue]);
  return (
    <div className="flex justify-start -mt-3 mb-6">
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={decreaseQTY}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          −
        </button>
        <input
          type="text"
          value={quantity}
          onChange={handleChange}
          className="w-16 text-center py-2 border-x border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        />
        <button
          onClick={increaseQTY}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantityInput;
