const {src,dest,series,parller} = require('gulp')
const bable = require('gulp-bable')
const sass = require('gulp-sass')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const cleanCss = require('gulp-clean-css')

sass.compiler = require('node-sass')

function compleJs() {
  return src('src/*.js') // 要使用的檔案位置
  .pipe(bable())         // 未壓縮 js 檔案
  .pipe(dest('dist'))    // 輸出的資料夾
  .pipe(uglify())        // 壓縮 js 檔案
  .pipe(rename({extname:'.main.js'})) // 重新命名壓縮 js 檔案
  .pipe(dest('dist'))    // 輸出的資料夾
}

function compleCss() {
  return src('src/*.sass')
  .pipe(sass().on('error',sass.logError))
  .pipe(dest('css'))
  .pipe(cleanCss({compatibility:'ie8'}))
  .pipe(rename({extname:'.min.css'}))
  .pipe(dest('css'))
}

// exports.default = defaultTask // 單一執行
// series -> 串接執行檔案
// parller -> 平行執行檔案
exports.default = parller(compleJs, compleCss)