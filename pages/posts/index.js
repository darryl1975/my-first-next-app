import Link from 'next/link'
import { Card, Row, Text } from '@nextui-org/react'

function PostList({ posts }) {
    return (
        <>
            <div className="container">
                <h1>List of Posts</h1>
                <br />
                <br />
                {
                    posts.map(post => {
                        return (
                            <Card className="card text-bg-light mb-3">
                                <Row key={post.id} justify="center" aligh="center">
                                    <Text h2 size={15} color="black">{post.id} {post.title}</Text>
                                </Row>
                            </Card>
                        )
                    })
                }
            </div>
        </>
    )
}

export default PostList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    const data = await response.json();

    return {
        props: {
            posts: data
        }
    }
}