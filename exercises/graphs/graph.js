// console.log("Hello world!");
// June 28, 2017
// introduction to graphs with Sean C.

var graph = {};
// console.log(graph);

graph.addNode = function addNode(node) {
  this[node] = {neighbors: [], data: undefined};
}

graph.removeNode = function removeNode(node) {
  delete this[node];
}

graph.setData = function setData(node, dataIn) {
  this[node].data = dataIn;
}

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
console.log(graph);

// graph.removeNode("C");
// console.log(graph);

graph.setData("A",7);
graph.setData("B",5);
graph.setData("C",2);
graph.setData("D",6);
console.log(graph);
