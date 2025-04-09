
import DashboardHeader from './dashboard-header';
import DashboardFooter from './dashboard-footer/index';
type Props = {
    children: React.ReactNode
}

const Dashboard = ({children}:Props) => {
  return (
    <div className='flex flex-col max-h-screen gap-4 p-4'>
      <DashboardHeader />
      {children}
      <DashboardFooter />
    </div>
  )
}

export default Dashboard