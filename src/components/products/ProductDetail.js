import styled from "styled-components";

const BlueDiv = styled.div`
background-color: brown
`

const Img = styled.img`
width: 100px;
height: 100px`

const ProductDetail = ({product}) => {

    const {pno, pname, price, img} = product

    return ( 
        <li>
            <BlueDiv>PNO {pno}</BlueDiv>
            <div>name {pname}</div>
            <div>price {price}</div>
            <div><Img src = {require(`../../img/${img}`)}/></div>
            <button>BUY</button>
        </li>
     );
}
 
export default ProductDetail;