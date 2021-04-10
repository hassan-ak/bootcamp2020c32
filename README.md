# bootcamp2020c32
- JAM-Stack

## Step00 Gatsby Typescript Helloworld
External Links
- [Next.js vs. GatsbyJS: A developer’s perspective](https://blog.logrocket.com/next-js-vs-gatsbyjs-a-developers-perspective/)
- [Which To Choose in 2020: NextJS or Gatsby?](https://medium.com/frontend-digest/which-to-choose-in-2020-nextjs-vs-gatsby-1aa7ca279d8a)
- [Install Node.js](https://nodejs.org/en/download/)
- [Read Gatsby Receipe Announcement](https://www.gatsbyjs.org/blog/2020-04-15-announcing-gatsby-recipes/)
- Steps
  - npm install -g gatsby-cli@latest
  - gatsby new step00_gatsby_typescript_helloworld  https://github.com/gatsbyjs/gatsby-starter-minimal
  - cd step00_gatsby_typescript_helloworld
  - npm install gatsby@latest
  - gatsby recipes
  - Note: Select Add Typescript to see what is in the recipe
  - gatsby recipes typescript --install
  - Create index.tsx page in src/pages directory, any React component defined in src/pages/*.tsx will automatically become a page.
  - gatsby develop
- [Read TypeScript Plugin Docs](https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/)
- [Read this Tutorial](https://www.gatsbyjs.org/tutorial/part-one/)
- [Learn more about recipes](https://www.gatsbyjs.org/docs/recipes/)

## Step01 Page Components Linking
External Links
- [Read this Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-one/)

## Step02 Sub Components
External Links
- [Read this Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-one/)

## Step03 Layout Components
External Links
- [Read this Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-one/)
- [and this](https://www.gatsbyjs.com/docs/how-to/routing/layout-components/)

## Step04 Global Styles
External Links
- [Introduction to Styling in Gatsby](https://www.gatsbyjs.com/docs/tutorial/part-two/)
- [Learn more about Gatsby Browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/)
- Steps
  - Create global.css in src/styles directory
  - Create gatsby-browser.js and import the css file

## Step05 Component Scoped CSS
External Links
- [What are CSS Modules?](https://css-tricks.com/css-modules-part-1-need/)
- [Using component-scoped CSS](https://www.gatsbyjs.com/docs/tutorial/part-two/#using-component-scoped-css)
- Steps
  - Create desc.module.css in pages directory
  - Create desc.tsx component page and import the css file
