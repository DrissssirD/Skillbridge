import React, { useState } from "react";
import { TopBar } from "../../component/topBar/topBar";
import applicationIcon from "./applicationIcon.svg";
import interviewIcon from "./interviewedIcon.svg";
import { JobStatusPieChart } from "../../component/pieChart/PieChart";
import rightIcon from "./rigthIcon.svg";
import companyLogo from "./Company Logo.svg";

export function HomePage() {
  const UserInfo = [
    { name: "Jake", jobsApplied: 45, interview: 18, unsuitable: 20 },
  ]; // Example name from your database

  const today = `${new Date().getDate()} ${new Date().toLocaleDateString(
    "en-US",
    {
      month: "long",
    }
  )}`;

  // Function to calculate current week range
  function getCurrentWeekRange() {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 = Sunday, 6 = Saturday
    const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // Days to Monday

    // Get Monday of the current week
    const monday = new Date(now);
    monday.setDate(now.getDate() + diffToMonday);

    // Get Sunday of the current week
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    // Format the dates to "Month Day" (e.g., "July 19")
    const formatDate = (date) =>
      date.toLocaleDateString("en-US", { month: "long", day: "numeric" });

    return `${formatDate(monday)} - ${formatDate(sunday)}`;
  }

  // Get the current week range
  const weekRange = getCurrentWeekRange();

  return (
    <div>
      <TopBar pageName={"Dashboard"} />

      <div className="flex items-center w-full sm:h-32 justify-between px-8 ">
        <div>
          <h1 className="text-2xl text-black font-semibold">
            Good morning {UserInfo[0].name}
          </h1>
          <h4 className="text-base text-[#7C8493] font-medium">
            Here is what’s happening with your job search applications from{" "}
            {weekRange}
          </h4>
        </div>
      </div>

      <div className="flex px-8 gap-6">
        <div>
          <div className="flex pl-6 items-center w-[258px] h-40 relative  border overflow-hidden ">
            <div className="flex flex-col gap-3">
              <h1 className="text-black text-xl font-semibold">
                Total Jobs Applied
              </h1>
              <h2 className="text-black text-7xl font-semibold">
                {UserInfo[0].jobsApplied}
              </h2>
            </div>

            <img
              src={applicationIcon}
              alt="Application Icon"
              className="absolute bottom-[-20px] right-6 z-[-1]  object-contain w-[88px] h-[88px]"
            />
          </div>
          <div className="flex  items-center w-[258px] h-40 relative  border overflow-hidden mt-6">
            <div className="flex pl-6 flex-col gap-3">
              <h1 className="text-black text-xl font-semibold">Interviewed</h1>
              <h2 className="text-black text-7xl font-semibold">
                {UserInfo[0].interview}
              </h2>
            </div>

            <img
              src={interviewIcon}
              alt="interview Icon"
              className="absolute bottom-[-20px] right-6 z-[-1]  object-contain w-[88px] h-[88px]"
            />
          </div>
        </div>

        <div className="border flex flex-col gap-11  justify-center flex-1 items-center">
          <div>
            <h1 className="text-black text-xl font-semibold">
              Jobs Applied Status
            </h1>
          </div>

          <JobStatusPieChart
            interviewed={UserInfo[0].interview}
            unSuitableJobs={UserInfo[0].unsuitable}
          />
          <div className="flex gap-4 items-center">
            <h2 className="text-[#4640DE] font-semibold flex justify-center">
              View All Applications
            </h2>
            <img src={rightIcon} />
          </div>
        </div>
        <div className="flex-1 border mr-1 ">
          <div className="flex ">
            <h1 className="text-xl text-black font-semibold flex items-center h-[70px] pl-6 border-b w-full">
              Upcomming Interviews
            </h1>
          </div>
          <div>
            <h1 className="flex items-center h-[70px] pl-6 border-b">
              <strong>Today</strong>, {today}{" "}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex-1 border m-8">
        <div className="h-[80px] flex items-center border-b px-6">
          <h1 className="text-black text-xl font-semibold ">
            Recent Applications History
          </h1>
        </div>
        <div>
          <div>
            <div className="flex flex-1">
              <div>
                <img src={companyLogo} />
              </div>
              <div className="flex flex-col gap-1">
                <h1>Social Media Assistant</h1>
                <h3>Nomad · Paris, France · Full-Time </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
