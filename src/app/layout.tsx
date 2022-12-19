// import { Providers } from "./providers";
import "../styles/globals.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

// import { ServerThemeProvider } from "@wits/next-themes";
// import { Providers } from "./providers";

export default async function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <ServerThemeProvider attribute="class">
    <html lang="en" className="dark">
      <body>
        {/* <Providers> */}
        <div className="flex min-h-screen w-full max-w-[1920px] flex-col items-start justify-start overflow-hidden rounded-t-xl rounded-b-xl  bg-white dark:bg-[color:var(--bg-main-dark-theme)]">
          <Header></Header>
          <div className="flex h-full w-full  pr-3 pb-4">
            <Sidebar></Sidebar>
            {children}
          </div>
        </div>
        {/* </Providers> */}
      </body>
    </html>
    // </ServerThemeProvider>
  );
}
