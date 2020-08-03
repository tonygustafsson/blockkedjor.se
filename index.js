const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');
const sass = require('metalsmith-sass');
const watch = require('metalsmith-watch');
const canonical = require('metalsmith-canonical');
const sitemap = require('metalsmith-sitemap');
const msIf = require('metalsmith-if');
const dateFormatter = require('metalsmith-date-formatter');

const pageUrl = 'https://www.blockkedjor.se/';

const productionMode = process.argv[2] === 'build';

if (productionMode) {
    console.log('Building in production mode.');
} else {
    console.log('Building in development mode.');
}

Metalsmith(__dirname)
    .metadata({
        pageTitle: 'Blockkedjor.se',
        pageUrl: pageUrl,
        googleAnalyticsId: 'UA-144587630-1',
        productionMode: productionMode
    })
    .source('./docs')
    .destination('./dist')
    .clean(true)
    .use(markdown())
    .use(
        canonical({
            hostname: pageUrl
        })
    )
    .use(
        dateFormatter({
            dates: [
                {
                    key: 'modified',
                    format: 'YYYY-MM-DD'
                },
                {
                    key: 'created',
                    format: 'YYYY-MM-DD'
                }
            ]
        })
    )
    .use(
        layouts({
            engine: 'handlebars',
            default: 'default.hbs',
            directory: './layouts',
            pattern: '**/*.html'
        })
    )
    .use(
        sass({
            outputStyle: productionMode ? 'compressed' : 'expanded'
        })
    )
    .use(
        msIf(
            !productionMode,
            watch({
                paths: {
                    '${source}/**/*': true,
                    '${source}/styles/**/*': '**/*',
                    'layouts/**/*': '**/*.hbs'
                },
                livereload: !productionMode
            })
        )
    )
    .use(
        sitemap({
            hostname: pageUrl,
            modifiedProperty: 'modified'
        })
    )
    .build(function (err, files) {
        if (err) {
            throw err;
        }
    });
