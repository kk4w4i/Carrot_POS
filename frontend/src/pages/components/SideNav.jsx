import { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import clsx from "clsx";
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/webp/Carrot_logo.webp';
import { Button } from '@/components/ui/button';

const SideNav = ({ tabs, activeTab, setActiveTab }) => {
  const [hoveredTab, setHoveredTab] = useState(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/user/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        navigate('/login');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleMouseOver = (tab) => {
    setHoveredTab(tab);
  };

  const handleMouseLeave = () => {
    setHoveredTab(null);
  };

  const handleFocus = (tab) => {
    setHoveredTab(tab);
  };

  const handleBlur = () => {
    setHoveredTab(null);
  };

  const handleClick = (tab) => {
    setActiveTab(tab);
    setHoveredTab(null);
  };

  const currentTab = hoveredTab || activeTab;
  
  return (
    <div className="flex flex-col gap-[2rem] w-[17%] h-screen justify-between px-[1rem] py-[2rem] border-r">
      <div className='flex flex-col w-full justify-start items-start'>
        <img className="h-[2.5rem] object-cover p-1" src={Logo} alt="carrot logo"/>
        <div className='mt-7 flex flex-col w-full justify-start items-start gap-4'>
          <MotionConfig transition={{ type: "spring", bounce: 0, duration: 0.4 }}>
            <motion.ul layout className="flex flex-col items-start gap-4 w-full">
              {tabs.slice(0, tabs.length).map((tab) => (
                <motion.li
                  layout
                  className={clsx(
                    "flex justify-center items-center relative cursor-pointer px-2 py-1 text-[1rem] h-[3rem] outline-none transition-colors w-full",
                    currentTab === tab ? "text-white" : "text-gray-700",
                  )}
                  tabIndex={0}
                  key={tab}
                  onFocus={() => handleFocus(tab)}
                  onBlur={handleBlur}
                  onMouseOver={() => handleMouseOver(tab)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(tab)}
                >
                  {currentTab === tab ? (
                    <motion.div
                      layoutId="tab-indicator"
                      className="absolute inset-0 rounded-lg bg-black/80 h-[3rem] w-full drop-shadow-lg"
                    />
                  ) : null}
                  <span className="flex justify-start items-center relative text-inherit h-[3rem] w-full pl-4">{tab}</span>
                </motion.li>
              ))}
            </motion.ul>
          </MotionConfig>
        </div>
      </div>
      <div className='flex flex-col w-full justify-start items-start'>
        <Button variant="ghost" className="text-neutral-400" onClick={handleLogout}>
          Setting
        </Button>
        <Button variant="ghost" className="text-neutral-400">
          Profile
        </Button>
      </div>
    </div>
  );
};

export default SideNav;