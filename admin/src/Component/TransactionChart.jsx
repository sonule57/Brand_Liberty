import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid,Label, LabelList,ResponsiveContainer } from 'recharts'

const data = [
	{
		"name": "2024-06-09",
		"uv": 4000,
		"pv": 2400,
		"amt": 2400
	},
	{
		"name": "2024-06-17",
		"uv": 3000,
		"pv": 1398,
		"amt": 2210
	},
	{
		"name": "2024-06-18",
		"uv": 2000,
		"pv": 9800,
		"amt": 2290
	}


]

export default function TransactionChart() {
	return (
		<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Call Made</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				 <ResponsiveContainer width="100%" height="100%"> 
					
	
					<BarChart
						width={730}
						height={250}
						data={data}
						margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name">
							<Label value="call mode"  offset={0} position="insideBottom" />
						</XAxis>
						<YAxis label={{ value: '', angle: -90, position: 'insideLeft', textAnchor: 'middle' }} />
						{/* <Bar dataKey="pv" fill="#8884d8">
							<LabelList dataKey="name" position="insideTop" angle="45" />
						</Bar> */}
						<Bar dataKey="pv" fill="#82ca9d">
							<LabelList dataKey="pv" position="top" />
						</Bar>
						<Bar dataKey="call mode" fill="#82ca9d" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}