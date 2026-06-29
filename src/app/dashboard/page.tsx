import React from "react";
import {
  Search,
  Bell,
  Heart,
  ShoppingBag,
  FileText,
  LayoutDashboard,
  Settings,
  LogOut,
} from "lucide-react";
import Image from "next/image";

const UserDashboard = () => {
  return (
    // Main container always flex-row to keep sidebar on the left
    <div className="min-h-screen bg-[#050b0b] text-white flex font-sans overflow-hidden ">
      {/* --- Sidebar (Left) - Always Visible --- */}
      {/* shrink-0 use kora hoyeche jate mobile e sidebar choto na hoye jay */}
      <aside className="w-20 md:w-24 shrink-0 border-r border-teal-900/30 flex flex-col items-center py-6 md:py-8 justify-between bg-[#081212] z-10">
        <div className="flex flex-col items-center gap-10">
          {/* Logo Section */}
          <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-400 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(45,212,191,0.5)]">
            <span className="text-black font-bold text-lg md:text-xl">S</span>
          </div>

          {/* Nav Icons */}
          <nav className="flex flex-col gap-6 md:gap-8 w-full items-center">
            <button
              title="Dashboard"
              className="p-2 md:p-3 bg-teal-400/10 rounded-xl text-teal-400 border border-teal-400/50 shadow-[0_0_10px_rgba(45,212,191,0.2)]"
            >
              <LayoutDashboard size={22} className="md:w-6 md:h-6" />
            </button>
            <button
              title="Wishlist"
              className="p-2 md:p-3 text-gray-500 hover:text-teal-400 transition-all"
            >
              <Heart size={22} className="md:w-6 md:h-6" />
            </button>
            <button
              title="Order History"
              className="p-2 md:p-3 text-gray-500 hover:text-teal-400 transition-all"
            >
              <ShoppingBag size={22} className="md:w-6 md:h-6" />
            </button>
            <button
              title="Invoices"
              className="p-2 md:p-3 text-gray-500 hover:text-teal-400 transition-all"
            >
              <FileText size={22} className="md:w-6 md:h-6" />
            </button>
          </nav>
        </div>

        <div className="flex flex-col gap-6">
          <Settings className="text-gray-500 cursor-pointer hover:text-white size-5 md:size-6" />
          <LogOut className="text-gray-500 cursor-pointer hover:text-red-400 size-5 md:size-6" />
        </div>
      </aside>

      {/* --- Main Content Area --- */}
      {/* min-w-0 ensures content doesn't break out of the flex layout on small screens */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        {/* Top Navbar */}
        <header className="py-4 md:py-0 md:h-20 px-4 md:px-8 flex flex-wrap md:flex-nowrap justify-between items-center border-b border-teal-900/20 bg-[#081212]/50 backdrop-blur-md gap-4 sticky top-0 z-40">
          {/* Search Bar */}
          <div className="relative w-full md:w-1/3 order-last md:order-none">
            <Search
              className="absolute left-3 top-2.5 text-gray-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full bg-[#111d1d] border border-teal-900/30 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-teal-400/50 transition-all text-sm"
            />
          </div>

          {/* User Profile & Notifications */}
          <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto justify-end">
            <div className="relative cursor-pointer hidden sm:block">
              <Bell className="text-gray-400" size={22} />
              <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full"></span>
            </div>

            <div className="flex items-center gap-3 border-l-0 sm:border-l border-teal-900/30 pl-0 sm:pl-6">
              <div className="text-right">
                <p className="text-sm font-medium"></p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                  Premium Client
                </p>
              </div>
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-teal-400 overflow-hidden shadow-[0_0_10px_rgba(45,212,191,0.3)] shrink-0">
                <Image
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Shakil"
                  alt="User"
                  width={150}
                  height={150}
                  loading="lazy"
                  unoptimized
                  className="rounded-full border-2 border-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.5)] bg-black"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content Widgets */}
        <div className="p-4 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Stat Cards */}
          {[
            { label: "Wishlist Items", val: "12", color: "teal" },
            { label: "Total Orders", val: "08", color: "blue" },
            { label: "Pending Invoices", val: "01", color: "orange" },
            { label: "Account Health", val: "99.9%", color: "teal" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#0b1a1a] border border-teal-900/30 p-5 md:p-6 rounded-2xl hover:border-teal-400/40 transition-all group"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-teal-400 group-hover:drop-shadow-[0_0_8px_rgba(45,212,191,0.6)]">
                {item.val}
              </h2>
              <p className="text-gray-500 text-xs md:text-sm mt-1">
                {item.label}
              </p>
            </div>
          ))}

          {/* Large Visual Placeholder */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-[#0b1a1a] border border-teal-900/20 rounded-3xl p-6 md:p-8 relative overflow-hidden h-64 md:h-80">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-200">
                Active Services Analysis
              </h3>
              <div className="flex items-end gap-2 md:gap-4 h-32 md:h-48">
                {[40, 70, 45, 90, 65, 80].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="flex-1 bg-gradient-to-t from-teal-500/20 to-teal-400 rounded-t-md shadow-[0_0_15px_rgba(45,212,191,0.2)]"
                  ></div>
                ))}
              </div>
            </div>
            {/* Background glow effect */}
            <div className="absolute -bottom-20 -right-20 w-48 h-48 md:w-64 md:h-64 bg-teal-500/10 blur-[100px] rounded-full"></div>
          </div>

          {/* Usage Score */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 bg-[#0b1a1a] border border-teal-900/20 rounded-3xl p-6 flex flex-col justify-center items-center h-64 md:h-auto">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-8 border-teal-900/30 border-t-teal-400 flex items-center justify-center relative">
              <span className="text-2xl md:text-3xl font-bold">86</span>
              <p className="absolute -bottom-6 md:-bottom-8 text-[10px] md:text-xs text-gray-500 uppercase tracking-wider text-center">
                Usage Score
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
