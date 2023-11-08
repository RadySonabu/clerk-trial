import React from 'react'
import Header from './Header'
import { UserButton, auth } from '@clerk/nextjs';
const DashboardPage = () => {
    const { userId } = auth();
  return (
    <Header userId={userId}>
        <div>DashboardPage</div>
    </Header>
  )
}

export default DashboardPage