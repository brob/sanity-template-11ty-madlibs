# Madlib generator with Sanity, Netlify, and 11ty Serverless

This repository is a demo for this Smashing Magazine article.

It creates a madlib generator that stores madlib templates and user-generated madlibs in a Sanity content lake. It builds static and server-rendered pages with 11ty, and uses Netlify On-Demand builders and serverless functions to add interactivity.

## Install and run

### Site setup

To set up and run the site locally, you'll need Netlify's CLI installed globally.

```bash
cd site
npm install
npm install -g netlify-cli
netlify dev
```

### Studio setup

```bash
cd studio
sanity install
npm start
```