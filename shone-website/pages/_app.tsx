import 'tailwindcss/tailwind.css'
import App from 'next/app'
import Cookies from 'universal-cookie'
import consts from '../components/consts'
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  const cookies = new Cookies(appContext.ctx.req?.headers.cookie)
  const password = cookies.get(consts.SiteReadCookie) ?? ''
  if (password === 'letmein') {
    appProps.pageProps.hasReadPermission = true
  }
  return { ...appProps }
}

export default MyApp
