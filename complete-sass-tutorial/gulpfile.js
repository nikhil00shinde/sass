const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// changes sass file to css file
function buildStyles() {
	// look for any filename with .scss extension and compile it
	// it will compile all sass file to their css file
	return src("shinobi/**/*.scss").pipe(sass()).pipe(dest("css"));
}

// agar change sass file mei kuch change kiya toh css file mei bhi changes reflect kardo
function watchTask() {
	watch(["shinobi/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
