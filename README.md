**Squad App FontEnd Code**

给工程用用于开发Mingyian Squad Webapp

使用yeoman来做脚手架，生成基本项目结构。
选用了https://github.com/Swiip/generator-gulp-angular/blob/master/docs/user-guide.md 为生成器，安装和配置命令如下：

1.安装nodejs

安装NodeJS 6.8.1

2.安装yeoman

npm install -g yo

3.安装gulp-angular生成器 

npm install -g generator-gulp-angular

4.生成器使用和配置选项

Yo options

yo gulp-angular --help or yo gulp-angular -h for help. All options are not required. If not provided, default values will be used.

--app-path='src' customize Angular's app folder, relative to cwd, default is src 

--dist-path='dist' customize build target folder, relative to cwd, default is dist 

--e2e-path='e2e' customize e2e test specs folder, relative to cwd, default is e2e 

--tmp-path='.tmp' customize pre-processing temp folder, relative to cwd, default is .tmp 

--skip-install do not run bower install and npm install after generating the app, default is false (not skip) 

--skip-welcome-message skip yo welcome messages, default is false (not skip) 

--skip-message skip install messages, default is false (not skip) 

--default use default configurations, default is false 

--advanced prompt for advanced additional features, default is false 

Paths configuration are stored in gulpfile.js. Change options.(src|dist|tmp|e2e) in gulpfile.js if you want to config paths after the app is generated. 


Warning: The paths are also written in the index.html for the build with useref. If you want to change these paths, you also have to change the paths there in order to have the build task working. 

Use Gulp tasks 


gulp or gulp build to build an optimized version of your application in /dist 

gulp serve to launch a browser sync server on your source files 

gulp serve:dist to launch a server on your optimized application 

gulp test to launch your unit tests with Karma 

gulp test:auto to launch your unit tests with Karma in watch mode 

gulp protractor to launch your e2e tests with Protractor 

gulp protractor:dist to launch your e2e tests with Protractor on the dist files 


