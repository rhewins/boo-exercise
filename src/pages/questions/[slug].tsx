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

export default function QuestionPage() {
  const question: Question = mockQuestion;

  return (
    <>
      <Head>
        <title>
          What would you choose: a relationship full of adventure | Questions
          Universe - 11/07/2025 24:00
        </title>
      </Head>

      <Page>
        <LeftColumn>Left</LeftColumn>
        <CenterColumn>
          <QuestionCard question={question} />
        </CenterColumn>
        <RightColumn>Right</RightColumn>
      </Page>
    </>
  );
}
