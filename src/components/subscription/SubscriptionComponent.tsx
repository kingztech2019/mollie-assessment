import React from "react";

interface PaymentMethod {
  icon: string;
  amount: number;
  status?: string;
}

const SubscriptionComponent: React.FC = () => {
  const paymentMethods: PaymentMethod[] = [
    { icon: "mastercard", amount: 36.0 },
    { icon: "mastercard", amount: 48.0 },
    { icon: "id", amount: 32.0, status: "Paid" },
    { icon: "visa", amount: 8.0, status: "Open" },
    { icon: "visa", amount: 16.0, status: "Paid" },
  ];

  return (
    <div className="px-3 bg-white rounded-lg shadow-lg">
      <h1 className="text-xl font-black text-black pt-5">
        Simplify subscription payments and billing
      </h1>
      <p className="text-gray-500 mb-4">
        Create flexible, scalable subscription plans and streamline billing.
      </p>

      <button className="bg-gray-200 text-sm font-bold text-black py-2 px-4 rounded-full mb-6">
        Explore recurring payments
      </button>

      <div className="relative mb-4">
        <div className="absolute -top-10 w-[45%] right-4 bg-white shadow-md rounded-lg p-2 z-10">
          <div className="flex flex-col gap-3 p-2">
            <div className="text-blue-600 font-semibold">✓ Every week</div>
            <div className="text-gray-600 px-5">Every 2 weeks</div>
            <div className="text-gray-600 px-5">Every month</div>
            <div className="text-gray-600 px-5">Every year</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center">
      
        <div className="flex-1 w-full sm:w-auto sm:ml-20">
          <table className="w-full border border-gray-200 rounded-xl ">
            <thead>
              <tr className="text-left">
                <th className="py-2 text-black text-xs border-b border-gray-200">Method</th>
                <th className="py-2 text-black text-xs border-b border-gray-200">Amount</th>
                <th className="py-2 border-b border-gray-200"></th>
              </tr>
            </thead>
            <tbody>
              {paymentMethods.map((method, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                  <td className="py-2 border border-gray-200">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center text-white ${
                        method.icon === "mastercard"
                          ? "bg-black"
                          : method.icon === "id"
                          ? "bg-pink-500"
                          : "bg-blue-600"
                      }`}
                    >
                      {method.icon === "mastercard" && "••"}
                      {method.icon === "id" && "ID"}
                      {method.icon === "visa" && "VISA"}
                    </div>
                  </td>
                  <td className="py-2 text-black text-xs border border-gray-200">
                    €{method.amount.toFixed(2)}
                  </td>
                  <td className="py-2 border border-gray-200">
                    {method.status && (
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          method.status === "Paid"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {method.status}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionComponent;
