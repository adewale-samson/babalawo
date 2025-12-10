import React from 'react'
import DashHeader from '../../components/DashHeader/DashHeader'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Outlet } from 'react-router'

const Dashboard = () => {
  return (
    <div>
        <DashHeader />
        <div className='flex h-[400px]'>
            <Sidebar />
            <div className='flex-1'><Outlet /></div>
        </div>
    </div>
  )
}

export default Dashboard