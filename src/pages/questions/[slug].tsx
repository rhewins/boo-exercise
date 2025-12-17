import Head from 'next/head';
import Page from '@/components/layout/Page';
import {
  LeftColumn,
  CenterColumn,
  RightColumn,
} from '@/components/layout/TripleColumns';

import type { Question } from '@/types/question';
import { mockQuestion } from '@/mock/question';
import QuestionCard from '@/components/features/question/QuestionCard';

import type { Tag } from '@/types/tag';
import { mockTag } from '@/mock/tag';
import TagCard from '@/components/features/TagCard';

import { mockRelatedQuestion } from '@/mock/related';
import RelatedQuestionCard from '@/components/features/question/RelatedQuestionCard';

export default function QuestionPage() {
  const question: Question = mockQuestion;
  const tag: Tag[] = mockTag;
  const relatedQuestionCard: Question[] = mockRelatedQuestion;

  return (
    <>
      <Head>
        <title>
          What would you choose: a relationship full of adventure | Questions
          Universe - 11/07/2025 24:00
        </title>
      </Head>

      <Page>
        <LeftColumn>
          <TagCard tags={tag} />
        </LeftColumn>

        <CenterColumn>
          <QuestionCard question={question} />
        </CenterColumn>

        <RightColumn>
          <h2 className='text-xl font-medium mb-2'>Related Posts</h2>
          <RelatedQuestionCard questions={relatedQuestionCard} />
        </RightColumn>
      </Page>
    </>
  );
}
