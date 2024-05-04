// Listen for messages prefixed with ! to repeat them
// Or prefixed with @ to execute local macro (@pos.js will run pos.js)

var N1 = '<Arch_x64>'; // Nickname to listen for
var PREFIXES = ['!', '@']; // Prefixes for trigger messages

var receivedMessage = event.text.getString();

// Check if the received message includes the nickname and any of the trigger prefixes
if (receivedMessage.includes(N1)) {
    for (var i = 0; i < PREFIXES.length; i++) {
        var prefix = PREFIXES[i];
        if (receivedMessage.includes(prefix)) {
            var messageStartIndex = receivedMessage.indexOf(prefix); // Find the index of the prefix
            var parameter = receivedMessage.substring(messageStartIndex + prefix.length).trim(); // Extract the parameter after the prefix

            // Check if the parameter is not empty
            if (parameter !== '') {
                // Check the prefix to determine the action
                switch (prefix) {
                    case '!':
                        // Say the extracted message
                        Chat.say(parameter);
                        break;
                    case '@':
                        // Execute the script
                        JsMacros.runScript(parameter);
                        break;
                    default:
                        // Do nothing for unrecognized prefixes
                        break;
                }
            }
        }
    }
}
