let helpObj = require('./Commands/help');
let treeObj = require('./Commands/tree');
let organizeObj = require('./Commands/organize');
let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];

switch(command)
{
    case "help":
        helpObj.helpFn();
        break;
    case "tree":
        treeObj.treeFn(path);
        break;
    case "organize":
        organizeObj.organizeFn(path);
        break;
    default:
        console.log('Invalid command');
        break;
}