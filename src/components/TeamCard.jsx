"use client"
import { useRouter } from 'next/navigation';
import Image from 'next/image';
export const TeamCard=({teamName,team,image,url})=>{
    const router=useRouter();
    const onTeamSelect=()=>{
        router.push(url);
    }
    return (
        <div className='p-5 m-3 hover:bg-gray-700 rounded-md duration-300 z-40 cursor-pointer' onClick={onTeamSelect}>
            <div className='rounded-full h-[310px] w-[310px] flex justify-center items-center bg-black'>
                 <Image alt='Team Name' className='rounded-full h-[300px] w-[300px] m-2 object-cover' src={image}/>
            </div>
            <h1 className='text-white text-5xl font-bold m-1'>{teamName}</h1>
            <h3 className='text-3xl text-white font-semibold m-1'>{team}</h3>
        </div>
    )
}