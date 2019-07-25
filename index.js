var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var sass = require('metalsmith-sass');
var watch = require('metalsmith-watch');
var canonical = require('metalsmith-canonical');

Metalsmith(__dirname)
    .metadata({
        pageTitle: 'Blockkedjor.se',
        pageUrl: 'https://www.blockkedjor.se/',
        googleAnalyticsId: 'UA-112261704-2'
    })
    .source('./docs')
    .destination('./dist')
    .clean(true)
    .use(markdown())
    .use(
        canonical({
            hostname: 'https://www.blockkedjor.se/'
        })
    )
    .use(
        layouts({
            engine: 'handlebars'
        })
    )
    .use(
        sass({
            outputStyle: 'expanded'
        })
    )
    .use(
        watch({
            paths: {
                '${source}/**/*': true,
                '${source}/styles/**/*': '**/*.scss',
                'layouts/**/*': '**/*.md'
            },
            livereload: true
        })
    )
    .build(function(err, files) {
        if (err) {
            throw err;
        }
    });
