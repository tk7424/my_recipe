import Header from './header'
import Footer from './footer'

const Layout = (props: any) => (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
)

export default Layout