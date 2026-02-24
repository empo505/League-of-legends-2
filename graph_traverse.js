"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.game_test = void 0;
exports.Graphmain = Graphmain;
var list_1 = require("./graphics/lib/list");
var prompSync = require("prompt-sync");
var prompt = prompSync();
var story_1 = require("./story");
var game_graph = {
    adj: [(0, list_1.list)(1, 2),
        (0, list_1.list)(),
        (0, list_1.list)()],
    size: 3
};
var game_story = ["Vart vill du gå?", "Du överlevde!", "Du dog..."];
var game_options = [["Sjön", "Huset"]];
export const game_test = {
    graph: game_graph,
    options: game_options,
    story: game_story
};
var game_test1 = {
    graph: story_1.choices,
    options: story_1.choices_array,
    story: story_1.story_array
};
// Psudo code
function Graphmain(game) {
    console.log("Welcome to game, do you want to start? y/n");
    var input = prompt("> ");
    if (input === "y") { // input to start game
        play_game(game);
    }
    else { } // else do nothing?
}
function play_game(game) {
    var current_node = 0;
    for (var i = 0; i < game.graph.size; i++) { // loop over the grap
        var current_options = game.options[current_node];
        if ((0, list_1.is_null)(game.graph.adj[current_node])) { // if a node is an end-node, we end the game
            console.log(game.story[current_node]);
            game_over(game);
            break;
        }
        else {
            console.log(game.story[current_node]);
            display_options(current_options);
            var input = Number(prompt("> "));
            if (input <= (0, list_1.length)(game.graph.adj[current_node]) + 1 && input > 0) {
                console.log("You chose option " + input);
                current_node = Number((0, list_1.list_ref)(game.graph.adj[current_node], input - 1));
            }
            else {
                console.log("Invalid input! Choose again:");
            }
        }
    }
}
function display_options(node_option) {
    // displays the options to a story prompt
    for (var i = 0; i < (node_option.length); i++) {
        console.log("Option " + (i + 1) + ": " + node_option[i]);
    }
}
function game_over(game) {
    console.log("The game is over");
    console.log("Do you want to play again? y/n");
    var input = prompt("> ");
    if (input === "y") { // input to start game
        Graphmain(game);
    }
    else { } // else do nothing?
}
Graphmain(game_test1);
