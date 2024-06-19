import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/consts/helper/Index'

const recentOrderData = [
	{
		
		
		customer_name: 'Job Applications',
		customers_name:'Elta Runte',
		order_date: '2022-05-17T03:24:00',
		
	},

	{
		
		
		customer_name: 'Job Applications',
		customers_name:'Mara Pacocha',
		order_date: '2022-05-17T03:24:00',
		
	},


	{
		
		
		customer_name: 'Electronic Item Sell Campaign',
		customers_name:'Idella Zulauf',
		order_date: '2022-05-17T03:24:00',
		
	},


	{
		
		
		customer_name: 'Social Media Campaign',
		customers_name:'Mr. Laron Greenholt',
		order_date: '2022-05-17T03:24:00',
		
	},

	{
		
		
		customer_name: 'Social Media Campaign',
		customers_name:'Jayden Mitchell MD',
		order_date: '2022-05-17T03:24:00',
		
	}
		
]

export default function RecentOrders() {
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Salesman Booking</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full h-full text-gray-700">
					<thead>
						<tr>
							
							<th>Campaign Name</th>
							<th>Salesman</th>
							<th>Booking Time</th>
							<th>Action</th>
							
						</tr>
					</thead>
					<tbody>
						{recentOrderData.map((order) => (
							<tr key={order.id}>
								 <td>
								 {order.customer_name} 
								</td> 
								<td>
								<td>
								 {order.customers_name} 
								</td>
								
								</td>
								
								<td>{format(new Date(order.order_date), 'dd MMM yyyy')}</td>
								
								{/* <td>{getOrderStatus(order.current_order_status)}</td> */}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}