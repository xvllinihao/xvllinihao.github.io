import "./globals.css";
import MyHeader from "./component/MyHeader";


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
      <body className="bg-[#f8f9fa] min-h-fit text-[20px]">
        <div className="bg-white flex-col flex gap-2 mx-auto container min-h-screen" style={containerStyles}>
          <MyHeader />
          {children}
        </div>
      </body>
    </html>
  );
}