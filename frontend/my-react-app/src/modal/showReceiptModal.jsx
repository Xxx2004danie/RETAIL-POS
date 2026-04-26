import { useContext } from "react";
import { ReceiptContext } from "../pages/SalesHistory/saleslist";

export default function ReceiptModal() {
  let { showReceipt, onShow, onClose } = useContext(ReceiptContext);
  return (
    <main className="  fixed right-0 top-0 inset-0 flex items-center justify-center p-4">
      <section className="bg-white w-full max-w-lg border border-gray-200 rounded-xl shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 text-xl"
        >
          &times;
        </button>

        {/* Header */}
        <article className="text-center mb-4">
          <h1 className="text-blue-700 font-extrabold  ">RetailPOS</h1>
          <p className="text-sm text-gray-500">Transaction Summary</p>
        </article>

        {/* Receipt Info */}
        <article className="text-sm space-y-1 mb-4">
          <p>
            <span className="font-medium">Receipt ID:</span> #123456
          </p>
          <p>
            <span className="font-medium">Date:</span> 24 Apr 2026
          </p>
          <p>
            <span className="font-medium">Customer:</span> John Doe
          </p>

          <p>
            <span className="font-medium">Cashier:</span> serah
          </p>
        </article>

        {/* Items */}
        <article className="border-t border-b py-3 mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Item</span>
            <span>Price</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Product A</span>
            <span>$20.00</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Product B</span>
            <span>$15.00</span>
          </div>
        </article>

        {/* Totals */}
        <section className="space-y-2 text-sm mb-4">
          <article className="flex justify-between">
            <span>Subtotal</span>
            <span>$35.00</span>
          </article>

          <article className="flex justify-between">
            <span>Tax</span>
            <span>$5.00</span>
          </article>

          <article className="flex justify-between font-semibold text-base">
            <span>Total</span>
            <span>$40.00</span>
          </article>
        </section>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500">
          Thank you for your purchase!
        </div>

        {/* Action Buttons */}
        <form className="mt-5 flex gap-3">
          <button className="w-full border border-blue-700 text-gray-700 font-bold py-2 rounded-lg">
            Print
          </button>
          <button className="w-full bg-blue-700 text-white py-2 rounded-lg">
            Download
          </button>
        </form>
      </section>
    </main>
  );
}
