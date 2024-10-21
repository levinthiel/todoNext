import Logo from "./Components/Logo";
import Main from "./Components/main";
import FooterBtns from "./Components/footer/footerbtns";

export default function Home() {
  return (
    <>
      <header>
        <Logo/>
      </header>
      <Main/>
      <footer>
        <FooterBtns/>
      </footer>
    </>
  );
}
