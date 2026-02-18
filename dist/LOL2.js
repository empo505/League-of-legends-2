"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list_1 = require("./lib/list");
const prompt = PromptSync((sigint) => );
function build_array(size, content) {
    const result = Array(size);
    for (var i = 0; i < size; i = i + 1) {
        result[i] = content(i);
    }
    return result;
}
const choices = {
    size: 1000,
    adj: [
        (0, list_1.list)(1, 2)
    ]
};
let current_node = 0;
const choices_array = [
    ["Go to path", "Eat food"],
    ["Have fun", "Have no fun"]
];
const path = build_array(choices.size, _ => 0);
function decision() {
    const options = choices_array[current_node];
    console.log(`1: options[0], 2: options[1]`);
    const choice = prompt("Välj 1 eller 2:");
    if (choice !== 1 && choice !== 2) {
        console.log("Ogiltigt val! Försök igen.");
        return decision();
    }
    const chosen = options[choice - 1];
    console.log(`Du valde: ${chosen}`);
}
decision();
//# sourceMappingURL=LOL2.js.map