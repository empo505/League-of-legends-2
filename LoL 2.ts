import {
    for_each, member, type List, list, head, tail
} from './lib/list';

import {
    type Queue, empty, enqueue
} from './lib/queue_array';

import {
    type ListGraph
} from './lib/graphs';

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

const choices_array: Array<Array<string>> = [
    ["Go to path", "Kill yourself"],
    ["Cuckchair", "Kill yourself"]
]

//väg som först bara är 
const path = build_array(choices.size, _ => 0)

for (let i = 0; i < choices_array.length; i++){
    // 
}
