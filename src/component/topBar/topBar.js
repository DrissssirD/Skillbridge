import React, { useState } from "react";
import NotificationIcon from "./notificationIcon.svg"; // Replace with your SVG path
import { useNavigate } from "react-router-dom";

export function TopBar({ pageName }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = (e) => {
    if (e.target.id === "modal-overlay") {
      setIsModalOpen(false);
    }
  };

  const notifications = [
    {
      id: 1,
      sender: "Jan Mayer",
      message: "invited you to interview with Nomad",
      tag: "New",
      time: "12 mins ago",
    },
    {
      id: 2,
      sender: "Jana Alicia",
      message: "from Udacity updated your job application status",
      tag: "Shortlisted",
      time: "3 days ago",
    },
    {
      id: 3,
      sender: "Ally Wales",
      message: "from Digital Ocean sent you an interview invitation",
      details: {
        title: "Interview - Jake Gyll",
        role: "Social Media Manager Role",
        date: "Mon, 20 July 2021",
        time: "12 PM – 12:30 PM",
        email: "jakegyll@email.com",
      },
      time: "14 July 2021 • 3:26 PM",
    },
  ];

  return (
    <div className="w-full sm:h-28 flex justify-between sm:p-8 items-center border-b-2">
      <h1 className="text-[#25324B] text-4xl font-bold">{pageName}</h1>
      <div className="flex flex-row sm:gap-8 items-center">
        <button onClick={() => handleNavigation("/")} className="border sm:w-[213px] sm:h-[50px] text-center">
          <h4 className="text-[#4640DE] text-xl font-bold">Back to homepage</h4>
        </button>
        <img
          src={NotificationIcon}
          alt="Notification Icon"
          className="cursor-pointer"
          onClick={toggleModal}
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="modal-overlay"
          className="fixed inset-0 z-50 "
          onClick={closeModal}
        >
          <div className="bg-white rounded-lg shadow-lg w-96 max-h-[80vh] overflow-y-auto right-8 top-28 absolute">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">Notifications</h2>
              <button
                className="text-sm text-blue-600 hover:underline"
                onClick={() => setIsModalOpen(false)}
              >
                Mark all as read
              </button>
            </div>
            <div className="p-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="mb-4 border-b pb-4 last:border-b-0"
                >
                  <div className="flex items-center mb-2">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="Avatar"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="text-sm text-gray-700">
                        <span className="font-bold">{notification.sender}</span>{" "}
                        {notification.message}
                      </p>
                      {notification.tag && (
                        <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                          {notification.tag}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                  {notification.details && (
                    <div className="mt-3 bg-gray-100 p-3 rounded-lg">
                      <p className="font-bold text-sm">
                        {notification.details.title}
                      </p>
                      <p className="text-xs text-gray-600">
                        {notification.details.role}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        Date: {notification.details.date}
                      </p>
                      <p className="text-xs text-gray-600">
                        Time: {notification.details.time}
                      </p>
                      <p className="text-xs text-gray-600">
                        Contact: {notification.details.email}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
