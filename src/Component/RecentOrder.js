import React from 'react';

const RecentOrders = () => {
  const orders = [
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
    { customer: 'Jane Cooper', orderNo: '48965786', amount: '$305.62', status: 'Delivered' },
    { customer: 'Guy Hawkins', orderNo: '78985215', amount: '$45.88', status: 'Cancelled' },
    { customer: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'Pending' },
    { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered' },
    { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered' },
  ];

  return (
    <div className="my-3 p-3 bg-gray-800 text-white rounded-lg shadow-md ">
      <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Customer</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Order No.</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Amount</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {orders.map((order, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{order.customer}</td>
                <td className="px-4 py-2">{order.orderNo}</td>
                <td className="px-4 py-2">{order.amount}</td>
                <td className={`px-4 py-2 ${order.status === 'Cancelled' ? 'text-red-500' : order.status === 'Pending' ? 'text-yellow-500' : 'text-green-500'}`}>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
