import type { Tag } from '@/types/tag';
import { Card } from '@/components/ui/Card';

type Props = {
  tags: Tag[];
};

export default function TagCard({ tags }: Props) {
  return (
    <Card className='gap-y-2'>
      <Card.Header>
        <div className='text-start text-xl font-medium md:block'>Universes</div>
      </Card.Header>

      <Card.Content className='font-medium text-xl'>
        <div className='overflow-y-auto grow px-5 pb-5 pt-5 flex flex-col gap-2'>
          {tags.map((tag) => (
            <div
              key={tag.id}
              className='flex flex-row gap-2.5 flex-wrap items-center justify-between'
            >
              <p className='flex cursor-pointer shadow text-xs rounded-xl px-2.5 py-1.5'>
                #{tag.name}
              </p>
              <p className='ps-2.5 text-off text-xs duration-500'>26M souls</p>
            </div>
          ))}
        </div>
      </Card.Content>
    </Card>
  );
}
