import {
    type ListGraph
} from './lib/graphs';

import {
    for_each, member, type List, list, head, tail, length, list_ref, is_null
} from './lib/list';
import { imageArray } from './src/graph_traverse_return';


export type FlowGraph = ListGraph;
export type Options = Array<Array<string>>;
export type Story = Array<Array<string> | string>;

export type Game = {
    graph: FlowGraph
    options: Options
    story: Story
    images: imageArray
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
        list(17, 20),       // 14
        list(18, 20),       // 15
        list(17, 18),       // 16
        list(),             // 17  ENDING 
        list(),             // 18  ENDING
        list(),             // 19  ENDING
        list(19)
    ],
    size: 20
};



export const choices_array: Array<Array<string>> = [
    ["Search car for supplies", "Follow footsteps outside", "Run to hide"], // 0
    ["Gather strength to confront the looming silhuette", "Go outside and gesture the stranger you don't mean harm", "Jump over to the passenger seat and run to the woods"],          // 1
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
    ["Rest"]
];




export const story_array: Array<Array<string>> = 
   
[
    ["You wake up in a car, crashed, no idea how long it has been, no memory except basic motoric functions. You hear noises all-over.", //0.0
    "Disoriented and with with a lingering paranoia you think to yoyrself how you could have ended up in this situation. Did you faint?... is there someone after you?... Or could it be something worse?", //0.1
     "You suddenly hear faint footsteps outside, there is someone... or something standing in the distance. You have to act fast, what you choose to do could have fatal consequences!"], // 0.2
    ["You search the car and find a only a knife, it could come in handy. You look outside once again and see the dark silhuette getting closer and closer to you.", //1.0
    "It strikes you, the person slowly limping towards you could be hurt or mabye just as confused as you are right now. On the other hand... is it really worth risking your life to potentially help a stranger?"], // 1.1
    ["While following the footsteps you spot a person, but you also see a warning sign that says 'People are not people anymore'", "SNOPP"], // 2
    ["As you run to hide you stumble upon a cave, while catching your breath you see a person in the forest, they look strange, further away you see an open field"], // 3
    ["As you get closer you see the figure is a completely normal person. However, it is too late to be friendly now as the person seems to have taken your threatening gesture as an act of violence!?" //4.0
        ,"He suddenly lunges towards you and reaches for the weapon in your hand. The two of you fall in the tall grass in front of the car and you feel a warm liquid start to pour on your face and into your eyes in the darkness", //4.1
    "the figure, who was laying on top of you rolls off and holds his hand to his neck. He looks at you and says `People are not people anymore` as the light seems to leave his eyes", //4.2
     "" // 4.3
], 
    ["As you follow the person and come closer, it does not seem like a normal person, you wonder if it is safe to approach them"], // 5
    ["You move towards the open field, with broken trees and weird trails on the ground, you find a ruined campsite with a walkie talkie, you pick it up and analyse the camp, you could stay here"], // 6
    ["In the cave you find a bunch of edible mushrooms and an old fireplace to grill at, you manage to start a fire"], // 7
    ["You approach the person and it is actually normal person that is completely exhausted and out of food, 'Please help', the person begs you"], // 8
    ["As you now have setup camp you are unsure of what to do, you ponder long and come to two descicions"], // 9
    ["As you keep moving you can slowly feel the hunger and thirst get to you, if you do not eat or drink shortly you might die"], // 10
    ["You have set up the camp and rest, you wake up feeling thirsty and alone, what will you do?"], // 11
    ["The cave leads to a dead end so you move up to the surface, you feel alone, what will you do?"], // 12
    ["You now see a camp in the distance, however you are worried, can you really trust people now?"], // 13
    ["To find water you move towards nearest stream, however you fall on slippery stone due to fatigue and end up in the stream!"], // 14
    ["You stumble upon a bear! You are almost starving, is there a choice left? What will you do?"], // 15
    ["While looking for people you see a camp in the distance, however you feel as though it might not be trustable"], // 16
    ["The camp people are friendly! They take you in and care for you, you manage to survive this strange world happily ever after"], // 17
    ["As you keep wandering you stumble upon a house, it comes to you that it is your old house! There your family waits and you live happily ever after"], // 18
    ["BJÖÖÖÖÖÖÖÖRN", "The bear is way stronger than you because you are so fatigued, you bleed out to the sunset and wonder if there is anything waiting for you on the other side"] // 19
    ,["You're exhausted but you manage use all of your strength to pull yourself on land", "As you lie on the ground you fell drowzy and contemplate wether you should rest to save your strength or keep moving to find shelter before nightfall"] // 20
]

export const test_images: imageArray = 
    [["/in car wide.png", "/car-noperson.png", "/person-further.png"], //0
     ["/Taric.webp", "/gräs.avif"],//1
      ["/background1.png", "/gräs.avif"], //2
      ["/gragas.webp"], //3
       ["/Taric.webp", "/Taric.webp", "/Taric.webp", "/Taric.webp"], //4
       ["/gräs.avif"],//5
        ["/gragas.webp"],//6
         ["/Taric.webp"],//7
          ["/gräs.avif"],//8
           ["/gragas.webp"],//9
            ["/Taric.webp"],//10
             ["/gräs.avif"], //11
             ["/gragas.webp"],//12
              ["/grab-branch-sunset.png"], //13
              ["/grab-branch-sunset.png"], //14
               ["/gragas.webp"], //15
               ["/Taric.webp"],//16
                ["/gräs.avif"],//17
                ["/Taric.webp"],//18
                 ["/bear-attck-sundown.png", "/sunset-dying.png"],///19
                  ["lying-on-back.png", "falling-asleep.png"] //20
                ]

export const test_colors: string[] = [
  "#0f0d0b", "#3b0a0a", "#8b4513", "#4b0082", "#006064",
  "#1b5e20", "#b71c1c", "#2f4f4f", "#b8860b", "#f8f8ff",
  "#191970", "#c2b280", "#00d2ff", "#a4c639", "#ff4500",
  "#880e4f", "#708090", "#cd7f32", "#311b92"
];

export const game_test: Game = {
    graph: choices,
    options: choices_array,
    story: story_array,
    images: test_images
};