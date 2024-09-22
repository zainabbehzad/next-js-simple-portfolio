import { FC } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiRedux, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const AboutPage: FC = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        <h1 className="text-5xl font-bold mb-6 text-center text-gradient animate-fade-in">About Me</h1>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">Make anything possible with
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
              {" "}Web Development!
            </span>
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            &quot;I am a dedicated web developer with a passion for creating dynamic and user-friendly websites...&quot;
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">Skills and Technologies</h2>
          <p className="text-lg leading-relaxed mb-4">
            As a web developer, I specialize in a range of technologies:
          </p>
          <ul className="list-disc pl-5">
            <li className="flex items-center">
              <SiHtml5 className="mr-2 text-red-600" /> HTML
            </li>
            <li className="flex items-center">
              <SiCss3 className="mr-2 text-blue-600" /> CSS
            </li>
            <li className="flex items-center">
              <SiJavascript className="mr-2 text-yellow-500" /> JavaScript
            </li>
            <li className="flex items-center">
              <SiReact className="mr-2 text-blue-600" /> React
            </li>
            <li className="flex items-center">
              <SiRedux className="mr-2 text-purple-600" /> Redux
            </li>
            <li className="flex items-center">
              <SiTailwindcss className="mr-2 text-blue-400" /> Tailwind CSS
            </li>
            <li className="flex items-center">
              <SiNextdotjs className="mr-2 text-black" /> Next.js
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">Projects and Achievements</h2>
          <p className="text-lg leading-relaxed mb-2">
            Here are some of the projects I have worked on:
          </p>
          <div className="mb-4">
            <strong className="text-lg">HTML, CSS:</strong>
            <ul className="list-disc pl-5">
              <li>Survey Form - <a href="https://zainabbehzad.github.io/survey-form/" className="text-blue-600 hover:underline font-semibold">[Live Link]</a></li>
              <li>Tribute Page - <a href="https://zainabbehzad.github.io/Tribute-page/" className="text-blue-600 hover:underline font-semibold">[Live Link]</a></li>
              <li>Documentation Page - <a href="https://zainabbehzad.github.io/technical-documentation-page/" className="text-blue-600 hover:underline font-semibold">[Live Link]</a></li>
              <li>Product Landing Page - <a href="https://zainabbehzad.github.io/Product-Landing-Page/" className="text-blue-600 hover:underline font-semibold">[Live Link]</a></li>
              <li>Personal Portfolio Webpage - <a href="https://zainabbehzad.github.io/personal-portfolio-webpage/" className="text-blue-600 hover:underline font-semibold">[Live Link]</a></li>
            </ul>
          </div>
          <div className="mb-4">
            <strong className="text-lg">JavaScript:</strong>
            <ul className="list-disc pl-5">
              <li>Cash Register - <a href="https://zainabbehzad.github.io/Cash-Register/" className="text-blue-600 hover:underline font-semibold">[Live Link]</a></li>
              <li>Palindrome Checker - <a href="https://zainabbehzad.github.io/-Palindrome-Checker/" className="text-blue-600 hover:underline font-semibold">[Live Link]</a></li>
              <li>Pokemon Search App - <a href="https://zainabbehzad.github.io/Pokemon-Search-App/" className="text-blue-600 hover:underline font-semibold">[Live Link]</a></li>
              <li>Telephone Number Validator - <a href="https://zainabbehzad.github.io/Telephone-Number-Validator/" className="text-blue-600 hover:underline font-semibold">[Live Link]</a></li>
              <li>Roman Numeral Converter - <a href="https://zainabbehzad.github.io/Roman-Numeral-Converters/" className="text-blue-600 hover:underline font-semibold">[Live Link]</a></li>
              <li>JavaScript Personal Portfolio - <a href="https://zainabbehzad.github.io/JavaScript-Personal-Portfolio/" className="text-blue-600 hover:underline font-semibold">[Live Link]</a></li>
            </ul>
          </div>
          <div>
            <strong className="text-lg">React:</strong>
            <ul className="list-disc pl-5">
              <li>Random Quote Machine - <a href="https://zainabbehzad.github.io/Random-Quote-Machine/" className="text-blue-600 hover:underline font-semibold">[Live Link]</a></li>
              <li>Markdown Previewer - <a href="https://zainabbehzad.github.io/Markdown-Previewer/" className="text-blue-600 hover:underline font-semibold">[Live Link]</a></li>
              <li>JavaScript Calculator - <a href="https://zainabbehzad.github.io/JavaScript-Calculator/" className="text-blue-600 hover:underline font-semibold">[Live Link]</a></li>
              <li>25-5 Clock - <a href="https://zainabbehzad.github.io/25-5-Clock/" className="text-blue-600 hover:underline font-semibold">[Live Link]</a></li>
              <li>Space Travelers Hub - <a href="https://zainabbehzad.github.io/Space-Travelers-Hub/" className="text-blue-600 hover:underline font-semibold">[Live Link]</a></li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">My Journey as a Web Developer</h2>
          <p className="text-lg leading-relaxed mb-4">
            My journey into web development began with a curiosity for technology and a desire to create...
          </p>
          <p className="text-lg leading-relaxed mb-4">
            I explored different areas of web development, from front-end design to back-end functionality...
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Today, I strive to stay updated with the latest trends and continuously improve my skills...
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">Let&apos;s Connect</h2>
          <p className="text-lg leading-relaxed mb-4">
            I&apos;d love to hear from you! Whether you have questions about my work...
          </p>
          <ul className="list-disc pl-5">
            <li>
              <a href="https://www.linkedin.com/in/zainab-behzad-3126692b5" className="flex items-center text-blue-600 hover:underline">
                <FaLinkedin className="mr-2" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/zainabbehzad" className="flex items-center text-blue-600 hover:underline">
                <FaGithub className="mr-2" />
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/z_behzad_?igsh=a2ZuejVsZGp2a2pt" className="flex items-center text-blue-600 hover:underline">
                <FaInstagram className="mr-2" />
                Instagram
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
