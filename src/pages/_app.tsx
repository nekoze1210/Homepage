import '@/styles/globals.scss'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useBudoux } from '@/hooks/useBudoux'
import Layout from '@/pages/layout'
import 'react-medium-image-zoom/dist/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  const { applyElement } = useBudoux()

  useEffect(() => {
    const elems = document.querySelectorAll<HTMLElement>('.text')
    elems.forEach((elem: HTMLElement) => {
      applyElement(elem)
    })
  })

  return (
    <Layout>
      <DefaultSeo
        openGraph={{
          title: 'nekoLog',
          description: '思ったことや学んだことを書きます',
          type: 'website',
          locale: 'ja_JP',
          url: process.env.SITE_URL || 'https://blog.nekoze.xyz',
          site_name: 'nekolog',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
