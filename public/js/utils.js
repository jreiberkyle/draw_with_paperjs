this.scaleAndShift = function(item, scale) {
  // console.log(scale);
  item.scale(scale, scale);
  // console.log(item.bounds);
  item.translate(-item.strokeBounds.topLeft);
};
