"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list_1 = require("./lib/list");
const promptSync = require("prompt-sync");
const story_1 = require("./story");
const prompt = promptSync();
function build_array(size, content) {
    const result = Array(size);
    for (var i = 0; i < size; i = i + 1) {
        result[i] = content(i);
    }
    return result;
}
//väg som först bara är 
const path = build_array(story_1.choices.size, _ => 0);
function main() {
    console.log("Welcome to (game)!");
    console.log("Please pick your choice!");
    choice();
}
let current_node = 0;
function display_choices() {
    for (let i = 0; i < (0, list_1.length)(story_1.choices.adj[current_node]); i++) {
        console.log("Choice " + (i + 1) + ": " + story_1.choices_array[current_node][i]);
    }
}
function choice() {
    if ((0, list_1.is_null)(story_1.choices.adj[current_node])) {
        console.log("Game over fuckass");
    }
    else {
        display_choices();
    }
    const input = Number(prompt("> "));
    if (input <= (0, list_1.length)(story_1.choices.adj[current_node]) + 1 && input > 0) {
        console.log("Choice " + input + " was chosen");
        current_node = Number((0, list_1.list_ref)(story_1.choices.adj[current_node], input - 1));
        choice();
    }
    else {
        console.log("Invalid input! Choose again:");
        choice();
    }
}
main();
//# sourceMappingURL=hello_world.js.map