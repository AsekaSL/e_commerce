import { MdAddLocation, MdBusiness, MdCreditCard, MdFavorite, MdHome, MdLocationOn, MdLogout, MdPerson, MdSettings, MdVisibility } from "react-icons/md"
import Footer from "../../layouts/Footer"
import Header from "../../layouts/Header"
import { LuPackage2 } from "react-icons/lu"

const UserProfile = () => {
  return (
    <div className="bg-[#f6f7f8] dark:bg-[#101922] font-display text-[#111418] dark:text-white">
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <Header />
                <main className="flex flex-1 justify-center py-8 px-4 md:px-10 lg:px-20 xl:px-40">
                    <div className="layout-content-container flex flex-col md:flex-row gap-8 w-full max-w-7xl">
                    {/* <!-- Side Navigation Bar --> */}
                    <aside className="flex w-full md:w-64 flex-col shrink-0 gap-4">
                    <div className="flex h-fit flex-col justify-between bg-white dark:bg-[#1c2631] p-4 rounded-xl border border-[#f0f2f4] dark:border-[#2a3038]">
                    <div className="flex flex-col gap-4">
                    <div className="flex gap-3 items-center pb-4 border-b border-gray-100 dark:border-gray-800">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" data-alt="Small profile avatar" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQpwY7wlGwsOXSmdAp6RkeGuvgolGZtH4iP5cJ6DSgYYsFjJoovfK_3R6DpHKm6jQxAaem0oQBrRKblDCUg5r3fYxAGTwdkJsXUNdTxtygZfUDkBGwwbZQAH2pc7VLj1dKsCxhz_DHK7EdBT35QYTD-6kI4BXJTFFtRllQpsX7qZKo71-_EVsmPl7MG0NFOqzL47NzDRM2rCYa7pW04vQ4sk6XzfK2l7IoUF0NhBaybDqCLwbSGmB-R7RYXd2Fw07u38xTX8l9FVeB")'}}></div>
                    <div className="flex flex-col">
                    <h1 className="text-[#111418] dark:text-white text-base font-bold leading-none">Alex Johnson</h1>
                    <p className="text-[#617589] text-xs font-normal mt-1">Gold Member since 2021</p>
                    </div>
                    </div>
                    <nav className="flex flex-col gap-1">
                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#f0f2f4] text-[#1173d4]" href="#">
                        <MdPerson className="text-xl" />
                    <p className="text-sm font-semibold">Profile</p>
                    </a>
                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#617589] hover:bg-[#f0f2f4] dark:hover:bg-[#2a3038] transition-colors" href="#">
                        <LuPackage2 className="text-xl" />
                    <p className="text-[#111418] dark:text-white text-sm font-medium">Order History</p>
                    </a>
                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#617589] hover:bg-[#f0f2f4] dark:hover:bg-[#2a3038] transition-colors" href="#">
                        <MdLocationOn className="text-xl" />
                    <p className="text-[#111418] dark:text-white text-sm font-medium">Saved Addresses</p>
                    </a>
                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#617589] hover:bg-[#f0f2f4] dark:hover:bg-[#2a3038] transition-colors" href="#">
                        <MdCreditCard className="text-xl" />
                    <p className="text-[#111418] dark:text-white text-sm font-medium">Payment Methods</p>
                    </a>
                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#617589] hover:bg-[#f0f2f4] dark:hover:bg-[#2a3038] transition-colors" href="#">
                        <MdFavorite className="text-xl" />
                    <p className="text-[#111418] dark:text-white text-sm font-medium">Wishlist</p>
                    </a>
                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#617589] hover:bg-[#f0f2f4] dark:hover:bg-[#2a3038] transition-colors" href="#">
                        <MdSettings className="text-xl" />
                    <p className="text-[#111418] dark:text-white text-sm font-medium">Settings</p>
                    </a>
                    <hr className="my-2 border-gray-100 dark:border-gray-800"/>
                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#dc2626] hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors" href="#">
                        <MdLogout className="text-xl" />
                    <p className="text-sm font-medium">Logout</p>
                    </a>
                    </nav>
                    </div>
                    </div>
                    </aside>
                    {/* <!-- Main Content Area --> */}
                    <div className="flex-1 flex flex-col gap-6 overflow-hidden">
                    {/* <!-- Page Heading --> */}
                    <div className="flex flex-wrap justify-between items-end gap-3 px-4">
                    <div className="flex flex-col gap-1">
                    <p className="text-[#111418] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Account Dashboard</p>
                    <p className="text-[#617589] text-base font-normal leading-normal">Welcome back, Alex. Here's what's happening with your account.</p>
                    </div>
                    </div>
                    {/* <!-- Profile Header --> */}
                    <div className="bg-white dark:bg-[#1c2631] border border-[#f0f2f4] dark:border-[#2a3038] rounded-xl p-6 @container">
                    <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
                    <div className="flex gap-6 items-center">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl min-h-24 w-24 ring-4 ring-[#1173d4]/10 shadow-sm" data-alt="High resolution user portrait" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZcJxGtTXGztVVMtzkXrrYce9QVsO-0NN82CdJXICd91pPC7CfjqIP9q5-82d9iLlYIjOvsnTMfrMBFjuQEvyLYuaq-nRr6hNt02qhGyUXv6v3dOJnnVFWutJ9aEciMA41PrGWJJkWA8m6xkTPmKDMIHgZgGRA3rIIPmUOVMn7UfIpIwo2KdZZrhOhwPUcHQUrir4-jG1jSXU4QLdS79qWPpgkOvCLja18qIRVCrgTtKJgqBZwGGurtyN7HwqyMnLAxZO4Nk22SVNd")'}}></div>
                    <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-2">
                    <p className="text-[#111418] dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">Alex Johnson</p>
                    <span className="bg-[#1173d4]/10 text-[#1173d4] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">Gold Member</span>
                    </div>
                    <p className="text-[#617589] text-base font-normal leading-normal">alex.johnson@email.com</p>
                    <p className="text-[#617589] text-sm font-normal leading-normal opacity-75">Member since Oct 12, 2021</p>
                    </div>
                    </div>
                    <button className="flex min-w-30 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-[#1173d4] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#1173d4]/90 transition-all shadow-md shadow-[#1173d4]/20">
                    <span className="truncate">Edit Profile</span>
                    </button>
                    </div>
                    </div>
                    {/* <!-- Recent Orders Table --> */}
                    <div className="bg-white dark:bg-[#1c2631] border border-[#f0f2f4] dark:border-[#2a3038] rounded-xl overflow-hidden">
                    <div className="flex items-center justify-between px-6 pt-5 pb-3">
                    <h2 className="text-[#111418] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Recent Orders</h2>
                    <a className="text-[#1173d4] text-sm font-semibold hover:underline" href="#">View All</a>
                    </div>
                    <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                    <thead>
                    <tr className="bg-[#f6f7f8] dark:bg-[#2a3038] text-[#617589] text-xs font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Order ID</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Total</th>
                    <th className="px-6 py-4 text-right">Action</th>
                    </tr>
                    </thead>
                    <tbody className="text-sm">
                    <tr className="border-b border-gray-50 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-[#1173d4]">#ORD-7742</td>
                    <td className="px-6 py-4 text-[#111418] dark:text-white">May 24, 2024</td>
                    <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    <span className="size-1.5 rounded-full bg-green-500"></span> Delivered
                                                                    </span>
                    </td>
                    <td className="px-6 py-4 font-bold text-[#111418] dark:text-white">$249.00</td>
                    <td className="px-6 py-4 text-right">
                    <button className="text-[#617589] hover:text-[#1173d4]"><MdVisibility className="text-xl" /></button>
                    </td>
                    </tr>
                    <tr className="border-b border-gray-50 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-[#1173d4]">#ORD-7611</td>
                    <td className="px-6 py-4 text-[#111418] dark:text-white">May 12, 2024</td>
                    <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                    <span className="size-1.5 rounded-full bg-blue-500"></span> Shipped
                                                                    </span>
                    </td>
                    <td className="px-6 py-4 font-bold text-[#111418] dark:text-white">$1,120.00</td>
                    <td className="px-6 py-4 text-right">
                    <button className="text-[#617589] hover:text-[#1173d4]"><MdVisibility className="text-xl" /></button>
                    </td>
                    </tr>
                    <tr className="border-b border-gray-50 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-[#1173d4]">#ORD-7590</td>
                    <td className="px-6 py-4 text-[#111418] dark:text-white">Apr 28, 2024</td>
                    <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                    <span className="size-1.5 rounded-full bg-amber-500"></span> Processing
                                                                    </span>
                    </td>
                    <td className="px-6 py-4 font-bold text-[#111418] dark:text-white">$89.50</td>
                    <td className="px-6 py-4 text-right">
                    <button className="text-[#617589] hover:text-[#1173d4]"><MdVisibility className="text-xl" /></button>
                    </td>
                    </tr>
                    </tbody>
                    </table>
                    </div>
                    </div>
                    {/* <!-- Saved Addresses --> */}
                    <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between px-4">
                    <h2 className="text-[#111418] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Saved Addresses</h2>
                    <button className="flex items-center gap-2 text-[#1173d4] text-sm font-bold">
                    <MdAddLocation className="text-lg" />
                                                        Add New
                                                    </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* <!-- Address Card 1 (Default) --> */}
                    <div className="bg-white dark:bg-[#1c2631] border-2 border-[#1173d4]/20 rounded-xl p-5 relative shadow-sm">
                    <div className="absolute top-4 right-4 bg-[#1173d4] text-white text-[10px] font-bold uppercase px-2 py-1 rounded">Default</div>
                    <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-[#1173d4]">
                    <MdHome className="text-lg" />
                    <span className="font-bold text-sm">Home</span>
                    </div>
                    <div>
                    <p className="text-[#111418] dark:text-white font-bold">Alex Johnson</p>
                    <p className="text-[#617589] text-sm">123 Sunset Boulevard, Apt 4B</p>
                    <p className="text-[#617589] text-sm">Los Angeles, CA 90028</p>
                    <p className="text-[#617589] text-sm">United States</p>
                    <p className="text-[#617589] text-sm mt-1">+1 (555) 123-4567</p>
                    </div>
                    <div className="flex gap-4 mt-2">
                    <button className="text-xs font-bold text-[#111418] dark:text-white hover:text-[#1173d4] transition-colors uppercase tracking-wider">Edit</button>
                    <button className="text-xs font-bold text-red-600 hover:text-red-700 transition-colors uppercase tracking-wider">Delete</button>
                    </div>
                    </div>
                    </div>
                    {/* <!-- Address Card 2 --> */}
                    <div className="bg-white dark:bg-[#1c2631] border border-[#f0f2f4] dark:border-[#2a3038] rounded-xl p-5 shadow-sm">
                    <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-[#617589]">
                    <MdBusiness className="text-lg" />
                    <span className="font-bold text-sm">Work</span>
                    </div>
                    <div>
                    <p className="text-[#111418] dark:text-white font-bold">Alex Johnson</p>
                    <p className="text-[#617589] text-sm">800 Wilshire Blvd, Ste 1200</p>
                    <p className="text-[#617589] text-sm">Los Angeles, CA 90017</p>
                    <p className="text-[#617589] text-sm">United States</p>
                    <p className="text-[#617589] text-sm mt-1">+1 (555) 987-6543</p>
                    </div>
                    <div className="flex gap-4 mt-2">
                    <button className="text-xs font-bold text-[#111418] dark:text-white hover:text-[#1173d4] transition-colors uppercase tracking-wider">Edit</button>
                    <button className="text-xs font-bold text-red-600 hover:text-red-700 transition-colors uppercase tracking-wider">Delete</button>
                    <button className="text-xs font-bold text-[#1173d4] hover:underline transition-colors ml-auto uppercase tracking-wider">Set as default</button>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default UserProfile