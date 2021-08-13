English | [Portuguese](README_ptbr.md)

# Algebra and Geometry

The system aims to solve linear algebra problems and also, through the [P5JS](https://p5js.org/) library, to create different geometric shapes.

>Note: The system is still under development as I have been working on it recently. I have some ideas to put on the two pages but for now I'm focusing on organizing the code and a few other things.

### Summary
- [Architecture](#architecture)
- [About linear algebra problems](#about-linear-algebra-problems)
- [About geometric shapes](#about-geometric-shapes)

## Architecture

The project's file and folder architecture is well divided. It can be found in the file [architecture.md](architecture.md), where there is the division of folders and what files each folder contains.

## About linear algebra problems

>Note: For now the only calculation being done is the elimination by Gauss-Jordan. In the future, the other methods will be added.

### How to use linear algebra calculation system?

Before doing the calculations, you will have to create a file with the necessary data. Follow the step by step below to create the file:

1. In a folder of your choice, create a file of type `.m` (Ex.: `my-matrix.m`).
2. Open the file in a text editor of your choice (I recommend VS Code, Sublime Text or Atom).
3. With the file open, write in the first line, respectively, the number of lines in the matrix, the number of columns in the matrix and the number of values ​​(rows x columns)
4. After doing this first line, you must place, respectively, the position referring to the line, then the column, then the value you want to be in the position you defined.
5. Repeat the above step until all rows and columns are filled.

Below is an example of how the data should be in the file:

```
3 4 12 
1 1 -65
1 2 8
1 3 -7
1 4 86
2 1 22
2 2 60
2 3 2
2 4 52
3 1 10
3 2 -29
3 3 41
3 4 1
```
Now, to calculate the matrix you created in the file, follow the steps below:

1. On the **Linear Algebra** page, click the **Open File** button.
2. Choose the file that has the values ​​of the matrix you want to calculate, as shown in the previous step by step.
3. The values ​​from the uploaded file will appear in the top textarea and the result will appear in the bottom.

## About geometric shapes

Firstly, this part of the system was only possible thanks to the [P5JS](https://p5js.org/) library, as it has a range of possibilities of objects that can be created with different attributes.
Another library used is the [p5.EasyCam](https://github.com/freshfork/p5.EasyCam), in order to zoom in on the figures and see in other perspectives.

To create objects on the canvas you will have to do the following:

1. Go into the main.js file and create the setup and draw function (yes, very similar to the Arduino IDE functions).
2. Then, in the setup function, use the `createCanvas()` function to create a canvas on the page passing the width and height as parameters, respectively. A third parameter can also be set, which is WEBGL for 3D figures.
3. Still in the setup function, if you want to modify the frame rate, use the `frameRate()` function passing as parameter the amount of frames you want.
4. Now in the draw function, change the background color using the `backgroud()` function passing as parameter the color you want.
5. Now that you have the entire structure ready, you can create the geometric shapes any way you like.

The main.js file also supports object creation from the P5JS library.

>Note: By default, the code comes with a canvas and frame rate set and also with p5.EasyCam initialized.