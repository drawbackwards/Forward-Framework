![forward-wordpress-starter-theme](https://cloud.githubusercontent.com/assets/1250818/8885259/dc5923d0-3212-11e5-9579-25d6731ba6ca.jpg)

# Forward Framework Child Theme

A Child Theme starting point of the Forward Framework. Make sure to read [Setup](#setup) & [Overriding Styles](#overriding-styles)

## Setup

#### Install The Forward Parent Theme

Clone/Fork/Download the [Forward WordPress Starter Theme](https://github.com/drawbackwards/Forward-WordPress-Starter-Theme) to `wp-content/themes/forward`

    $ cd ~/Sites/[example-wordpress-install]/wp-content/themes/

    $ git clone git@github.com:drawbackwards/Forward-WordPress-Starter-Theme.git forward


#### Install This Child Theme

Clone/Fork/Download this project wherever you like and symlink `build/` to `wp-content/themes/[forward-child]`.

__Note:__ Values `[inside-brackets]` can be changed.

    $ git clone -b child-theme git@github.com:drawbackwards/Forward-Framework.git ~/[Sites]/[forward-framework-child-theme]

    $ cd ~/Sites/[example-wordpress-install]/wp-content/themes/
    
    $ ln -s ~/Sites/forward-framework-child-theme/build [forward-child]

Your themes directory should now look like this:

    `- wp-content/
      |- plugins/
      `- themes/
        |- forward/
        |- forward-child -> ~/Sites/forward-framework-child-theme/build
        `- twentyfifteen/

#### Modify Project Variables

1. Open `gulpfile.js` and modify the `project` and `url` variables accordingly.
2. __MAMP Users:__ Enable the port 8888 parameter for BrowserSync (Search for 'Port setting for MAMP users' in `gulpfile.js`).

#### Install Gulp Globally

    $ npm install --global gulp

#### Install Gulp Plugins / Dependencies

    $ cd ~/Sites/forward-framework-child-theme/

	$ npm install

#### Install Bower & Components

	$ npm install -g bower

    $ bower install

#### Generate Theme Files

This will generate the initial theme files in `build/`.

	$ gulp build

#### Activate Theme & Create a Navigation Menu

1. Activate theme at `[localhost]/wp-admin/themes.php`
2. Create a new menu at `[localhost]/wp-admin/nav-menus.php` and assign to the _Primary Menu_ Theme location.

## Project Commands

#### gulp build

Running `gulp build` will generate/rebuild the `build/` directory without starting a watch process.

    $ gulp build

#### gulp

Running `gulp` or `gulp watch` will start the watch process & browser-sync. Changes to `src/` are written to `build/`.

	$ gulp

#### gulp dist

Running `gulp dist` will generate an optimized, production ready version of the theme based on `build/`. This will be the folder you deploy to production.

	$ gulp dist

## Overriding Styles

Like a parent theme, edits to `scss/forward/` should be avoided. All variables, mixins and styles within `scss/forward/` can be overridden by copying & pasting into the corresponding templates in `scss/`. Gulp will not output duplicate/unnecessary code.

    `- scss/
      |- forward/
      |  |- mixins.scss
      |  |- variables.scss
      |  `- style.scss
      |- mixins.scss     # Overrides forward/mixins.scss
      |- variables.scss  # Overrides forward/variables.scss
      `- style.scss      # Overrides forward/style.scss

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
