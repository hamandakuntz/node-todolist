import fs from "fs";
import { read, readFileSync } from "node:fs";
import { write } from "fs";
import readlineSync from "readline-sync";

let array = [];

function todo() {
  while (true) {
    const options =
      array.length === 0 ? ["add", "list"] : ["add", "list", "check", "remove"];
    let index = readlineSync.keyInSelect(options, "Type your command:");

    if (index === 0) {
      const task = readlineSync.question("What do you want to do? ");
      array.push(`🔴 ${task}`);
    }
    if (index === 1) {
      for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
      }
    }
    if (index === 2) {
      for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
      }
      const taskToChange = readlineSync.keyInSelect(
        array,
        "What todo do you want to check/uncheck?"
      );
      array[taskToChange].includes("🔴")
        ? (array[taskToChange] = array[taskToChange].replace("🔴", "🟢"))
        : (array[taskToChange] = array[taskToChange].replace("🟢", "🔴"));
      for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
      }
    }
    if (index === 3) {
      const taskToRemove = readlineSync.keyInSelect(
        array,
        "What todo do you want to remove?"
      );
      array.splice(taskToRemove, 1);
    }
  }
}

todo();
