var ps = this;

// function stripOutline(item) {
//   // this just removes the first item, maybe skip it
//   console.log(item.children.length + ' children');
//   console.log('item: ' + item.bounds.area);
//   for(var i=0; i<item.children.length; i++) {
//     child = item.children[i];
//     console.log(child.bounds.area);
//     // console.log(child);
//     if(child.bounds.area == item.bounds.area) {
//     // if(child.bounds.area == item.bounds.area) {
//       console.log('removing this one: ' + i);
//       child.remove();
//     };
//   };
//   console.log(item.children.length + ' children');
//
// };

function getShape(item) {
  return item.children[1];
};

ps.importSVG = function(filename, project, callback) {
  function processSVG(item) {
    // console.log(item);
    // stripOutline(item);
    // var shape = getShape(item);
    // ps.scaleAndShift(shape, 200/shape.bounds.width);
    callback(item);
  };
  project.importSVG(filename, processSVG);
};

ps.exportSVG = function(item, filename) {
  console.log('I will export when I get code');
};
