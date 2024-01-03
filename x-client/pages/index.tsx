import Image from 'next/image'

import { BsTwitter } from 'react-icons/bs'
import { BiHomeCircle } from 'react-icons/bi'
import React from 'react'
import { FaXTwitter } from "react-icons/fa6"
import FeedCard from '@/components/FeedCard'



interface TwitterSidebarButton {
  title: string
  icon: React.ReactNode
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />
  },
  {
    title: "Explore",
    icon: <BiHomeCircle />
  },
  {
    title: "Notifications",
    icon: <BiHomeCircle />
  },
  {
    title: "Messages",
    icon: <BiHomeCircle />
  },
  {
    title: "Bookmarks",
    icon: <BiHomeCircle />
  },
  {
    title: "Twitter Blue",
    icon: <BiHomeCircle />
  },
  {
    title: "Profile",
    icon: <BiHomeCircle />
  },
  {
    title: "More",
    icon: <BiHomeCircle />
  }

]

export default function Home() {
  return (
    <main className='w-screen' >
      <div className='grid grid-cols-12 h-screen xl:max-w-screen-lg max-w-screen-md mx-auto '>
        <div className='col-span-3 border-2 border-white'>
          <div className='text-3xl w-fit h-fit hover:bg-gray-600 rounded-full p-2 m-1 cursor-pointer transition-all'>
            <FaXTwitter />
          </div>
          <div className=' p-2 font-bold '>
            <ul>
              {
                sidebarMenuItems.map((item) => (
                  <li  className='hover:bg-gray-50/30 rounded-full m-4 py-2 px-4 cursor-pointer flex items-center space-x-2' key={item.title}>
                    <span>
                      {item.icon}
                    </span>
                    <span>
                      {item.title}
                    </span>
                    
                  </li>
                )
                )
              }
              <button className='bg-blue-500 hover:bg-sky-500 p-3 w-[70%] mx-auto grid rounded-full'>
                Tweet
              </button>
            </ul>
          </div>
        </div>
        <div className='col-span-6 overflow-y-scroll hide-scrollbar'>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className='col-span-3 bg-red-500'>hello</div>
      </div>
    </main>
  )
}
