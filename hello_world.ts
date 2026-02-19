import {
    for_each, member, type List, list, head, tail, length, list_ref, is_null
} from './lib/list';

import {
    type ListGraph
} from './lib/graphs';

import promptSync = require("prompt-sync");

import {
    choices, choices_array
} from './story'
const prompt = promptSync()

function build_array<T>(size: number, content: (i: number) => T): Array<T> {
    const result = Array<T>(size);
    for (var i = 0; i < size; i = i + 1) {
        result[i] = content(i);
    }
    return result;
}

//väg som först bara är 

function main(): void {
    console.log("Welcome to (game)!")
    console.log("Please pick your choice!")
    choice();

}

let current_node = 0;

function display_choices(): void {
    for (let i = 0; i < length(choices.adj[current_node]); i++) {
            console.log("Choice " + (i + 1) + ": " + choices_array[current_node][i])
        }
}

function choice(){
    if (is_null(choices.adj[current_node])) {
        console.log("Game over fuckass")
    }
    else {
        display_choices();
    }

    const input: number = Number(prompt("> "))

        if (input <= length(choices.adj[current_node]) + 1 && input > 0) {
            console.log("Choice " + input + " was chosen")
            current_node = Number(list_ref(choices.adj[current_node], input - 1))
            choice();

        } else {
            console.log("Invalid input! Choose again:")
            choice();
        }
    }    
main();
