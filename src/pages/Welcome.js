import React from 'react';

const Welcome = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome</h1>
        <p className="mb-6">This is where your contacts will live. Click the button below to add a new contact.</p>
        <button className="bg-blue-500 text-white p-2 rounded">Add your first contact</button>
      </div>
    </div>
  );
};

export default Welcome;