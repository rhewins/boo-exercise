import Image from 'next/image';

export default function Header() {
  return (
    <header className='fixed top-0 left-0 w-full h-16 px-4 pe-5 ps-[1.375rem] py-5 flex gap-x-3 items-center bg-black'>
      <button id='hamburger' className='cursor-pointer'>
        <Image src='/icons/drawer.svg' alt='Drawer' width={20} height={20} />
      </button>

      <div className='font-bold text-xl'>BOO</div>

      <div className='relative flex-grow'>
        <Image
          src='/icons/search.svg'
          alt='Search'
          width={20}
          height={20}
          className='absolute top-[9px] left-3'
        />
        <input
          type='text'
          id='search'
          placeholder='Search'
          className='card-round shadow w-full py-2 pl-10'
        />
      </div>

      <div className='relative w-7 h-7'>
        <button id='notification' className='cursor-pointer'>
          <Image
            src='/icons/notification.svg'
            alt='Notification'
            width={30}
            height={30}
          />
        </button>
      </div>
    </header>
  );
}
