import React from 'react'
import { PieChart, Pie,Cell,ResponsiveContainer,Legend } from 'recharts'

const data = [
    {
        "name": "Job Applications",
        "value": 2400,
        
    },
    {
        "name": "Electronic Item Sell Campaign",
        "value": 4567,
       
    },
    {
        "name": "Social Media Campaign",
        "value": 1398,
        
    },
    {
        "name": "Sell Home Loan Campaign",
        "value": 9800,
        
    },
    {
        "name": "Live Event Campaign",
        "value": 3908,
        
    },
   
];

 const RADIAN = Math.PI / 180
 const COLORS = ['pink', 'skyblue', 'purpal','brown','lightgreen','yellow']

 const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
     const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

     return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
             {`${(percent * 100).toFixed(0)}%`}
         </text>
     )
 }

export default function BuyerProfilePieChart() {
    return (
        <div className="w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
            <strong className="text-gray-700 font-medium">Active Actioned Campaigns</strong>
            <div className="mt-3 w-full flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                     <PieChart width={730} height={250}>
						<Pie
							data={data}
							cx="50%"
							cy="50%"
							labelLine={false}
							label={renderCustomizedLabel}
							
							fill="#8884d8"
							dataKey="value"
                            namekey="name"
                            innerRadius={60}
                             outerRadius={80}  >
						
							{data.map((_, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Legend />
					</PieChart> 
                    
                </ResponsiveContainer>
            </div>
        </div>
    )
}