import React from 'react';

const AddContact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4">New Contact</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">E-mail</label>
            <input type="email" id="email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="phoneNumber">Phone Number</label>
            <input type="text" id="phoneNumber" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Gender</label>
            <div className="flex space-x-4">
              <label><input type="radio" name="gender" value="male" /> Male</label>
              <label><input type="radio" name="gender" value="female" /> Female</label>
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Add Contact</button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;