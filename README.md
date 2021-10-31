# Sveltekit Components

Courtesy of [LevelUpTutorial by Scott Tolinski](https://leveluptutorials.com/tutorials/building-svelte-components/getting-started)

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);


## JS Plugins

[Marked.js](https://marked.js.org/)
```bash
npm install -g marked
```

[Storybook.js](https://storybook.js.org/docs/react/get-started/install)

Storybook is a plugin that allows you to test out things, build components and see them in action  without them having to be inside your application.


```bash
npx sb init
```
Change `./.storybook/main.js` to `./.storybook/main.cjs`.
Change `./.storybook/preview.js` to `./.storybook/preview.cjs`.

`.cjs` stands for common JS to allow `require` module syntax.

Remove the `Svelte options` from `./.storybook/main.cjs`.

```js
// Remove this
"svelteOptions": {
  "preprocess": require("../svelte.config.js").preprocess
}
```

To run Storybook
```bash
  npm run storybook
```
This will open the following URL in the browser: http://localhost:6006/?path=/story/example-introduction--page

With the `@storybook/addon-svelte-csf` addon in ./.storybook/main.cjs`, we can write stories in svelte language in the `./stories` directory or files with stories extension. Storybook looks for files with the story extentions e.g. `.stories.js`.



## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
