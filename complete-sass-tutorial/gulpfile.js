const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// changes sass file to css file
function buildStyles() {
	return src("index.scss").pipe(sass()).pipe(dest("css"));
}

// agar change sass file mei kuch change kiya toh css file mei bhi changes reflect kardo
function watchTask() {
	watch(["index.scss"], buildStyles);
}

exports.default = series(buildStyles,watchTask)