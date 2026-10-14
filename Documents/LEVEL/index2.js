
let text = "frontend-developer-kigali";

let result = text
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

console.log(result);
