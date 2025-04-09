import BtnEditProduct from './btn-edit-product';
import BtnProductInfo from './btn-product-info';
import BtnRemoveProduct from './btn-remove-product';

const ProductModifiers = () => {
  
  return (
    <div className="flex gap-2 justify-center">
      <BtnProductInfo />
      <BtnEditProduct />
      <BtnRemoveProduct />
    </div>
  );
};

export default ProductModifiers;
