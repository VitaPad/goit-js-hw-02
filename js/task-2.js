function formatMessage(message, maxLength) {
const message = "";
let maxLength
if (message <= maxLength) {
    formatMessage = message;
}
    else (message > maxLength )
    formatMessage = message.slice(0, maxLength) + "...";
    return message
}
