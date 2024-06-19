import {
	AiTwotoneHome ,
    AiTwotoneAppstore,
	AiOutlineApartment,
	AiOutlineSchedule,
	AiOutlineFolderOpen,
	AiOutlineMail,
	AiOutlineLogout,
	AiOutlineSetting
} from 'react-icons/ai'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <AiTwotoneHome />
	},
    
	{
		key: 'call manager',
		label: 'Call Manager',
		path: '/call Manager',
		icon: <AiTwotoneAppstore />
	},
	{
		key: 'leads & calls',
		label: 'Leads & Calls',
		path: '/leads & calls',
		icon: <AiOutlineApartment />
	},
	{
		key: 'lead follow up',
		label: 'Lead Follow Up',
		path: '/lead follow up',
		icon: <AiOutlineSchedule />
	}
	
	
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
		key: 'Messaging',
		label: 'Messaging',
		path: '/messaging',
		icon: <AiOutlineMail />
	},

    {
		key: 'forms',
		label: 'Forms',
		path: '/forms',
		icon: <AiOutlineFolderOpen />
	},
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <AiOutlineSetting />
	},
	{
		key: 'logout',
		label: 'Logout',
		path: '/logout',
		icon: <AiOutlineLogout />
	}
]