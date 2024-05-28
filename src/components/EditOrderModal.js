import React, { useState } from 'react';

const EditOrderModal = ({ order, onClose, onSave }) => {
  const [orderName, setOrderName] = useState(order.name);

  const handleSubmit = () => {
    const updatedOrder = { ...order, name: orderName };
    onSave(updatedOrder);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Sale Order</h2>
        <input
          type="text"
          value={orderName}
          onChange={(e) => setOrderName(e.target.value)}
        />
        <button onClick={handleSubmit}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EditOrderModal;
