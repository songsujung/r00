import ProductDetail from "./ProductDetail";

const ProductList = () => { // 컨테이너형 프리젠테이션 컴포넌트

    const products = [
        {pno:1, pname:'녹차쿠키', price: 2500, img: `녹차쿠키.jpeg`},
        {pno:2, pname:'레드벨벳쿠키', price: 3000, img: `레드벨벳쿠키.jpeg`},
        {pno:3, pname:'약과쿠키', price: 3500, img: `약과쿠키.jpeg`},
        {pno:4, pname:'오레오쿠키', price: 4000, img: `오레오쿠키.jpeg`},
        {pno:5, pname:'프레즐쿠키', price: 4500, img: `프레즐쿠키.jpeg`}
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