/*
 * @Author: xvllinihao lixu_work@yahoo.com
 * @Date: 2023-10-14 13:01:04
 * @LastEditors: xvllinihao lixu_work@yahoo.com
 * @LastEditTime: 2023-10-14 21:34:01
 * @FilePath: \xvllinihao.github.io\app\layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "./globals.css";
import MyHeader from "./component/MyHeader";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerStyles = {
    maxWidth: "600px",
    padding: "30px",
    margin: "0 auto", // Center the container horizontally
    transform: "scale(1.5)", // Zoom content to 150%
    transformOrigin: "top", // Set the zoom origin to the top
  };

  return (
    <html lang="en">
      <body className="bg-jin-blue min-h-fit">
        <div className="bg-jin-white flex-col flex gap-2 mx-auto container" style={containerStyles}>
          <MyHeader />
          {children}
        </div>
      </body>
    </html>
  );
}