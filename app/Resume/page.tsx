import { MdSchool, MdWork, MdPublish, MdLanguage } from "react-icons/md";
import { AiFillTool } from "react-icons/ai";

export default function Resume() {
  return (
    <main>
      <div className="bg-amber-100">
        <div className="pl-12 pr-12 pb-5 pt-5">
          <div className="text-center flex items-center">
            <MdSchool className="mr-1" />
            <h1 className="font-serif text-lg">Education<br/></h1>
          </div>
          <div className="flex flex-col">
          <h2 className="font-serif">Delft Technology University --  2020.09-2022.06</h2>
          <h2 className="font-serif">Master in Computer Science</h2>
          </div>
          <div className="flex flex-col">
          <h2 className="font-serif">Beijing University of Posts and Telecomunications--2020.09-2022.06</h2>
          <h2 className="font-serif">Bachelor in Computer Science and Technology</h2>
          </div>
        </div>
        <div className="pl-12 pr-12 pb-5">
          <div className="text-center flex items-center">
            <MdWork className="mr-1" />
            <h1 className="font-serif text-lg">Work Experience</h1>
          </div>
          <div className="flex flex-col">
            <h2 className="font-serif">Booking.com</h2>
            <h2 className="font-serif">APTA Technologies</h2>
            <h2 className="font-serif">Delft Technologyu University</h2>
            <h2 className="font-serif">Philips</h2>
          </div>
        </div>
        <div className="pl-12 pr-12 pb-5">
          <div className="text-center flex items-center">
            <AiFillTool className="mr-1" />
            <h1 className="font-serif text-lg">Skills</h1>
          </div>
          <div className="flex flex-row justify-between">
            <h2 className="font-serif">Python</h2>
            <h2 className="font-serif">CPP</h2>
            <h2 className="font-serif">Typescript/JavaScript</h2>
            <h2 className="font-serif">Rust</h2>
            <h2 className="font-serif">Java</h2>
          </div>
        </div>
        <div className="pl-12 pr-12 pb-5">
          <div className="text-center flex items-center">
            <MdPublish className="mr-1" />
            <h1 className="font-serif text-lg">Publication</h1>
          </div>
        </div>
        <div className="pl-12 pr-12 pb-5">
          <div className="text-center flex items-center">
            <MdLanguage className="mr-1" />
            <h1 className="font-serif text-lg">Language</h1>
          </div>
          <div className="flex flex-row justify-between">
            <h2 className="font-serif">Chinese</h2>
            <h2 className="font-serif">English</h2>
            <h2 className="font-serif">Japanese</h2>
            <h2 className="font-serif">Dutch</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
