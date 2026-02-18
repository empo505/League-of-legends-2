import {
    for_each, member, type List, list, head, tail, length, list_ref, is_null
} from './lib/list';

import {
    type Queue, empty, enqueue
} from './lib/queue_array';

import {
    type ListGraph
} from './lib/graphs';

import * as PromptSync from "prompt-sync";

const prompt: PromptSync.Prompt = PromptSync({ sigint: true });

function build_array<T>(size: number, content: (i: number) => T): Array<T> {
    const result = Array<T>(size);
    for (var i = 0; i < size; i = i + 1) {
        result[i] = content(i);
    }
    return result;
}

const choices: ListGraph = {
        size: 20,
        adj: [
            list(1, 2),
            list(2, 3),
            list(4, 5),
            list(),
            list(),
            list(),
        ]
} 

const choices_array: Array<Array<string>> = [
    ["1", "2"],
    ["2", "3"],
    ["4", "5"],
    ["3"],
    ["4"],
    ["5"]

]

//väg som först bara är 
const path = build_array(choices.size, _ => 0)

for (let i = 0; i < choices_array.length; i++){
    // 
}

function main(): void {
    console.log("Welcome to (game)!")
    console.log("Please pick your choice!")
    choice();

}

let current_node = 0;
const current_choices: List<number> = choices.adj[current_node];

function display_choices(): void {
    for (let i = 0; i < length(current_choices); i++) {
            console.log("Choice " + (i + 1) + ": " + choices_array[current_node][i])
        }
}

function choice(){
    if (is_null(current_choices)) {
        console.log("Game over fuckass")
    }
    else {
        display_choices();
    

    const input: number = Number(prompt("> "))

        if (input <= length(current_choices) + 1 && input > 0) {
            console.log("Choice " + input + " was chosen")
            current_node = Number(list_ref(current_choices, input - 1))
            choice();

        } else {
            console.log("Invalid input! Choose again:")
            choice();
        }
    }    
}
main();
