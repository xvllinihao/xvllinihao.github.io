import { Metadata } from "next";
import * as texts from "../public/texts/mainPageText";

export const metadata: Metadata = {
  title: "Il Li Rampante",
};

export default function Home() {
  return (
    <main className="min-h-fit flex flex-col gap-2">
      <div className="bg-white max-w-screen-sm mx-auto align-top">
        <div>
          <p className="font-serif text-justify">
            <span className="text-[24px] font-bold">{texts.greetings}</span> 
            {texts.introduction}
          </p>
        </div>
      </div>
      <div className="max-w-screen-sm mx-auto align-top">
        <p className="bg-white text-justify text-[28px] font-display p-4">
          {texts.calvino_quote_first_half}
          <br />
          {texts.calvino_quote_second_half}
        </p>
      </div>
      <div className="bg-white max-w-screen-sm mx-auto align-top">
        <div>
          <p className="font-serif text-justify">
            {texts.my_hope}
          </p>
          <p className="font-serif text-justify">
            {texts.naming_reason}
          </p>
        </div>
      </div>
    </main>
  );
}
