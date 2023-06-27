const HelloWorld = ({product}) => {

    const {pno,pname,price} = product || {pno:-1, pname:'', price:0}

    return (
        <div>
            <div>{pno}</div>
            <div>{pname}</div>
            <div>{price}</div>
            {price > 5000 ? <div>가격이 비싸다</div> : <div>가격이 싸다</div>}
        </div>
    );
}
 
export default HelloWorld;