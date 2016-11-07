![forward-wordpress-starter-theme](https://cloud.githubusercontent.com/assets/1250818/8885259/dc5923d0-3212-11e5-9579-25d6731ba6ca.jpg)

# Forward Framework

A killer WordPress theme framework built using underscores, gulp, sass, bourbon, bourbon neat, bower & browsersync. This project is also available as a pre-compiled [WordPress starter theme](https://github.com/drawbackwards/Forward-WordPress-Starter-Theme/releases).

#### Where Do I Put This?

Clone/Fork/Download this project wherever you like and symlink `build/` to `wp-content/themes/[example-theme]`.

__Note:__ Values `[inside-brackets]` can be changed.

    $ git clone git@github.com:drawbackwards/Forward-Framework.git ~/[Sites]/[forward-framework]

    $ cd ~/Sites/[example-wordpress-install]/wp-content/themes/

    $ ln -s ~/Sites/forward-framework/build [example-theme]

Your themes directory should now look like this:

    `- wp-content/
      |- plugins/
      `- themes/
        |- example-theme -> ~/Sites/forward-framework/build
        `- twentyfifteen/

#### Modify Project Variables

1. Open `gulpfile.js` and modify the `project` and `url` variables accordingly.
2. __MAMP Users:__ Enable the port 8888 parameter for BrowserSync (Search for 'Port setting for MAMP users' in `gulpfile.js`).

#### Install Gulp Globally

    $ npm install --global gulp

#### Install Yarn (preferred over npm)

    # Using homebrew
    $ brew update
    $ brew install yarn

    # OR using npm
    $ npm install -g yarn

For additional methods see the [yarn install page](https://yarnpkg.com/en/docs/install).

#### Install Gulp Plugins / Dependencies

    $ cd ~/Sites/forward-framework/
    $ yarn

    # OR use npm
    $ npm install

#### Install Bower & Components

    $ npm install -g bower
    $ bower install

#### Install sass

Sass is a Ruby component (known as a gem). If you're a Mac user Ruby is already on your system but if you're developing
on Linux or Windows you may  have to install it. Once you've got Ruby you should be able to install sass from the
command line (you may need to use `sudo`).

    $ gem install sass

For troubleshooting see the [sass install page](http://sass-lang.com/install).

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
* [Autoprefixer](https://github.com/postcss/autoprefixer-core)
* [Normalize](https://necolas.github.io/normalize.css/)
