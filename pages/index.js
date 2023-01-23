import Head from 'next/head'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from 'next/image'
import imran from '../public/remove-bd-imran.png'
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? 'dark' : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' bg-white px-10  dark:bg-gray-900'>
        <section className=' min-h-screen '>
          <nav className='py-10 mb-12 flex justify-between dark:text-white'>
            <h1 className=' text-xl font-burtons'>
              Imran Hossen
            </h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='cursor-pointer text-2xl' onClick={() => setDarkMode(!darkMode)} /></li>
              <li><a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="https://drive.google.com/file/d/1Hh83c26OkKC28RlYetYWjvDGr8wwXHQ8/view">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className=' text-5xl py=2 text-teal-600 font-medium'>Imran Hossen</h2>
            <h3 className='text-2xl py-2 dark:text-white'>Full Stack Developer and Problem Solver</h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200'>
              Dedicated and efficient full stack developer with 1+ years of experience in application layers. I
              have completed many full-stack web applications. Seeking to further improve DSA and Algo and
              JavaScript skills as the future full stack developer.
            </p>
            <div className='text-5xl flex justify-center gap-5 py-3 text-gray-600  dark:text-gray-400'>
              <a href="">
                <AiFillLinkedin />
              </a>
              <a href="">
                <AiFillGithub />
              </a>
              <a href="">
                <AiFillFacebook />
              </a>
            </div>
            <div className=' flex justify-center items-center relative mx-auto rounded-full bg-gradient-to-b  from-teal-500 w-96 h-96 mt-20  overflow-hidden'>
              <Image src={imran} layout='fill' objectFit='cover' />
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illo asperiores reprehenderit vitae molestiae nisi doloribus inventore dignissimos odit distinctio?
              <span className="text-teal-500"> agencies </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illo asperiores reprehenderit vitae molestiae nisi doloribus inventore dignissimos odit distinctio?
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illo asperiores reprehenderit vitae molestiae nisi doloribus inventore dignissimos odit distinctio?
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illo asperiores reprehenderit vitae molestiae nisi doloribus
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illo asperiores reprehenderit vitae molestiae nisi doloribus
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illo asperiores reprehenderit vitae molestiae nisi doloribus
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, iure illum? Eos doloremque cum nisi laudantium modi, rem officiis quidem ipsum vitae porro pariatur delectus earum unde aperiam in reprehenderit.
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, iure illum? Eos doloremque cum nisi laudantium modi, rem officiis quidem ipsum vitae porro pariatur delectus earum unde aperiam in reprehenderit.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, iure illum? Eos doloremque cum nisi laudantium modi, rem officiis quidem ipsum vitae porro pariatur delectus earum unde aperiam in reprehenderit.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 flex ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
