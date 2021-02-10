import Header from './header'
import Footer from './footer'
import Head from './head'

const Layout = (props: any) => (
  <>
    <Head />
    <Header />
    {props.children}
    <Footer />
  </>
)

export default Layout