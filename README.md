## Project Setup Steps:

(to reference, not needed for individual dev usage)

1. Create git repository
2. Initialize nextJS project - while in the project directory run: `npx create-next-app@latest ./`
3. Initialize [ShadCN](https://ui.shadcn.com/) - `NODE_TLS_REJECT_UNAUTHORIZED=0 npx shadcn@latest init`

## Styling

The project uses [TailwindCSS](https://tailwindcss.com/docs/flex) to easily style components with TailwindCSS's shorthand. Follow the link to the TailwindCSS docs to learn specifics. A useful tip is to google "tailwindcss padding" for example and the search will result in a TailwindCSS doc regarding padding so you can easily find the correct page instead of sifting through their docs manually.

## UI Components

The project uses ShadCN (linked above) to implement common components in a uniform way.
Currently `Button` and `Card` components have been installed from ShadCN. ShadCN is more like a library that allows you to install components into your project (directory: `components/ui`) that live completely locally in the project and do not reference any outside source once installed.

To install a component, find one from their docs. For example to install the `Button` component, the command: `NODE_TLS_REJECT_UNAUTHORIZED=0 npx shadcn@latest add button` was run.

Boilerplate docs from nextJS:

## Getting Started

First, install node modules: `npm install`

Then, run the development server:

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
