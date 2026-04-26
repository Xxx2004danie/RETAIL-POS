export default function ProductModalForm({ onClose }) {
  return (
    <section className="fixed inset-0  flex items-center justify-center p-4">
      <section className="bg-gray-100 w-full max-w-md rounded-xl shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 text-xl"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4">Add product</h2>

        <form className="space-y-4">
          <input
            type="text"
            name="name of product"
            placeholder="product name"
            className="w-full bg-white border border-gray-200  rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="text"
            name="price"
            placeholder="price"
            className="w-full bg-white border border-gray-200  rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="text"
            name="quantity"
            placeholder="quantity"
            className="w-full bg-white border border-gray-200  rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <select
            name="role"
            className="w-full   border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="">Select category</option>
            <option value="Admin">beverage</option>
            <option value="User">electronics</option>
            <option value="Manager">snack</option>
            <option value="Manager">cosmetics</option>
            <option value="Manager">meat</option>
          </select>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            save product
          </button>
        </form>
      </section>
    </section>
  );
}
