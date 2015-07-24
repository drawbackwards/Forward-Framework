![forward-wordpress-starter-theme](https://cloud.githubusercontent.com/assets/1250818/8885259/dc5923d0-3212-11e5-9579-25d6731ba6ca.jpg)

# Forward Framework

A killer WordPress theme framework built using underscores, gulp, sass, bourbon, bourbon neat, bower & browsersync. This project is also available as a pre-compiled [WordPress starter theme](https://github.com/drawbackwards/Forward-WordPress-Starter-Theme/releases).

## Setup

#### Install Gulp Globally

	$ npm install --global gulp

#### Install Gulp Plugins

	$ npm install

#### Install Bower

	$ npm install -g bower

#### Install Bower Components

	$ bower install

## Project Commands

#### gulp

Running `gulp` or `gulp watch` will start the watch process & browser-sync. Changes to `src/` are written to `build/`.

	$ gulp

#### gulp build

Running `gulp build` will rebuild the `build/` directory without starting a watch process.

	$ gulp build

#### gulp dist

Running `gulp dist` will generate an optimized, production ready version of the theme based on `build/`. This will be the folder you deploy to production.

	$ gulp dist

## License

* Licensed under the [GPLv3](http://www.gnu.org/licenses/gpl.txt).

## Credits

* [Underscores](https://github.com/Automattic/_s)
* [Alexander Synaptic](https://github.com/synapticism/wordpress-gulp-bower-sass)
* [CSScomb](http://csscomb.com)
* [Gulp](http://gulpjs.com)
* [Sass](http://sass-lang.com)
* [Bourbon](https://github.com/thoughtbot/bourbon)
* [Bourbon Neat](http://neat.bourbon.io)
* [Bower](http://bower.io)
* [Browsersync](http://www.browsersync.io)
* [CSSmin](https://www.npmjs.com/package/gulp-cssmin)
* [Autoprefixer](https://github.com/postcss/autoprefixer-core)
* [Combine Media Queries](https://www.npmjs.com/package/gulp-combine-media-queries)
* [Pixrem](https://www.npmjs.com/package/gulp-pixrem)
* [Normalize](https://necolas.github.io/normalize.css/)
