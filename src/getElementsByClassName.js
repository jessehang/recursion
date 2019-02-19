// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function (className) {
  // your code here
  var array = [];

  var getElements = function(nodes) {
    if (nodes !== undefined) {
      if (nodes.length > 0) {
        for (var i = 0; i < nodes.length; i++) {
          if (nodes[i].classList !== undefined) {
            getElements(nodes[i]);
          }
        }
      } else {
        if (nodes.classList) {
          if (nodes.classList.contains(className)) {
            array.push(nodes)
          }
          getElements(nodes.childNodes);
        }
      }
    }
  }
  getElements(document.body);
  return array;
}
