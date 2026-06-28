import { useState, useEffect } from "react";
import { createUser } from "../service/userApi";
import { globalUrl } from "../constant/port";
export default function UserModalForm({ onChangeModal }) {
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);
  let [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    role: "",
  });

  // ONCHANGE INPUT VALUES
  function onAddProperties(e) {
    e.preventDefault();
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  }

  // STORE NEW USER IN THE SERVER(DATABASE)

  async function saveUser(e) {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      await createUser(`${globalUrl}/users`, userDetails);

      // success → close modal
      onChangeModal();

      // optional: reset form
      setUserDetails({
        name: "",
        email: "",
        phoneNumber: "",
        role: "",
      });
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="fixed right-0 top-0 inset-0  flex items-center justify-center p-4">
      <section className="bg-gray-100 w-full max-w-md rounded-xl shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onChangeModal}
          className="absolute top-3 right-4 text-gray-500 text-xl"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4">Add User</h2>

        <form className="space-y-4" onSubmit={saveUser}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={userDetails.name}
            onChange={onAddProperties}
            className="w-full bg-white border border-gray-200  rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="text"
            name="email"
            placeholder="email"
            value={userDetails.email}
            onChange={onAddProperties}
            className="w-full bg-white border border-gray-200  rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="text"
            name="phoneNumber"
            placeholder="phoneNumberr"
            value={userDetails.phoneNumber}
            onChange={onAddProperties}
            className="w-full bg-white border border-gray-200  rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <select
            name="role"
            placeholder="role"
            value={userDetails.role}
            onChange={onAddProperties}
            className="w-full   border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="">Select Role</option>
            <option value="Admin">admin</option>
            <option value="User">cashier</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            {loading ? "Saving..." : "Save User"}
          </button>
        </form>
      </section>
    </section>
  );
}
