import type { Question } from '@/types/question';
import { Card } from '@/components/ui/Card';
import Image from 'next/image';

type Props = {
  questions: Question[];
};

export default function RelatedQuestionCard({ questions }: Props) {
  return (
    <>
      {questions.map((question) => (
        <Card key={question.id} className='gap-y-2'>
          <Card.Header>
            <button className='cursor-pointer text-start text-sm hover:text-accent'>
              Question of the Day
            </button>
          </Card.Header>

          <Card.Content className='flex min-w-0 items-start justify-between gap-2 font-medium text-xl'>
            <h1 className='min-w-0 text-primary-dark text-xl font-medium text-start'>
              {question.title}
            </h1>
            <p className='shrink-0 text-off'>{question.date}</p>
          </Card.Content>

          <Card.Footer className='flex items-center gap-x-2 text-off'>
            <Image src='/icons/like.svg' alt='Like' width={24} height={24} />
            {question.stats?.totalLikes}

            <Image src='/icons/soul.svg' alt='Soul' width={24} height={24} />
            {question.stats?.totalSouls}

            <Image src='/icons/share.svg' alt='Share' width={24} height={24} />
          </Card.Footer>
        </Card>
      ))}
    </>
  );
}
