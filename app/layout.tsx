import { Layout } from '@/components/dom/Layout'
import '@/global.css'
import StyledComponentsRegistry from '@/lib/registry'

export const metadata = {
  title: '김신후',
  description: '김신후',
  
}

export default function RootLayout({ children }) {


  return (
    <html lang='en' className='antialiased light'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <StyledComponentsRegistry>
          <Layout>{children}</Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
