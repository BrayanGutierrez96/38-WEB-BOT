import chalk from "chalk";
import { timeDay } from "d3-time";

console.log(chalk.blue("hola") + chalk.red(" mundo"));
console.log(chalk.green("hola mundo2"));
console.log("hola mundo3");
console.log("hola mundo4");
console.log("hola mundo5");

const day = timeDay();

console.log(day);
