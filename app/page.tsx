import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Il Li Rampante",
};

export default function Home() {
  return (
    <main className="min-h-fit flex flex-col gap-2">
      <div className="bg-white max-w-screen-sm mx-auto align-top">
        <div>
          <p className="font-serif text-justify">
            Hi guys! This is Li Xu. I am currently a junior software engineer at
            Booking.com. This is my personal blog and my playground. I am using
            this to learn design and practice my frontend skills. I will also
            share some of my pains and gains during work and self-development.
          </p>
        </div>
      </div>
      <div className="max-w-screen-sm mx-auto align-top">
        <p className="bg-white text-justify text-[28px] font-display p-4">
          "If the world is increasingly senseless,
          <br />
          all we can do is to give it a style. -Italo Calvino"
        </p>
      </div>
      <div className="bg-white max-w-screen-sm mx-auto align-top">
        <div>
          <p className="font-serif text-justify">
            Calvino is my favorite author. And this is my favorite sentence from
            him, I hope I can start adding styles to my life by keep writing
            this blog :).
          </p>
          <p className="font-serif text-justify">
            Also, I name my blog as Il Li Rampante is also a salute to Calvino's
            masterpiece Il Baron Rampante.
          </p>
        </div>
      </div>
    </main>
  );
}
