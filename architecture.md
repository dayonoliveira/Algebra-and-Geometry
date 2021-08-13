# Architecture

File tree

- [Algebra-and-Geometry/](#algebra-and-geometry)
    - [algebra-libraries/](#algebra-libraries)
    - [p5js/](#p5js)
    - [web/](#web)
        - [client/](#client)
        - [server/](#server)
    - [css/](#css)

## `Algebra-and-Geometry/`

It is the project's root folder, where the linear algebra libraries folder, the geometry files folder, the style sheets folder and finally the folder where the files that control the front and back-end are located. The project libraries were all developed using the OOP paradigm, as it is much better to work and manipulate the data.

## `algebra-libraries/`

This folder is where the linear algebra libraries are located. The `.js` files that are in this folder are:

- `linalg.js`: This library is where the calculation methods between matrices and vectors are.
- `matrix.js`: This library is responsible for creating arrays of different sizes.
- `vector.js`: This one is responsible for the vectors and it inherits the structure of the `matrix.js` library.
- `transformations.js`: This is a matrix and vector transformation library. It is heavily used in the `shapes2d.js` and `shapes3d.js` libraries to move geometric objects.

## `p5js/`

In this folder are the libraries of geometric shapes created by me and the libraries that I used as the basis for creating them. The files you have in this nasta are:

- `p5.js`: This is the library I used as the basis for creating mine. With it it is possible to instantiate the geometric shapes that the `shapes2d.js` and `shapes3d.js` libraries generate. It is also possible to create many other things, but these are not part of the project proposal.
- `p5.easycam.js`: This library is responsible for handling the geometric shape in the browser. With it, it is possible to zoom in and see objects from various perspectives.
- `shapes2d.js`: This is responsible for creating two-dimensional objects. With it you can create lines, squares, triangles and circles.
- `shapes3d.js`: This is responsible for three-dimensional objects. It is possible to create plane, parallelepiped, pyramid and sphere.
- `main.js`: Finally, this file is not a library. It's where you can instantiate the geometric shapes, generate other things and configure the p5js canvas.

## `web/`



## `css/`


