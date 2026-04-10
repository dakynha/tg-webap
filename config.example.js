/**
 * Pushover configuration — copy this file to config.js and fill in your real values.
 *
 * IMPORTANT: config.js must NEVER be committed to version control.
 * It is listed in .gitignore for safety.
 */
var PUSHOVER_CONFIG = {
    token: "YOUR_PUSHOVER_APP_TOKEN",
    keys: {
        "RecipientName": "THEIR_PUSHOVER_USER_KEY"
    },
    targets: ["RecipientName"]
};
