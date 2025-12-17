import type { Question } from '@/types/question';
import { Card } from '@/components/ui/Card';
import Image from 'next/image';

type Props = {
  question: Question;
};

export default function QuestionCard({ question }: Props) {
  return (
    <Card className='gap-y-2'>
      <Card.Header>
        <button className='text-sm hover:text-accent cursor-pointer text-start'>
          Question of the Day
        </button>
      </Card.Header>

      <Card.Content className='font-medium text-xl'>
        <h1>{question.title}</h1>
        <p className='text-off'>{question.date}</p>
      </Card.Content>

      <Card.Footer className='gap-x-2 text-off'>
        <Image src='/icons/like.svg' alt='Like' width={24} height={24} />
        {question.stats?.totalLikes}

        <Image src='/icons/soul.svg' alt='Soul' width={24} height={24} />
        {question.stats?.totalSouls}

        <Image src='/icons/share.svg' alt='Share' width={24} height={24} />
      </Card.Footer>
    </Card>  );
}
