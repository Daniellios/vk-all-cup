import { ThemeProvider } from "next-themes";
import { Providers } from "./providers";
import "../styles/globals.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MailList from "./components/Mail/MailList";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("this");

  return (
    <html lang="en">
      <Providers>
        <body>
          <div className="flex min-h-screen w-full max-w-[1920px] flex-col items-start justify-start overflow-hidden rounded-t-xl rounded-b-xl  bg-white dark:bg-[color:var(--bg-main-dark-theme)]">
            <Header isLetter={false}></Header>
            <div className="flex h-full w-full pr-3">
              <Sidebar></Sidebar>

              {children}
            </div>
          </div>
        </body>
      </Providers>
    </html>
  );
}