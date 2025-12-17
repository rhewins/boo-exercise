import Link from 'next/link';
import Image from 'next/image';

export default function LeftSidebar() {
  return (
    <nav className='fixed overflow-y-scroll top-16 left-0 bottom-0 w-64 p-4 space-y-3 text-sm text-white flex flex-col justify-between duration-500'>
      <div className='flex flex-col gap-y-6 ps-1'>
        <Link href='/' className='flex flex-row gap-x-4'>
          <div className='w-6 h-6 min-w-[1.5rem]'>
            <Image src='/icons/home.svg' alt='Home' width={24} height={24} />
          </div>
          <div>Home</div>
        </Link>

        <Link href='/' className='flex flex-row gap-x-4'>
          <div className='w-6 h-6 min-w-[1.5rem]'>
            <Image src='/icons/heart.svg' alt='Match' width={24} height={24} />
          </div>
          <div>Match</div>
        </Link>

        <Link href='/' className='flex flex-row gap-x-4'>
          <div className='w-6 h-6 min-w-[1.5rem]'>
            <Image
              src='/icons/message.svg'
              alt='Message'
              width={24}
              height={24}
            />
          </div>
          <div>Messages</div>
        </Link>

        <Link href='/' className='flex flex-row gap-x-4'>
          <div className='w-6 h-6 min-w-[1.5rem]'>
            <Image
              src='/icons/ghost.svg'
              alt='Profile'
              width={24}
              height={24}
            />
          </div>
          <div>Profile</div>
        </Link>

        <Link href='/' className='flex flex-row gap-x-4 mt-6'>
          <div className='w-6 h-6 min-w-[1.5rem]'>
            <Image
              src='/icons/ghost-group.svg'
              alt='Personality'
              width={24}
              height={24}
            />
          </div>
          <div>Personality Database</div>
        </Link>

        <Link href='/' className='flex flex-row gap-x-4'>
          <div className='w-6 h-6 min-w-[1.5rem]'>
            <Image src='/icons/test.svg' alt='Test' width={24} height={24} />
          </div>
          <div>Personality Tests</div>
        </Link>

        <Link href='/' className='flex flex-row gap-x-4'>
          <div className='w-6 h-6 min-w-[1.5rem]'>
            <Image
              src='/icons/resources.svg'
              alt='Resources'
              width={24}
              height={24}
            />
          </div>
          <div>Resources</div>
        </Link>
      </div>

      <div className='flex flex-col gap-y-2 ps-1 mt-6'>
        <div className='flex items-center'>
          <p className='text-off text-xs line-clamp-1'>
            We stand for love. &#10084;
          </p>
        </div>

        <div className='flex gap-x-3 text-off'>
          <Link href='/terms-and-conditions'>
            <p className='text-xs text-gray line-clamp-1'>Terms</p>
          </Link>

          <Link href='/privacy-policy'>
            <p className='text-xs text-gray line-clamp-1'>Privacy</p>
          </Link>

          <Link href='/faq'>
            <p className='text-xs text-gray line-clamp-1'>FAQ</p>
          </Link>

          <Link href='/safety-tips'>
            <p className='text-xs text-gray line-clamp-1'>Safety Tips</p>
          </Link>
        </div>

        <div className='text-off text-xs line-clamp-1'>
          © 2025 Boo Enterprises, Inc.
        </div>
      </div>
    </nav>
  );
}
