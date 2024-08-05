import React, { useState } from 'react';
import SideNav from './components/SideNav';
import Products from './Products';
import Orders from './Orders';
import Payments from './Payments';

const TABS = ["Products", "Orders", "Payments"];

function Dashboard() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <div className='flex'>
      <SideNav tabs={TABS} activeTab={activeTab} setActiveTab={setActiveTab}/>
      <div>
        {activeTab === "Products" &&
          <Products/>
        }
        {activeTab === "Orders" &&
          <Orders/>
        }
        {activeTab === "Payments" &&
          <Payments/>
        }
      </div>
    </div>
  );
}

export default Dashboard;