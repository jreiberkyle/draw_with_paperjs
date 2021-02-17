function drawPath() {
  var path = new Path();
  // Give the stroke a color
  path.strokeColor = 'black';
  var start = new Point(100, 100);
  // Move to start and draw a line from there
  path.moveTo(start);
  // Note the plus operator on Point objects.
  // PaperScript does that for us, and much more!
  path.lineTo(start + [ 100, -50 ]);
};
drawPath();

function drawHexagon(point_radius, center_point) {
    // Create a Paper.js Path to draw a line into it:
    var hexagon = new Path({closed:true});
    hexagon.strokeColor = 'black';

    // How many points do we want our object to have
    var points = 6;
    // How large should it be
    // 0 to 2PI is a circle, so divide that by the number of points
    // in our object and that's how many radians we should put a new
    // point in order to draw the shape
    var angle = ((2 * Math.PI) / points);
    
    // For as many vertices in the shape, add a point
    for(i = 0; i < points; i++) {
    
      // Add a new point to the object
      hexagon.add(new Point(
        // Radius * Math.cos(number of radians of the point) is the x position
        point_radius * Math.cos(angle * i), 
        // And the same thing with Math.sin for the y position of the point
        point_radius * Math.sin(angle * i)
      ));
    }
    
    hexagon.translate(center_point);
    return hexagon
};

function drawHexagon_side(side_radius, center_point) {
    point_radius = side_radius * Math.sqrt(3)/2;
    return drawHexagon(point_radius, center_point)
};

var center_point = new Point(100, 100)
var point_radius = 50;
drawHexagon(point_radius, center_point); 
// var hexagon = drawHexagon(point_radius, center_point); 
// hexagon.strokeColor = 'black';


// function circlesAtIntersections(hexagon, hole_count, hole_radius){
//     // draw vertical, evenly spaced lines
//     var spacing = hexagon.bounds.width/(hole_count-1);
//     if (spacing < 2.5 * hole_radius) {
//         console.error('spacing too small')
//     }
//     
//     var lines = [];
//     for (var i=0; i < hole_count; i++) {
//         
//         var line = new Path.Line(hexagon.bounds.topLeft,
//                                  hexagon.bounds.bottomLeft);
//         line.position.x += i*spacing;
//         lines.push(line);
//     }
//
//     var lines_path = new CompoundPath({
//         children: lines,
//         strokeColor: 'blue',
//     });
//     
//     var intersectionGroup = new Group();
//     var intersections = lines_path.getIntersections(hexagon);
//
//     for (var i = 0; i < intersections.length; i++) {
//         var intersectionPath = new Path.Circle({
//             center: intersections[i].point,
//             radius: hole_radius,
//             strokeColor: 'blue',
//             parent: intersectionGroup
//         });
//     }
// }
//
// // circlesAtIntersections(hexagon, 21, 5);
//
// console.log('i am here');
