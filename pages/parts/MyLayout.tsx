import Header from './header'
import Footer from './footer'
import Head from './head'
import BottomNav from './menu/BottomNav'

const Layout = (props: any) => (
  <>
    <Head />
    {/* ページ表示前に一瞬スタイルが当たらない現象をなくすため空のscriptを記述 */}
    <script></script>
    <Header />
    {props.children}
    <Footer />
    <BottomNav />
  </>
)

export default Layout