import "./globals.css";
import MyHeader from "./component/MyHeader";
import LanguageProvider from "./component/LanguageProvider";

export const metadata = {
  title: "Li no Nindo - Chunnin Developer",
  description: "Li Xu's ninja journey in software development"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerStyles = {
    maxWidth: "1200px",
    padding:  "20px",
    margin: "0 auto", 
  };

  return (
    <html lang="en">
      <body className="bg-white min-h-fit text-[20px] text-black">
        <LanguageProvider>
          <div className="bg-white flex-col flex gap-2 mx-auto container min-h-screen border-4 border-black" style={containerStyles}>
            <MyHeader />
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}