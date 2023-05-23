import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { listPublicPages } from '@/infra/notionApi/client'
import { Post } from '@/types/post'

type HomeProps = {
  posts: Post[]
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>nekoze.xyz</title>
      </Head>
      <main>
        <p>TODO</p>
      </main>
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const posts = await listPublicPages()
  return {
    props: {
      posts: posts,
    },
  }
}
