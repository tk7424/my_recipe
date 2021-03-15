import Header from './header'
import Footer from './footer'
import Head from './head'
import BottomNav from './menu/BottomNav'

const Layout = (props: any) => (
  <>
    <Head />
    <Header />
    {props.children}
    <Footer />
    <BottomNav />
  </>
)

export default Layout