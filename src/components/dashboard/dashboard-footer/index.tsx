import React from 'react'
import Pagination from './pagination/index';
import productsStore from '@/store/products-store';

const DashboardFooter = () => {
  const totalProducts = productsStore((state) => state.totalProducts);
  if(totalProducts < 6) return null
  return (
    <div>
        <Pagination/>
    </div>
  )
}

export default DashboardFooter