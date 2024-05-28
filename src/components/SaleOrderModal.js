import React, { useState } from 'react';

const SaleOrderModal = ({ onClose, onSave }) => {
  const [orderName, setOrderName] = useState('');

  const handleSubmit = () => {
    const newOrder = { id: Date.now(), name: orderName };
    onSave(newOrder);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Create Sale Order</h2>
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

export default SaleOrderModal;
