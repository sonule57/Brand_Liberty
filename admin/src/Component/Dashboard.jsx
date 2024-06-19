import React from 'react'

import DashboardStatsGrid from './DashboardStartsGrid'
import BuyerProfilePieChart from './BuyerProfileChart'
import TransactionChart from './TransactionChart'

import PopularProducts from './PopularProducts'
import RecentOrders from './RecentOrders'

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardStatsGrid />
      <div className="flex flex-row gap-4 w-full">
        <BuyerProfilePieChart />
        <TransactionChart />

      </div>
      <div className="flex flex-row gap-4 w-full">
				<RecentOrders />
				<PopularProducts />
			</div> 
    </div>


  )
}

