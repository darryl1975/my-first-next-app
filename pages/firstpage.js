import Link from "next/link";
import { useRouter } from "next/router";

function firstpage() {

    const router = useRouter();

    const handleClick = () => {
        router.push("/posts")
    }


    return (<>
        <div>
            <h1>First Page</h1>
            <br/>
            <br/>
            <Link href="/blog">Blog</Link>
            <br/>
            <Link href="/product">Products</Link>
            <br/>
            <Link href="/posts">Posts</Link>
            <br />
            <br />
            <button className="btn btn-success" onClick={handleClick}>Post List</button>
        </div>
    </>)
}

export default firstpage;