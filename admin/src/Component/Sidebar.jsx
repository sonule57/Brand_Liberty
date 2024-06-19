import React from 'react'
import classNames from 'classnames'
import {FcBullish}from 'react-icons/fc'

import {Link, useLocation} from 'react-router-dom'

// import{DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS} from '../lib/consts'
import{DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS} from '../lib/consts/navigation'
const linkClasses ='flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'
export default function Sidebar () {
  return (
    <div className="bg-neutral-900 w-60 p-3 flex flex-col">
			<div className="flex items-center gap-2 px-1 py-3">
				<FcBullish fontSize={24} />
				<span className="text-neutral-200 text-lg">LEADPRO</span>
			</div>
			<div className="py-8 flex flex-1 flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((item) => (
					<SidebarLink key={item.key} item={item} />
				))}
			</div>
			<div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
					<SidebarLink key={item.key} item={item} />
				))}
			
			</div>
		</div>
  )
}

function SidebarLink({ item }) {
	const { pathname } = useLocation()

	return (
		<Link
			to={item.path}
			className={classNames(pathname === item.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClasses)}
		>
			<span className="text-xl">{item.icon}</span>
			{item.label}
		</Link>
	)
}