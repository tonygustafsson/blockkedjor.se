var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var sass = require('metalsmith-sass');
var watch = require('metalsmith-watch');

Metalsmith(__dirname)
    .metadata({
        title: 'My Static Site & Blog',
        description: "It's about saying »Hello« to the World.",
        generator: 'Metalsmith',
        url: 'http://www.metalsmith.io/'
    })
    .source('./docs')
    .destination('./dist')
    .clean(true)
    .use(markdown())
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
