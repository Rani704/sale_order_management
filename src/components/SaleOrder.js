import React, { useState } from 'react';
import SaleOrderModal from './SaleOrderModal';
import EditOrderModal from './EditOrderModal';

const SaleOrders = () => {
  const [activeOrders, setActiveOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editOrder, setEditOrder] = useState(null);

  return (
    <div className="sale-orders">
      <button onClick={() => setShowCreateModal(true)}>+ Sale Order</button>
      <div className="tabs">
        <button>Active Sale Orders</button>
        <button>Completed Sale Orders</button>
      </div>
      <div className="orders-list">
        {/* Active Sale Orders */}
        <div>
          {activeOrders.map((order) => (
            <div key={order.id}>
              <span>{order.name}</span>
              <button onClick={() => setEditOrder(order)}>...</button>
            </div>
          ))}
        </div>
        {/* Completed Sale Orders */}
        <div>
          {completedOrders.map((order) => (
            <div key={order.id}>
              <span>{order.name}</span>
              <button onClick={() => setEditOrder(order)}>...</button>
            </div>
          ))}
        </div>
      </div>
      {showCreateModal && (
        <SaleOrderModal
          onClose={() => setShowCreateModal(false)}
          onSave={(order) => setActiveOrders([...activeOrders, order])}
        />
      )}
      {editOrder && (
        <EditOrderModal
          order={editOrder}
          onClose={() => setEditOrder(null)}
          onSave={(updatedOrder) =>
            setActiveOrders(
              activeOrders.map((order) =>
                order.id === updatedOrder.id ? updatedOrder : order
              )
            )
          }
        />
      )}
    </div>
  );
};

export default SaleOrders;
