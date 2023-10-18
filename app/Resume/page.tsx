import { MdSchool, MdWork, MdPublish, MdLanguage } from "react-icons/md";
import { AiFillTool } from "react-icons/ai";
import { FaPython, FaJava, FaRust } from "react-icons/fa";
import { SiCplusplus, SiJavascript } from "react-icons/si";
import { CN, US, JP, NL } from "country-flag-icons/react/3x2";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Il Li Rampante',
} 

export default function Resume() {
  return (
    <main>
      <div className="bg-white">
        <div className="pl-12 pr-12 pb-5 pt-5">
          <div className="text-center flex items-center">
            <MdSchool className="mr-1" />
            <h1 className="font-serif text-xl font-bold">
              Education
              <br />
            </h1>
          </div>
          <div className="flex flex-col">
            <h2 className="font-serif indent-6">Delft Technology University</h2>
            <h2 className="font-serif text-sm indent-8">
              2020.09-2022.06 Master in Computer Science
            </h2>
          </div>
          <div className="flex flex-col">
            <h2 className="font-serif indent-6">
              Beijing University of Posts and Telecomunications
            </h2>
            <h2 className="font-serif text-sm indent-8">
              2016.09-2020.07 Bachelor in Computer Science and Technology
            </h2>
          </div>
        </div>
        <div className="pl-12 pr-12 pb-5">
          <div className="text-center flex items-center">
            <MdWork className="mr-1" />
            <h1 className="font-serif text-xl font-bold">Work Experience</h1>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col indent-6">
              <h2 className="font-serif">
                Booking.com -- Junior Software Engineer
              </h2>
              <p className="text-sm font-serif">
                2023.09-Present <span className="ml-4" /> Amsterdam, Netherlands{" "}
              </p>
            </div>
            <div className="flex flex-col indent-6">
              <h2 className="font-serif">
                APTA Technologies -- FullStack Software Engineer
              </h2>
              <p className="text-sm font-serif">
                2022.11-2023.04 <span className="ml-4" /> Delft, Netherlands{" "}
              </p>
            </div>
            <div className="flex flex-col indent-6">
              <h2 className="font-serif">
                Delft Technology University -- Teaching Assistant
              </h2>
              <p className="text-sm font-serif">
                2021.09-2021.10 <span className="ml-4" /> Delft, Netherlands{" "}
              </p>
            </div>
            <div className="flex flex-col indent-6">
              <h2 className="font-serif">
                Philips -- Research Intern 2021.07-2021.09
              </h2>
              <p className="text-sm font-serif">
                2021.07-2021.09 <span className="ml-4" /> Best, Netherlands{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="pl-12 pr-12 pb-5">
          <div className="text-center flex items-center">
            <AiFillTool className="mr-1" />
            <h1 className="font-serif text-xl font-bold">Skills</h1>
          </div>
          <div className="flex flex-row justify-between pl-6 pr-6">
            <div className="text-center flex items-center">
              <FaPython className="mr-1" />
              <h1 className="font-serif ">Python</h1>
            </div>
            <div className="text-center flex items-center">
              <SiCplusplus className="mr-1" />
              <h1 className="font-serif ">CPP</h1>
            </div>
            <div className="text-center flex items-center">
              <SiJavascript className="mr-1" />
              <h1 className="font-serif ">JS/TS</h1>
            </div>
            <div className="text-center flex items-center">
              <FaRust className="mr-1" />
              <h1 className="font-serif ">Rust</h1>
            </div>
            <div className="text-center flex items-center">
              <FaJava className="mr-1" />
              <h1 className="font-serif ">Java</h1>
            </div>
          </div>
        </div>
        <div className="pl-12 pr-12 pb-5 flex flex-col">
        <div className="text-center flex items-center">
                <MdPublish className="mr-1" />
                <h1 className="font-serif text-xl font-bold">Publication</h1>
              </div>
          <ul className="list-disc ml-6">
            <li>    
              <div className="flex flex-col pb-3">
                <h2 className="font-serif">
                  Trajectory Hiding and Sharing for Supply Chains with
                  Differential Privacy
                </h2>
                <p className="text-sm font-serif">
                  28th European Symposium on Research in Computer Security{" "}
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-col">
                <h2 className="font-serif">
                  Verifiable Credentials with Privacy-Preserving Tamper-Evident
                  Revocation Mechanism
                </h2>
                <p className="text-sm font-serif">
                  5th International Conference on Blockchain Computing and
                  Applications (BCCA 2023){" "}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="pl-12 pr-12 pb-5">
          <div className="text-center flex items-center">
            <MdLanguage className="mr-1" />
            <h1 className="font-serif text-xl font-bold">Language</h1>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex items-center">
              <CN title="china" className="h-4 pl-6 pr-1" />
              <h1 className="font-serif text-lg">
                Chinese - Native proficiency
              </h1>
            </div>
            <div className="flex items-center">
              <US title="United States" className="h-4 pl-6 pr-1" />
              <h1 className="font-serif text-lg">
                English - Professional proficiency
              </h1>
            </div>{" "}
            <div className="flex items-center">
              <JP title="Japan" className="h-4 pl-6 pr-1" />
              <h1 className="font-serif text-lg">
                Japanese - Elementary proficiency
              </h1>
            </div>{" "}
            <div className="flex items-center">
              <NL title="Netherlands" className="h-4 pl-6 pr-1" />
              <h1 className="font-serif text-lg">
                Dutch - Elementary proficiency
              </h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
