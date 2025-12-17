This is a [Next.js](https://nextjs.org) exercise project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Overview
This exercise attempt to recreate page from: https://boo.world/u/questions/dwsQOX/what-would-you-choose-a-relationship-full-of

So, when runs on a local the url will be closed to it (stripped out random path character such as `u` and `dwsQOX`): `http://localhost:3000/questions/[slug:what-would-you-choose-a-relationship-full-of]` 

A final result can also be looking as a screenshot on folder `docs/Screenshot-xxx.png`

## Tech Stack
- Next Framework
- Tailwind

## Project Structure
```bash
boo-exercise/
  ├── docs/
  │   └── Screenshot 2025-12-17 142231.png
  ├── public/
  │   └── icons/
  │       ├── drawer.svg
  │       ├── file.svg
  │       ...
  ├── src/
  │   ├── components/
  │   │   ├── features/
  │   │   │   ├── question/
  │   │   │   │   ├── CommentCard.tsx
  │   │   │   │   ├── InputCard.tsx
  │   │   │   │   ├── QuestionCard.tsx
  │   │   │   │   └── RelatedQuestionCard.tsx
  │   │   │   └── TagCard.tsx
  │   │   ├── layout/
  │   │   │   ├── Header.tsx
  │   │   │   ├── LeftSidebar.tsx
  │   │   │   ├── Page.tsx
  │   │   │   └── TripleColumns.tsx
  │   │   └── ui/
  │   │       └── Card.tsx
  │   ├── lib/
  │   │   └── cn.ts
  │   ├── mock/
  │   │   ├── question.ts
  │   │   ├── related.ts
  │   │   └── tag.ts
  │   ├── pages/
  │   │   ├── questions/
  │   │   │   └── [slug].tsx
  │   │   ├── _app.tsx
  │   │   └── favicon.ico
  │   ├── styles/
  │   │   └── globals.css
  │   └── types/
  │       ├── comment.ts
  │       ├── question.ts
  │       └── tag.ts
  ├── eslint.config.mjs
  ├── next-env.d.ts
  ├── next.config.ts
  ├── package-lock.json
  ├── package.json
  ├── postcss.config.mjs
  ├── README.md
  ├── tailwind.config.ts
  └── tsconfig.json
```
### The Explanation of each folder:
  - docs/ - Documentation and screenshots
  - public/icons/ - SVG icon assets
  - src/components/ - React components organized by features, layout, and UI
  - src/lib/ - Utility functions
  - src/mock/ - Mock data for development
  - src/pages/ - Next.js pages with dynamic routing
  - src/styles/ - Global CSS styles
  - src/types/ - TypeScript type definitions

### The Concept
The concept behind this is attempt to reduce repetitive similar component, in this case is a card like interface with glow
grey shadow. And if i take a look, it always consist of same component which is own self header, content, and footer. So, i create
an atomic component called `Card.tsx` (inside folder components/ui/). This atomic component is called by features component, if it does
using it. Then a components in folder feature will be called on Pages. So this is how the picture:

```bash
ui --> feature (a group of ui) --> pages (a group of feature)
```
But it's not really an atomic concept, i called it composable component, why? because it's not just called an atom component and forming together, but on each feature we can independently inject the content of the atom component from it's parent, make it more dynamic and convenience to add.

### The Type
I ensure that there is no use of type `any`. So, each type carefully created and can be found at folder `types`. The form not represent a data JSON fetched from API, it's a final result of getting the core data.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Time Spent
Start date: 17 December 2025
Start time: 11.00 am
End time: 03.00 pm

## What's Completed
- Use Frontend framework Next.js 
- Tailwind as CSS framework
- Mobile responsive
- Implement Pages Router
- Mock data needed
- Reasoning project folder structure
