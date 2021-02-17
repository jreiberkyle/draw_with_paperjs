var ps = this;

ps.verticalLines = function(item, spacing){
    // var spacing = spacing_in;
    var hole_count = Math.round(item.bounds.width/spacing + 1);
    console.log(hole_count + ' vertical lines will be created.')

    var lines = [];
    for (var i=0; i < hole_count; i++){

        var line = new Path.Line(item.bounds.topLeft,
                                 item.bounds.bottomLeft);
        line.position.x += i*spacing;
        lines.push(line);
    };

    var lines_path = new CompoundPath({
        children: lines,
        strokeColor: 'red'
    });
    console.log(lines_path.children.length);
    return lines_path;
};

ps.circlesAtIntersections = function(loom, lines, hole_radius){
    var intersectionGroup = new Group();
    
    var intersections = lines.getIntersections(loom);
    console.log('intersections: ' + intersections.length);
    
    function closeEnough(loc1, loc2, precision) {
      // var precision = 2;
      function round(val) {
        return(val.toFixed(precision));
      };
      return (round(loc1.x) == round(loc2.x) &&
              round(loc1.y) == round(loc2.y))
    };

    for (var i = 0; i < intersections.length; i++) {
        var loc = intersections[i].point;
        if (i > 0) {
          var prev_loc = intersections[i-1].point;

          if (closeEnough(loc, prev_loc)) {
            console.log('found one');
          };
        };

        var intersectionPath = new Path.Circle({
            center: intersections[i].point,
            radius: hole_radius,
            parent: intersectionGroup
        });
    }

    intersectionGroup.strokeColor = 'blue';
    return intersectionGroup;
}

// function drawComb(height, count, spacing_in, hole_radius, recess_height=.25){
//     var spacing = spacing_in;
//     
//     var teeth = [], recesses = [];
//     var recess_width = spacing - 2*hole_radius;
//     for (var i=0; i < count; i++) {
//         var x = i*spacing;
//         var tooth = new Path.Circle(new Point(x, 0), hole_radius)
//         teeth.push(tooth);
//         
//         if (i < (count-1)) {
//             // draw recess
//             var size = new Size(recess_width, -recess_height);
//             console.log(size)
//             var recess = new Path.Rectangle(tooth.bounds.rightCenter,size)
//             recesses.push(recess);            
//         }
//     }
//     var teeth_path = new CompoundPath({
//         children: teeth,
//         // strokeColor: 'red'
//     });
//     var recesses_path = new CompoundPath({
//         children: recesses,
//         // strokeColor: 'red'
//     });
//     
//     var bottom_left = teeth_path.bounds.leftCenter;
//     var top_right = teeth_path.bounds.rightCenter - new Point(0, height)
//     var comb_orig = new Path.Rectangle(bottom_left, top_right);
//     var comb = comb_orig.unite(teeth_path).subtract(recesses_path);
//     comb_orig.remove();
//     teeth_path.remove();
//     recesses_path.remove();
//     comb.strokeColor = 'blue'
//     return comb;
// }
