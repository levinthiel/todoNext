import Logo from "./Components/Logo";
import GlobalStyle from "./styles";
import { Fredoka } from 'next/font/google'

const fred = Fredoka({
  subsets: ['latin'],})


export const metadata = {
  title: "Tödö - a simple To Do list",
  description: "This is a very simple little app to help you with your tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fred.className} >
      <body >
      <GlobalStyle />
        <header >
          <Logo />
        </header>
        {children}
      </body>
    </html>
  );
}
