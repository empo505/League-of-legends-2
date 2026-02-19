import {
    type ListGraph
} from './lib/graphs';

import {
    for_each, member, type List, list, head, tail, length, list_ref, is_null
} from './lib/list';

export type FlowGraph = ListGraph;

export const choices: FlowGraph = {
        adj: [
            list(1, 2, 3), // 0                       // empty lists are endings
            list(4, 5),    // 1
            list(6, 7),    // 2
            list(8, 9),    // 3 
            list(10),      // 4
            list(10, 11),      // 5
            list(11, 12),      // 6
            list(8, 12),   // 7
            list(13, 14),  // 8
            list(15),      // 9
            list(16, 17),  // 10
            list(),      // 11
            list(18),      // 12
            list(18),      // 13
            list(19, 20),  // 14
            list(21, 22),  // 15
            list(),        // 16
            list(23),      // 17
            list(23, 27),  // 18
            list(24),      // 19
            list(25),      // 20
            list(25),      // 21
            list(26),      // 22
            list(),        // 23
            list(),        // 24
            list(),        // 25
            list(),        // 26
            list(),        // 27
        ],
        size: 27
} 

export const choices_array: Array<Array<string>> = [
    ["Go to beach", "Go to forest", "Go to mountain"],       // 0
    ["Look for food", "Keep going towards city"],            // 1
    ["Move toward noise", "Go to highground to scout"],      // 2
    ["Try to kill deer for food", "Rest"],                   // 3
    ["You found mysterious berries of different colors"],    // 4
    ["Go toward mysterious berries (sign said purple are safe)", "Move toward mysterious creature"],   // 5
    ["Move toward moving thing", "Set up camp for safety"],  // 6
    ["Try to kill deer for food", "Set up camp for safety"], // 7
    ["Use knife", "Throw big rock"], // 8 (big rock fails and you fall and pass out, wakes up at 14)
    ["You now rest"], // 9
    ["Eat yellow berries", "Eat purple berries"], // 10
    ["The mysterious creature was a zombie and you died"], // 11
    ["You rest through night in camp"], // 12
    ["You managed to kill the deer with the knife and setup camp for the night"], // 13
    ["Trust stranger", "Dont trust stranger"], // 14 (stumbles upon stranger, trust or not trust)
    ["Go toward seen community from the mountains", "Move toward broken down house"], // 15
    ["The berries were poisonous and you died!"], // 16
    ["The berries were not poisonous and you live"], // 17
    ["Clean yourself at lake", "Clean yourself at downside"], // 18
    ["You dont trust the stranger and remain by yourself hungry"], // 19
    ["You trust the stranger and follow him"], // 20
    ["You approach the community and they let you in"], // 21
    ["In the old house you stumble upon a zombie, and defeat it"], // 22
    ["You are now ready and energized and setup camp and live happily ever after... unless?"], // 23
    ["You are too weak to do anything and die out looking at the fool moon"], // 24
    ["You live happily ever after in the community because they trusted you and you trusted them"], //25 
    ["You manage to scrape by in the old house, but miserably, and die weeks later of a zombie"], // 26
    ["You stumble upon an escaped convict and get stabbed, and you bleed out to the sunset as Nutshell by Alice in Chains play"] // 27
]
export const story_array: Array<string> = ["bla", "bla", "bla", "bla", "bla", "bla", "bla", "bla", "bla",
                                            "bla", "bla", "bla", "bla", "bla", "bla", "bla", "bla", "bla",
                                            "bla", "bla", "bla", "bla", "bla", "bla", "bla", "bla", "bla", "bla", ];
