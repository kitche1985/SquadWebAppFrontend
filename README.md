Squad App Frontend Repository README
===

>本工程用于 Mingyian Squad Web App 前端开发，使用 Yeoman 来做脚手架，生成基本项目结构，选用了 [Gulp-Angular Generator](https://github.com/Swiip/generator-gulp-angular/blob/master/docs/user-guide.md) 做为生成器。


Quick Start
---

1. 安装 NodeJS 6.8.1 [(via nodejs.org)](https://nodejs.org/dist/v6.8.1/node-v6.8.1.pkg)
2. 安装 Yeoman

	`npm install -g yo`
3. 安装 Gulp-Angular 生成器
 
	`npm install -g generator-gulp-angular`

---
Yeoman Options
---

Which version of Angular do you want? 1.5.x (stable) 

What Angular modules would you like to have? (ngRoute and ngResource will be addressed after) (Press <space> to select)angular-animate.js (enable animation feature
s), angular-cookies.js (handle cookie management), angular-touch.js (for mobile development), angular-sanitize.js (to securely parse and manipulate HTML), angular-me
ssages.js (enhanced support for displaying messages within templates), angular-aria.js (support for common ARIA attributes) 

Do you need jQuery or perhaps Zepto? jQuery 2.x (new version, lighter, IE9+)

Would you like to use a REST resource library? ngResource, the official support for RESTful services

Would you like to use a router? None


Which UI framework do you want? None


Which CSS preprocessor do you want? None, only the good old CSS


Which JS preprocessor do you want? None, I like to code in standard JavaScript.


Which HTML template engine would you want? None, I like to code in standard HTML.


Gulp-Angular Generator Options
---

`yo gulp-angular --help` or `yo gulp-angular -h` for help. All options are not required. If not provided, default values will be used.
	
* --app-path='src' customize Angular's app folder, relative to cwd, default is `src`

* --dist-path='dist' customize build target folder, relative to cwd, default is `dist`

* --e2e-path='e2e' customize e2e test specs folder, relative to cwd, default is `e2e`

* --tmp-path='.tmp' customize pre-processing temp folder, relative to cwd, default is `.tmp`

* --skip-install do not run `bower install` and `npm install` after generating the app, default is false (not skip)

* --skip-welcome-message skip yo welcome messages, default is false (not skip)

* --skip-message skip install messages, default is false (not skip)

* --default use default configurations, default is false

* --advanced prompt for advanced additional features, default is false

Paths configuration are stored in `gulpfile.js`. Change options (src|dist|tmp|e2e) in `gulpfile.js` if you want to config paths after the app is generated. 

**Warning**: The paths are also written in the index.html for the build with useref. If you want to change these paths, you also have to change the paths there in order to have the build task working.
	
Use Gulp tasks
---
	
`gulp` or `gulp build` to build an optimized version of your application in `/dist`

`gulp docs` to generate docs in `/docs`

`gulp serve` to launch a browser sync server on your source files

`gulp serve:dist` to launch a server on your optimized application 

`gulp serve:docs` to serve documentation website at `http://localhost:8083`

`gulp test` to launch your unit tests with Karma

`gulp test:auto` to launch your unit tests with Karma in watch mode

`gulp protractor` to launch your e2e tests with Protractor

`gulp protractor:dist` to launch your e2e tests with Protractor on the dist files

--EOF--
---
