// this is here so you can set it to what you want, 
// ./ is just a reference to the directory you're in so
// folder_name is the same as ./folder_name

let sentText = event.message; 
const default_type = "js";
const prefix = '.';
const folder_name = 'xxx';


if (sentText[0] == prefix) {
    event.message = null;
    script_name = "${folder_name}/${sentText.slice(1)}.${default_type}";
    JsMacros.runScript(script_name);
    Chat.actionbar("Ran Script ".concat(script_name), false);
}
