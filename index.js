import { generate } from "random-words";

console.log(generate({ minLength: 6, maxLength: 10, exactly: 12 }).join(" "));
