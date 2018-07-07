var gulp = require('gulp');
var less = require('gulp-less');
// 创建一个gulp任务
gulp.task('less',function(){
  // 查找文件
  gulp.src('less/**.less')
  // 执行less文件
  .pipe(less())
  // 输出css文件
  .pipe(gulp.dest('dless/css'))
});
// 监听less文件的改动
gulp.task('auto',function(){
  gulp.watch('less/**.less',['less'])
})

gulp.task('default',['less','auto'])