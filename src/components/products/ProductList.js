import ProductDetail from "./ProductDetail";

const ProductList = () => { // 컨테이너형 프리젠테이션 컴포넌트

    const products = [
        {pno:1, pname:'상품1', price: 3000},
        {pno:2, pname:'상품2', price: 5000},
        {pno:3, pname:'상품3', price: 7000},
        {pno:4, pname:'상품4', price: 8000},
        {pno:5, pname:'상품5', price: 9000}
      ]

    return ( 
        <ul className="productList">
            {products.map(p => 
                <ProductDetail
                 key={p.pno}
                 product={p}/>
                )}
        </ul>
     );
}
 
export default ProductList;