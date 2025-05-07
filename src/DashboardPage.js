import React from 'react';

function DashboardPage({ onLogout }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-5 space-y-4">
        <h2 className="text-xl font-bold mb-6">Menu</h2>
        <a href="#" className="block hover:bg-gray-700 p-2 rounded">Contact Us</a>
        <a href="#" className="block hover:bg-gray-700 p-2 rounded">About Us</a>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="flex justify-between items-center bg-gray-200 p-4">
          <h1 className="text-xl font-bold">Welcome to Dashboard Page</h1>
          <button
            onClick={onLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <p>This is the main dashboard content area.</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
