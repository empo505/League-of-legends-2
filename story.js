"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.choices_array = exports.choices = void 0;
var list_1 = require("./lib/list");
exports.choices = {
    adj: [
        (0, list_1.list)(1, 2, 3), // 0                       // empty lists are endings
        (0, list_1.list)(4, 5), // 1
        (0, list_1.list)(6, 7), // 2
        (0, list_1.list)(8, 9), // 3 
        (0, list_1.list)(10), // 4
        (0, list_1.list)(10, 11), // 5
        (0, list_1.list)(11, 12), // 6
        (0, list_1.list)(8, 12), // 7
        (0, list_1.list)(13, 14), // 8
        (0, list_1.list)(15), // 9
        (0, list_1.list)(16, 17), // 10
        (0, list_1.list)(), // 11
        (0, list_1.list)(18), // 12
        (0, list_1.list)(18), // 13
        (0, list_1.list)(19, 20), // 14
        (0, list_1.list)(21, 22), // 15
        (0, list_1.list)(), // 16
        (0, list_1.list)(23), // 17
        (0, list_1.list)(23, 27), // 18
        (0, list_1.list)(24), // 19
        (0, list_1.list)(25), // 20
        (0, list_1.list)(25), // 21
        (0, list_1.list)(26), // 22
        (0, list_1.list)(), // 23
        (0, list_1.list)(), // 24
        (0, list_1.list)(), // 25
        (0, list_1.list)(), // 26
        (0, list_1.list)(), // 27
    ],
    size: 27
};
exports.choices_array = [
    ["Go to beach", "Go to forest", "Go to mountain"], // 0
    ["Look for food", "Keep going towards city"], // 1
    ["Move toward noise", "Go to highground to scout"], // 2
    ["Try to kill deer for food", "Rest"], // 3
    ["You found mysterious berries of different colors"], // 4
    ["Go toward mysterious berries (sign said purple are safe)", "Move toward mysterious creature"], // 5
    ["Move toward moving thing", "Set up camp for safety"], // 6
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
    ["You trust the stranger and follow him"], // 19
    ["You dont trust the stranger and remain by yourself hungry"], // 20
    ["You approach the community and they let you in"], // 21
    ["In the old house you stumble upon a zombie, and defeat it"], // 22
    ["You are now ready and energized and setup camp and live happily ever after... unless?"], // 23
    ["You are too weak to do anything and die out looking at the fool moon"], // 24
    ["You live happily ever after in the community because they trusted you and you trusted them"], //25 
    ["You manage to scrape by in the old house, but miserably, and die weeks later of a zombie"], // 26
    ["You stumble upon an escaped convict and get stabbed, and you bleed out to the sunset as Nutshell by Alice in Chains play"] // 27
];
