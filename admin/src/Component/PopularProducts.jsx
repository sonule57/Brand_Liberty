
import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/consts/helper/Index'

const PopularProductsData= [
	{
		
		
		customer_name: 'Electronic Item Sell Campaig',
           
		
	},

	{
		
		
		customer_name: 'Electronic Item Sell Campaign',
		
		
	},


	{
		
		
		customer_name: 'Electronic Item Sell Campaign',
		
	},


	{
		
		
		customer_name: 'Electronic Item Sell Campaign',
		
		
	},

	{
		
		
		customer_name: 'Social Media Campaign',
		
	}
		
]

export default function PopularProducts() {
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Follow Up</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full h-full text-gray-700">
					<thead>
						<tr>
							
							<th>Campaign Name</th>
							
							<th>Action</th>
							
						</tr>
					</thead>
					<tbody>
						{PopularProductsData.map((order) => (
							<tr key={order.id}>
								 <td>
								 {order.customer_name} 
								</td> 
								{/* <td> */}
								{/* <td>
								 {order.customers_name} 
								</td>
								
								</td>
								
								<td>{format(new Date(order.order_date), 'dd MMM yyyy')}</td> */}
								
								{/* <td>{getOrderStatus(order.current_order_status)}</td> */}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}