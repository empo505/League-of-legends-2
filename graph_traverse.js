"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_1 = require("./lib/list");
var story_graph = {
    adj: [(0, list_1.list)(1, 2),
        (0, list_1.list)(3, 4),
        (0, list_1.list)(5),
        (0, list_1.list)(6),
        (0, list_1.list)(6),
        (0, list_1.list)(),
        (0, list_1.list)()],
    size: 7
};
var story_choice = ["path 1", "path 2"];
function treverse_graph(graph) {
    var nodes = graph.size;
    var adj_lst = graph.adj;
    var visited = new Array(nodes).fill(0);
    // 
    for (var i = 0; i < nodes; i++) {
        if (adj_lst[i] === null) { // if a node have no children, we are done
            return visited;
        }
        else if (visited[i] === 0) { // when visiting a node, change it to 1 in the array
            visited[i] = 1;
        }
        else { }
    }
}
console.log(treverse_graph(story_graph));
