import {
    for_each, member, type List, list, head, tail
} from './lib/list';

import {
    type Queue, empty, enqueue
} from './lib/queue_array';

import {
    type ListGraph
} from './lib/graphs';
const prompt: PromptSync.prompt = PromptSync((sigint: true));
function build_array<T>(size: number, content: (i: number) => T): Array<T> {
    const result = Array<T>(size);
    for (var i = 0; i < size; i = i + 1) {
        result[i] = content(i);
    }
    return result;
}

const choices: ListGraph = {
        size: 1000,
        adj: [
            list(1, 2)

        ]
} 

let current_node: number = 0;


const choices_array: Array<Array<string>> = [
    ["Go to path", "Eat food"],
    ["Have fun", "Have no fun"]
]

const path = build_array(choices.size, _ => 0)

function decision() {
    const options = choices_array[current_node]; 
    console.log(`1: options[0], 2: options[1]`);

    const choice:number = prompt("Välj 1 eller 2:");
    if (choice !== 1 && choice !== 2) {
        console.log("Ogiltigt val! Försök igen.");
        return decision();
    }

    const chosen = options[choice - 1];
    console.log(`Du valde: ${chosen}`);

}




decision();
