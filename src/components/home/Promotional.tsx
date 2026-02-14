import { memo, useEffect, useState, useRef, useCallback } from 'react';
import Button from "../../layouts/Button";

// Memoized countdown timer component
const CountdownTimer = memo<{ hours: number; minutes: number; seconds: number }>(
  ({ hours, minutes, seconds }) => (
    <div className="flex gap-2">
      <div className="bg-white/10 backdrop-blur-md rounded px-3 py-2 text-center">
        <div className="text-white font-bold">{String(hours).padStart(2, '0')}</div>
        <div className="text-gray-400 text-[10px] uppercase">Hours</div>
      </div>
      <div className="bg-white/10 backdrop-blur-md rounded px-3 py-2 text-center">
        <div className="text-white font-bold">{String(minutes).padStart(2, '0')}</div>
        <div className="text-gray-400 text-[10px] uppercase">Mins</div>
      </div>
      <div className="bg-white/10 backdrop-blur-md rounded px-3 py-2 text-center">
        <div className="text-white font-bold">{String(seconds).padStart(2, '0')}</div>
        <div className="text-gray-400 text-[10px] uppercase">Secs</div>
      </div>
    </div>
  )
);

CountdownTimer.displayName = 'CountdownTimer';

const Promotional = memo(() => {
  // State for countdown timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 22
  });

  // useRef to store interval ID to avoid recreating it on every render
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // useCallback to memoize the countdown logic
  const updateCountdown = useCallback(() => {
    setTimeLeft(prev => {
      let { hours, minutes, seconds } = prev;
      
      if (seconds > 0) {
        seconds--;
      } else if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else if (hours > 0) {
        hours--;
        minutes = 59;
        seconds = 59;
      } else {
        // Timer finished
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        return { hours: 0, minutes: 0, seconds: 0 };
      }
      
      return { hours, minutes, seconds };
    });
  }, []);

  // useEffect to setup and cleanup the countdown timer
  useEffect(() => {
    intervalRef.current = setInterval(updateCountdown, 1000);
    
    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [updateCountdown]);

  // Memoize click handler
  const handleShopSale = useCallback(() => {
    console.log('Navigate to sale page');
  }, []);

  return (
    <section className="px-20 py-20">
      <div className="relative w-full h-72 rounded-xl overflow-hidden bg-[#111418] flex items-center">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center" 
          data-alt="Abstract colorful fashion textile background" 
          style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAHH4Q_IBhpXd3dqwnqshY8i01RiYGiL6GBEx4wlMxEEg6EHre5aNKKN71yWQIs-l2SAbiDYmgyO2fO-3nzjLix4EAeEeIrMLzUzE9ziCpQmn3o7QZn1lsjDhPHRFi9QKyEaucCE_J1vnGHDT8dwuRfsCwmEwK0QAAxxqKEmQs704YhhL8fHymhTdSoUI3o8-mAYYWH_VhQ_q5UafebbHRGB8yHlN1yOC2JInmkLODcE2ug7rE3yye53auyLsklj8JWdM82A4rtnEKU")'}}
        />
        <div className="relative z-10 px-12 w-full flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-2">Seasonal Clearance Sale</h2>
            <p className="text-gray-300 text-lg">
              Save up to <span className="text-[#1173d4] font-bold">50% OFF</span> on selected fashion items and accessories.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <CountdownTimer 
              hours={timeLeft.hours} 
              minutes={timeLeft.minutes} 
              seconds={timeLeft.seconds} 
            />
            <div onClick={handleShopSale}>
              <Button styleType="primary" title="Shop Sale" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Promotional.displayName = 'Promotional';

export default Promotional;