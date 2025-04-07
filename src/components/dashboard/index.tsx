
import DashboardHeader from './dashboard-header';
type Props = {
    children: React.ReactNode
}

const Dashboard = ({children}:Props) => {
  return (
    <div>Dashboard
      <DashboardHeader />
      {children}
    </div>
  )
}

export default Dashboard