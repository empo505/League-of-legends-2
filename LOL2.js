"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_1 = require("./lib/list");
var prompt = PromptSync(function (sigint) { return ; });
function build_array(size, content) {
    var result = Array(size);
    for (var i = 0; i < size; i = i + 1) {
        result[i] = content(i);
    }
    return result;
}
var choices = {
    size: 1000,
    adj: [
        (0, list_1.list)(1, 2)
    ]
};
var current_node = 0;
var choices_array = [
    ["Go to path", "Eat food"],
    ["Have fun", "Have no fun"]
];
var path = build_array(choices.size, function (_) { return 0; });
function decision() {
    var options = choices_array[current_node];
    console.log("1: options[0], 2: options[1]");
    var choice = prompt("Välj 1 eller 2:");
    if (choice !== 1 && choice !== 2) {
        console.log("Ogiltigt val! Försök igen.");
        return decision();
    }
    var chosen = options[choice - 1];
    console.log("Du valde: ".concat(chosen));
}
decision();
