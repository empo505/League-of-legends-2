"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vue_game = vue_game;
var list_ts_1 = require("../lib/list.ts");
function vue_game(game, currentNode, userNext) {
    var neighbors = game.graph.adj[currentNode];
    if (!neighbors || neighbors === null) {
        return {
            nextNode: null,
            current_options: [],
            story: game.story[currentNode]
        };
    }
    var nextNode = Number((0, list_ts_1.list_ref)(neighbors, userNext));
    return {
        nextNode: nextNode,
        current_options: game.options[currentNode],
        story: game.story[currentNode]
    };
}
