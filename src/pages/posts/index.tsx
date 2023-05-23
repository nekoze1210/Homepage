import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { PostThumbnail } from '@/components/PostThumbnail'
import { listPublicPages } from '@/infra/notionApi/client'
import { Post } from '@/types/post'

type HomeProps = {
  posts: Post[]
}

const Posts: NextPage<HomeProps> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>nekoLog</title>
      </Head>
      <main>
        <ul className='px-3'>
          {posts.map((post) => {
            return <PostThumbnail {...post} key={post.id} />
          })}
        </ul>
      </main>
    </div>
  )
}

export default Posts

export const getStaticProps = async () => {
  const posts = await listPublicPages()
  return {
    props: {
      posts: posts,
    },
  }
}
