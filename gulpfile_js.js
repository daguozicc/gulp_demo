/**
 *  学习gulp的入门 压缩js
 * @type {*|Gulp}
 */
//https://www.w3cschool.cn/qtaitm/q3dyuozt.html
//  window 系统有一个坑 需要 npm install gulp 显示安装成功 但是gulp-v 没有安装成功和不能gulp script  只能npm
//    insatll -g gulp  才能执行gulp script
var gulp = require('gulp');// require() 可以获取模块
var uglify = require('gulp-uglify'); // 获取 uglify 模块（用于压缩 JS）

// 压缩 js 文件
// 在命令行使用 gulp script 启动此任务
gulp.task('script', function() {
    // 1\. 找到文件
    gulp.src('js/*.js')
    // 2\. 压缩文件
        .pipe(uglify())
        // 3\. 另存压缩后的文件
        .pipe(gulp.dest('dist/js'))
});

// 使用gulp压缩css
