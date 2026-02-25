import {
    type ListGraph
} from './lib/graphs';

import {
    for_each, member, type List, list, head, tail, length, list_ref, is_null
} from './lib/list';

export type FlowGraph = ListGraph;
export type Options = Array<Array<string>>;
export type Story = Array<string>;
export type Game = {
    graph: FlowGraph
    options: Options
    story: Story
};

export const choices: FlowGraph = {
    adj: [
        list(1, 2, 3),      // 0  start
        list(4, 5),         // 1
        list(5, 6, 7),      // 2
        list(6, 7),         // 3
        list(8, 9),         // 4
        list(8, 10),        // 5
        list(10, 11),       // 6
        list(9, 11, 12),    // 7
        list(13, 14),       // 8
        list(13, 15),       // 9
        list(14, 15),       // 10
        list(14, 16),       // 11
        list(15, 16),       // 12
        list(17, 18),       // 13
        list(17, 19),       // 14
        list(18, 19),       // 15
        list(17, 18),       // 16
        list(),             // 17  ENDING
        list(),             // 18  ENDING
        list(),             // 19  ENDING
    ],
    size: 19
};



export const choices_array: Array<Array<string>> = [
    ["Search car for supplies", "Follow footsteps outside", "Run to hide"], // 0
    ["Rip up carseats with knife for more materials", "Follow the moving person further away"],          // 1
    ["Follow the moving person further away", "Run away toward open field", "Go to cave to scout for food"], // 2
    ["Run away toward open field", "Go to cave to scout for food"],          // 3
    ["Cover yourself in leather and now approach the person", "Cover the car in leather and setup camp"],          // 4
    ["Approach person", "Do not approach person and move in different direction"],          // 5
    ["Keep moving", "Rebuild the camp and rest"],          // 6
    ["Setup camp in cave", "Rest and leave the cave", "Move deeper in cave"], // 7
    ["Help person and team up", "Help person and leave them, then look for water"],          // 8
    ["Look for highground to scout for people", "Look for more food to keep you alive"],          // 9
    ["Look for water", "Look for food"],          // 10
    ["Look for water", "Look for people"],          // 11
    ["Look for more food to survive", "Look for people"],          // 12
    ["Go to camp", "Dont trust the camp and be alone"],          // 13 
    ["Let the stream take you further", "Try to grab branch in stream"],          // 14
    ["Leave bear", "Attack bear"],          // 15
    ["Go to camp", "Dont trust the camp and be alone"], // 16
    [],                          // 17 ENDING
    [],                          // 18 ENDING
    [],                          // 19 ENDING
];



export const story_array: Array<string> = 
   
[
    "You wake up in a car, crashed, no idea how long it has been, no memory except basic motoric functions. You hear noises all-over.", // 0
    "You search the car and find a only a knife, it could come in handy. You see a person moving furhter away", // 1
    "While following the footsteps you spot a person, but you also see a warning sign that says 'People are not people anymore'", // 2
    "As you run to hide you stumble upon a cave, while catching your breath you see a person in the forest, they look strange, further away you see an open field", // 3
    "You now have leather from the carseats, what do you want to do with the leather?", // 4
    "As you follow the person and come closer, it does not seem like a normal person, you wonder if it is safe to approach them", // 5
    "You move towards the open field, with broken trees and weird trails on the ground, you find a ruined campsite with a walkie talkie, you pick it up and analyse the camp, you could stay here", // 6
    "In the cave you find a bunch of edible mushrooms and an old fireplace to grill at, you manage to start a fire", // 7
    "You approach the person and it is actually normal person that is completely exhausted and out of food, 'Please help', the person begs you", // 8
    "As you now have setup camp you are unsure of what to do, you ponder long and come to two descicions", // 9 (antingen i grotta eller annanstans )
    "As you keep moving you can slowly feel the hunger and thirst get to you, if you do not eat or drink shortly you might die", // 10
    "You have set up the camp and rest, you wake up feeling thirsty and alone, what will you do?", // 11
    "The cave leads to a dead end so you move up to the surface, you feel alone, what will you do?", // 12
    "You now see a camp in the distance, however you are worried, can you really trust people now?", // 13 (personen som hjälper dig ber dig följa efter dem, personen hade bara tappat bort sig själv)
    "To find water you move towards nearest stream, however you fall on slippery stone due to fatigue and end up in the stream!", // 14
    "You stumble upon a bear! You are almost starving, is there a choice left? What will you do?", // 15
    "While looking for people you see a camp in the distance, however you feel as though it might not be trustable", // 16
    "The camp people are friendly! They take you in and care for you, you manage to survive this strange world happily ever after", // 17 ENDING
    "As you keep wandering you stumble upon a house, it comes to you that it is your old house! There your family waits and you live happily ever after", // 18 ENDING
    "The bear is way stronger than you because you are so fatigued, you bleed out to the sunset and wonder if there is anything waiting for you on the other side", // 19 ENDING (du tog dig upp med branchen men i och med att du var så trött stöter du på en björn och dör)
];


export const game_test: Game = {
    graph: choices,
    options: choices_array,
    story: story_array
};