import React from 'react'
import Image from 'next/image'
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";

const FeedCard: React.FC = () => {
    return (
        <div className='m-2 border-b border-zinc-800 hover:bg-zinc-800' >

            <div className='grid grid-cols-12 p-2'>
                <div className='col-span-1'>
                    <Image src="https://avatars.githubusercontent.com/u/96693300?v=4" alt='user' height={50} width={50} />
                </div>
                <div className='col-span-11'>
                    <div className='flex space-x-1 text-sm'>
                        <p className='ml-2 font-semibold '>
                            Name Sharma
                        </p>
                        <p className='text-zinc-600'>
                            @sharma_ji
                        </p>
                    </div>
                    <div className='text-sm px-2'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut perspiciatis omnis architecto ipsum sint commodi debitis ad corrupti adipisci rem!
                        </p>
                    </div>
                    
                </div>


            </div>
            <div className='flex justify-around items-center px-4 text-lg'>
                        <p className=' p-2'>
                            <BiMessageRounded className="hover:text-zinc-500 " />
                        </p>
                        <p>
                            <AiOutlineRetweet className="hover:text-zinc-500 " />
                        </p>
                        <FaRegHeart className="hover:text-zinc-500 " />
                        <p>
                            <IoStatsChartSharp className="hover:text-zinc-500 " />
                        </p>
                        <p>
                            <FiUpload className="hover:text-zinc-500" />
                        </p>
                    </div>

        </div>
    )
}


export default FeedCard;