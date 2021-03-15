import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer>
        <Link href="/">
          <a>TOPページへ</a>
        </Link>
      </footer>
      {/* ページ表示前に一瞬スタイルが当たらない現象をなくすため空のscriptを記述 */}
      <script></script>
    </>
  );
};

export default Footer