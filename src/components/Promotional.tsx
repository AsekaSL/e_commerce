import React from 'react'

const Promotional = () => {
  return (
    <section className="mb-16">
        <div className="relative w-full h-72 rounded-xl overflow-hidden bg-[#111418] flex items-center">
            <div className="absolute inset-0 opacity-40 bg-cover bg-center" data-alt="Abstract colorful fashion textile background" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAHH4Q_IBhpXd3dqwnqshY8i01RiYGiL6GBEx4wlMxEEg6EHre5aNKKN71yWQIs-l2SAbiDYmgyO2fO-3nzjLix4EAeEeIrMLzUzE9ziCpQmn3o7QZn1lsjDhPHRFi9QKyEaucCE_J1vnGHDT8dwuRfsCwmEwK0QAAxxqKEmQs704YhhL8fHymhTdSoUI3o8-mAYYWH_VhQ_q5UafebbHRGB8yHlN1yOC2JInmkLODcE2ug7rE3yye53auyLsklj8JWdM82A4rtnEKU")'}}></div>
            <div className="relative z-10 px-12 w-full flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-extrabold text-white mb-2">Seasonal Clearance Sale</h2>
                    <p className="text-gray-300 text-lg">Save up to <span className="text-[#1173d4] font-bold">50% OFF</span> on selected fashion items and accessories.</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                        <div className="bg-white/10 backdrop-blur-md rounded px-3 py-2 text-center">
                            <div className="text-white font-bold">12</div>
                            <div className="text-gray-400 text-[10px] uppercase">Hours</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded px-3 py-2 text-center">
                            <div className="text-white font-bold">45</div>
                            <div className="text-gray-400 text-[10px] uppercase">Mins</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded px-3 py-2 text-center">
                            <div className="text-white font-bold">22</div>
                            <div className="text-gray-400 text-[10px] uppercase">Secs</div>
                        </div>
                    </div>
                <button className="bg-[#1173d4] text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-[#1173d4] transition-all duration-300">Shop Sale</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Promotional