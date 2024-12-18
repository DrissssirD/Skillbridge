import React from 'react';
import { Link } from '@inertiajs/react';

// Define symbols using Unicode characters
const ICONS = {
    DASHBOARD: '⌂',    // House symbol
    MESSAGES: '✉',     // Envelope
    JOBS: '📋',        // Clipboard
    SEARCH: '🔍',      // Magnifying glass
    PROFILE: '👤',     // User silhouette
    POST: '✚',         // Plus symbol
    APPLICATIONS: '📄', // Document
    SETTINGS: '⚙️',    // Gear
    HELP: '❓',        // Question mark
    COMPANY: '🏢'      // Building
};

export default function Sidebar({ userType }) {
    const mainMenuItems = userType === 'company' 
        ? [
            { label: 'Dashboard', route: 'company.dashboard', icon: ICONS.DASHBOARD },
            { label: 'Post Jobs', route: 'jobs.create', icon: ICONS.POST },
            { label: 'Applications', route: 'applications.index', icon: ICONS.APPLICATIONS },
            { label: 'Messages', route: 'messages.index', icon: ICONS.MESSAGES },
            { label: 'Company Profile', route: 'profile.edit', icon: ICONS.COMPANY }
        ]
        : [
            { label: 'Dashboard', route: 'jobseeker.dashboard', icon: ICONS.DASHBOARD },
            { label: 'Find Jobs', route: 'jobs.index', icon: ICONS.SEARCH },
            { label: 'My Applications', route: 'applications.index', icon: ICONS.APPLICATIONS },
            { label: 'Messages', route: 'messages.index', icon: ICONS.MESSAGES },
            { label: 'Profile', route: 'profile.edit', icon: ICONS.PROFILE }
        ];

    const bottomMenuItems = [
        { label: 'Settings', route: 'profile.edit', icon: ICONS.SETTINGS },
        { label: 'Help Center', route: 'help.center', icon: ICONS.HELP }
    ];

    return (
        <div className="sm:w-[272px] bg-[#F9FAFC] h-screen">
            <div className="flex flex-row gap-2 pt-8 px-6">
                <h1 className="text-xl font-bold text-[#4640DE]">SkillBridge</h1>
            </div>
            
            <div className="mt-6">
                <nav>
                    <ul className="space-y-2">
                        {mainMenuItems.map((item) => {
                            try {
                                route(item.route);
                                return (
                                    <li key={item.route} className="flex flex-row h-[48px] gap-3">
                                        <div className={`${
                                            route().current(item.route)
                                                ? "bg-[#4640DE] w-1 h-full mr-2"
                                                : "bg-transparent w-1 h-full"
                                        }`}></div>
                                        
                                        <Link
                                            href={route(item.route)}
                                            className={`p-2 rounded-lg transition-all duration-300 flex items-center gap-3 w-[240px] ${
                                                route().current(item.route)
                                                    ? "bg-[#CCCCF5] text-[#4640DE] font-semibold"
                                                    : "text-[#333] hover:bg-[#CCCCF5] hover:text-[#4640DE]"
                                            }`}
                                        >
                                            <span className={`text-xl ${
                                                route().current(item.route) 
                                                    ? "text-[#4640DE]" 
                                                    : "text-[#7C8493]"
                                            }`}>
                                                {item.icon}
                                            </span>
                                            <span className="text-base font-medium">{item.label}</span>
                                        </Link>
                                    </li>
                                );
                            } catch {
                                return (
                                    <li key={item.label} className="flex flex-row h-[48px] gap-3">
                                        <div className="bg-transparent w-1 h-full mr-2"></div>
                                        <span className="p-2 rounded-lg flex items-center gap-3 w-[240px] text-gray-400 cursor-not-allowed">
                                            <span className="text-xl">{item.icon}</span>
                                            <span className="text-base font-medium">{item.label} (Coming Soon)</span>
                                        </span>
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </nav>
            </div>

            <hr className="w-full border-[#CCCCF5] border-1 my-8" />

            <div className="mt-6">
                <nav>
                    <ul className="space-y-2">
                        {bottomMenuItems.map((item) => (
                            <li key={item.label} className="flex flex-row h-[48px] gap-3">
                                <div className="bg-transparent w-1 h-full mr-2"></div>
                                <span className="p-2 rounded-lg flex items-center gap-3 w-[240px] text-gray-400 cursor-not-allowed">
                                    <span className="text-xl">{item.icon}</span>
                                    <span className="text-base font-medium">{item.label} (Coming Soon)</span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}