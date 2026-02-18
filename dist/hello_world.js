"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const list_1 = require("./lib/list");
const PromptSync = __importStar(require("prompt-sync"));
const prompt = PromptSync({ sigint: true });
function build_array(size, content) {
    const result = Array(size);
    for (var i = 0; i < size; i = i + 1) {
        result[i] = content(i);
    }
    return result;
}
const choices = {
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
const choices_array = [
    ["1", "2"],
    ["2", "3"],
    ["4", "5"],
    ["3"],
    ["4"],
    ["5"]
];
//väg som först bara är 
const path = build_array(choices.size, _ => 0);
for (let i = 0; i < choices_array.length; i++) {
    // 
}
function main() {
    console.log("Welcome to (game)!");
    console.log("Please pick your choice!");
    choice();
}
let current_node = 0;
const current_choices = choices.adj[current_node];
function display_choices() {
    for (let i = 0; i < (0, list_1.length)(current_choices); i++) {
        console.log("Choice " + (i + 1) + ": " + choices_array[current_node][i]);
    }
}
function choice() {
    if ((0, list_1.is_null)(current_choices)) {
        console.log("Game over fuckass");
    }
    else {
        display_choices();
        const input = Number(prompt("> "));
        if (input <= (0, list_1.length)(current_choices) + 1 && input > 0) {
            console.log("Choice " + input + " was chosen");
            current_node = Number((0, list_1.list_ref)(current_choices, input - 1));
            choice();
        }
        else {
            console.log("Invalid input! Choose again:");
            choice();
        }
    }
}
main();
//# sourceMappingURL=hello_world.js.map