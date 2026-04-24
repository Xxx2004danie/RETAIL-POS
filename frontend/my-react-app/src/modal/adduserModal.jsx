export default function UserModalForm({ onChangeModal }) {
  return (
    <section className="fixed right-0 top-0 inset-0  flex items-center justify-center p-4">
      <section className="bg-gray-100 w-full max-w-md rounded-xl shadow-lg p-6 relative">
        {/* Close Button */}
        <button onClick={onChangeModal} className="absolute top-3 right-4 text-gray-500 text-xl">
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4">Add User</h2>

        <form className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full bg-white border border-gray-200  rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="text"
            name="name"
            placeholder="email"
            className="w-full bg-white border border-gray-200  rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="text"
            name="name"
            placeholder="phone number"
            className="w-full bg-white border border-gray-200  rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <select
            name="role"
            className="w-full   border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Manager">Manager</option>
          </select>

          <input
            type="text"
            name="password"
            placeholder="password"
            className="w-full bg-white border border-gray-200  rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="text"
            name="name"
            placeholder="confirm password"
            className="w-full bg-white border border-gray-200  rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            onClick={onChangeModal}
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Save User
          </button>
        </form>
      </section>
    </section>
  );
}