import { Metadata } from "next";
import * as texts from "../public/texts/mainPageText";

export const metadata: Metadata = {
  title: "Il Li Rampante",
};

export default function Home() {
  return (
    <main className="flex flex-col gap-2">
      <div className="mx-auto align-top">
        <p className="font-serif text-justify">
          <span className="font-bold">{texts.greetings}</span> 
          <span>{texts.introduction}</span>
        </p>
      </div>
      <div className="mx-auto align-top">
        <p className="text-justify text-[28px] font-display p-4">
          {texts.calvino_quote_first_half}
          <br />
          {texts.calvino_quote_second_half}
        </p>
      </div>
      <div className="mx-auto align-top">
        <div>
          <span className="font-serif text-justify">
            {texts.my_hope}
          </span>
          <span className="font-serif text-justify">
            {texts.naming_reason}
          </span>
        </div>
      </div>
    </main>
  );
}
