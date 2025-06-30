import { Metadata } from "next";
import MainContent from "./component/MainContent";

export const metadata: Metadata = {
  title: "Li no Nindo",
};

export default function Home() {
  return <MainContent />;
}
