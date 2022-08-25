# Sketch Template

Base project to easily create sketches and compile them into a single list. It is a template based off of my `creative-coding` repository.

## Build Sketches

Use `buildSketches.js` to automatically add links to `index.html` based on the folder contents of `sketches` without manually typing them yourself.

## Conventions

All sketches are placed in the `sketches` directory and prefixed by their number (this will also control the order they appear in the final build). All JavaScript classes that need to be placed in a separate file for extra code readability should go in `js` with a similar naming conventions. All assets can go into `assets`, but do not need to follow any convention because their files may be frequently used or shared across sketches. The files in `js` can also be shared (sparingly).

You will need to change `sketch_template.html` as needed to better fit your needs (ie: p5.js utils for a p5.js sketch and three.js utils for a three.js sketch). Edit `js/importmap.js` to add more dependencies with Skypack - no module bundler!
