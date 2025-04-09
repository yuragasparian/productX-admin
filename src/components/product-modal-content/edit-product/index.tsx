import { productModalsStore } from '@/store/product-modals-store'
import React from 'react'

const ModalEditProduct = () => {
  const modalProductId = productModalsStore.getState().modalProductId
  return (
    <div>ModalEditProduct {modalProductId}</div>
  )
}

export default ModalEditProduct