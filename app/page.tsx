/*
 * @Author: xvllinihao lixu_work@yahoo.com
 * @Date: 2023-10-14 13:01:04
 * @LastEditors: xvllinihao lixu_work@yahoo.com
 * @LastEditTime: 2023-10-14 20:05:30
 * @FilePath: \xvllinihao.github.io\app\page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export default function Home() {
  return (
    <main className=" min-h-fit flex flex-col gap-2">
      <div className="bg-amber-100">
        <div className="p-12">
          <p className="font-serif">
            Hi guys! This is Li Xu. I am currently a junior software enigneer at
            Booking.com. This is my personal blog and my playground. I am using
            this to learn design and practice my frontend skills. I will alsp share
            some of my pains and gains during work and self-development.
          </p>
        </div>
      </div>
      <div>
        <p className="bg-jin-gray text-center text-2xl font-display p-4 mx-auto">
          "If the world is increasingly senseless,
          <br />
          all we can do is to give it a style. -Italo Calvino"
        </p>
      </div>
      <div className="bg-amber-100">
        <div className="p-12">
          <p className="font-serif">
            Calvino is my favorite author. And this is my favorite sentence from him,
            I hope I can start adding styles to my life by keep writing this blog :).
          </p>
        </div>
      </div>
    </main>
  );
}
