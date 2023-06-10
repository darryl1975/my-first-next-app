import Link from 'next/link'

function ProductList() {
    return (
        <>
            <br/>
            <Link href='/firstpage'>Home</Link>
            <br/>
            <br/>
            <Link href='/product/1'><h3>Product 1</h3></Link>
            <Link href='/product/2'><h3>Product 2</h3></Link>
            <Link href='/product/3'><h3>Product 3</h3></Link>
        </>
    )
}

export default ProductList