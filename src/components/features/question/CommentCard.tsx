import type { Comment } from '@/types/comment';
import { Card } from '@/components/ui/Card';
import Image from 'next/image';

type Props = {
  comments: Comment[];
};

export default function CommentCard({ comments }: Props) {
  return (
    <>
      {comments.map((comment) => (
        <Card key={comment.id} className='gap-y-2'>
          <Card.Header>
            <div className='h-15 w-15 rounded-full bg-gray-300 mr-3' />

            <div className='flex flex-col gap-y-0.5 flex-grow'>
              <div className='flex items-center justify-between gap-4'>
                <button className='cursor-pointer text-start text-md hover:text-accent w-full'>
                  {comment.author}
                </button>

                <p className='shrink-0 text-off'>{comment.date}</p>
              </div>

              <div className='flex flex-row flex-wrap w-fit gap-x-2'>
                {comment.personality.map((personality) => (
                  <div
                    key={personality}
                    className='cursor-pointer shadow-sm rounded-xl px-2.5 py-1 w-fit duration-500 bg-cyan-300 text-black text-xs'
                  >
                    {personality}
                  </div>
                ))}
              </div>
            </div>
          </Card.Header>

          <Card.Content className='flex min-w-0 items-start justify-between gap-2 font-medium text-xl'>
            <h1 className='min-w-0 text-primary-dark text-sm font-medium text-start'>
              {comment.message}
            </h1>
          </Card.Content>

          <Card.Footer className='flex items-center gap-x-2 text-off'>
            <Image src='/icons/like.svg' alt='Like' width={24} height={24} />
            {comment.stats?.totalLikes}

            <Image src='/icons/soul.svg' alt='Soul' width={24} height={24} />
            {comment.stats?.totalSouls}

            <Image src='/icons/share.svg' alt='Share' width={24} height={24} />
          </Card.Footer>
        </Card>
      ))}
    </>
  );
}
