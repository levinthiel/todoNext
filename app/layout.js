import GlobalStyle from "./styles";

export const metadata = {
  title: "Tödö - a simple To Do list",
  description: "This is a very simple little app to help you with your tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <GlobalStyle />
        {children}
      </body>
    </html>
  );
}
