"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_1 = require("./lib/list");
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function build_array(size, content) {
    var result = Array(size);
    for (var i = 0; i < size; i = i + 1) {
        result[i] = content(i);
    }
    return result;
}
var choices = {
    size: 20,
    adj: [
        (0, list_1.list)(1, 2),
        (0, list_1.list)(2, 3),
        (0, list_1.list)(4, 5),
        (0, list_1.list)(),
        (0, list_1.list)(),
        (0, list_1.list)(),
    ]
};
var choices_array = [
    ["1", "2"],
    ["2", "3"],
    ["4", "5"],
    ["3"],
    ["4"],
    ["5"]
];
//väg som först bara är 
var path = build_array(choices.size, function (_) { return 0; });
for (var i = 0; i < choices_array.length; i++) {
    // 
}
function main() {
    console.log("Welcome to (game)!");
    console.log("Please pick your choice!");
    choice();
}
var index = 0;
function choice() {
    if ((0, list_1.is_null)(choices.adj[index])) {
        console.log("Game over fuckass");
    }
    else {
        for (var i = 0; i < (0, list_1.length)(choices.adj[index]); i++) {
            console.log("Choice " + (i + 1) + ": " + choices_array[index][i]);
            console.log(index);
        }
        var input = Number(prompt("> "));
        if (input <= (0, list_1.length)(choices.adj[index]) + 1 && input > 0) {
            console.log("Choice " + input + " was chosen");
            index = Number((0, list_1.list_ref)(choices.adj[index], input - 1));
            choice();
        }
        else {
            console.log("Invalid input! Choose again:");
            choice();
        }
    }
}
main();
