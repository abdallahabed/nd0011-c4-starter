import gulp from "gulp";
import shell from "gulp-shell";

// Run the server
gulp.task("serve", shell.task(["parcel index.html"]));

// Run production
gulp.task("build", shell.task(["parcel build index.html"]));

// Run Mocha tests
gulp.task("test", shell.task(["npx mocha test/**/*.js"]));

// Run Cypress tests
gulp.task("cypress", shell.task(["npx cypress run"]));

// Default task
gulp.task("default", gulp.series("serve"));
