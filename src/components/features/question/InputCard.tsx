import { Card } from '@/components/ui/Card';
import Image from 'next/image';

export default function InputCard() {
  return (
    <Card className='gap-y-2'>
      <Card.Content className='font-medium text-xl'>
        <div className='relative flex-grow'>
          <input
            id='comment'
            placeholder='Comment'
            className='text-sm max-h-72 h-5 font-normal w-full mb-6'
            type='text'
          />
        </div>
      </Card.Content>

      <Card.Footer className='gap-x-2 text-off'>
        <Image src='/icons/image.svg' alt='Image' width={24} height={24} />

        <Image src='/icons/gif.svg' alt='Gif' width={24} height={24} />

        <Image src='/icons/send.svg' alt='Send' width={24} height={24} />
      </Card.Footer>
    </Card>
  );
}
