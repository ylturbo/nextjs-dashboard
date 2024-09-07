import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon, CheckIcon, BackwardIcon, VideoCameraIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  const list = [
    {
      year: 2022,
      boyText: '我们恋爱啦🥰',
      girlText: '我们恋爱啦🥰'
    },
    {
      year: 2023,
      boyText: '宝宝～我爱你😍',
      girlText: '老公～我也爱你😍'
    },
    {
      year: 2024,
      boyText: '我们结婚啦😘',
      girlText: '我们结婚啦😘'
    },
  ];
  return (
    <main className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className='py-10 px-4 min-h-screen bg-white/30 backdrop-blur-sm'>
        <div className='max-w-5xl mx-auto'>
          <div className="flex item-center justify-between">
            <div className='flex items-center gap-2 text-md'>
              <BackwardIcon className="h-5 w-5 md:h-10 md:w-10 text-white" />
              <Image
                src='/soul.webp'
                width={20}
                height={20}
                className='block md:hidden rounded-sm'
                alt="soul app icon"
              />
              <Image
                src='/soul.webp'
                width={30}
                height={30}
                className='hidden md:block rounded-sm'
                alt="soul app icon"
              />
            </div>
            <p className='text-2xl md:text-4xl text-white font-bold'>我们俩的可爱情头</p>
            {/* <p className='text-md text-white'>Feature❤️</p> */}
            <VideoCameraIcon className='w-5 md:w-10 text-white' />
          </div>
          <p className="py-4 md:py-10 text-center text-white text-base">✨2022.08.25✨</p>
          {
            list.map((item) => (
              <div className="w-full py-4" key={item.year}>
                <div className="flex justify-center py-4 md:py-8">
                  <p className='text-lg md:text-3xl bg-black/30 backdrop-blur-sm px-4 md:px-8 rounded-2xl text-white'>{item.year}</p>
                </div>
                <div className="flex items-center">
                  <Image
                    src={`/boy-${item.year}.jpg`}
                    width={200}
                    height={200}
                    className='hidden md:block rounded-xl my-4'
                    alt="avatar of the dashboard project showing desktop version"
                  />
                  <Image
                    src={`/boy-${item.year}.jpg`}
                    width={80}
                    height={80}
                    className='block md:hidden rounded-xl my-4'
                    alt="avatar of the dashboard project showing mobile version"
                  />
                  <div className={`${styles.chatBubbleLeft} ml-4 p-4 min-w-24 bg-white rounded-2xl`}>
                    <p className='min-w-24 text-xl md:text-3xl'>{item.boyText}</p>
                  </div>
                </div>
                <div className='flex items-center justify-end'>
                  <div className={`${styles.chatBubbleRight} mr-4 p-4 min-w-24 bg-green-200 rounded-2xl`}>
                    <p className='text-xl md:text-3xl'>{item.girlText}</p>
                    <p className='flex justify-end md:pt-4 text-md md:text-xl text-green-500'>
                      <span className='pr-1'>5:20</span>
                      <CheckIcon className='w-5 text-green-500' />
                      <CheckIcon className='w-5 text-green-500 -ml-6' />
                    </p>
                  </div>
                  <Image
                    src={`/girl-${item.year}.jpg`}
                    width={200}
                    height={200}
                    className='hidden md:block rounded-xl my-4'
                    alt="avatar of the dashboard project showing desktop version"
                  />
                  <Image
                    src={`/girl-${item.year}.jpg`}
                    width={80}
                    height={80}
                    className='block md:hidden rounded-xl my-4'
                    alt="avatar of the dashboard project showing mobile version"
                  />
                </div>
              </div>
            ))     
          }
          {/* <Link
            href="/login"
            className="flex items-center justify-center gap-5 text-sm"
          >
            <ArrowRightIcon className="w-5 md:w-6" />
          </Link> */}
          <div className="flex items-center justify-center gap-2 text-white text-sm">
          <p className="py-10 text-center">Waiting Open</p>
          <ArrowRightIcon className="w-5 md:w-6 text-sm" />
          </div>
        </div>
      </div>
    </main>
  );
}
