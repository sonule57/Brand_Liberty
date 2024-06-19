import React from 'react'
import { AiFillCopyrightCircle , AiOutlineSchedule , AiTwotoneTablet, AiTwotoneClockCircle } from "react-icons/ai";

export default function DashboardStatsGrid() {
	return (
		<div className="flex gap-4 w-full">
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<AiFillCopyrightCircle  className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-xl text-gray-500 font-semibold">5</span>
					<div className="flex items-center">
						
						<span className="text-sm text-green-500 pl-2">Active Campaigns</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
					<AiOutlineSchedule  className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-xl text-gray-500 font-semibold">4</span>
					<div className="flex items-center">
						
						<span className="text-sm text-green-500 pl-2">Total Follow Up</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-400">
					<AiTwotoneTablet className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-xl text-gray-500 font-semibold">18</span>
					<div className="flex items-center">

						<span className="text-sm text-green-500 pl-2">Call Made</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-pink-600">
					<AiTwotoneClockCircle className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-xl text-gray-500 font-semibold">1 H, 12 M, 26 S</span>
					<div className="flex items-center">
						
						<span className="text-sm text-green-500 pl-2">Total Duration</span>
					</div>
				</div>
			</BoxWrapper>
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}