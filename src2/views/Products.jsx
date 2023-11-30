import useStores from "../hooks/useStores";

function Products() {
  const [ cartStore, userStore ] = useStores('cart', 'user')
  console.log(1);
  return <div>
    { cartStore.total }
    { userStore.isLogin ? 1 : 0 }
  <h1>Products</h1>
</div>
}

export default Products