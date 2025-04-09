
import DashboardHeader from './dashboard-header';
type Props = {
    children: React.ReactNode
}

const Dashboard = ({children}:Props) => {
  return (
    <div className='flex flex-col gap-4 p-4'>
      <DashboardHeader />
      {children}
    </div>
  )
}

export default Dashboard