export function logEvent(message, details = {}) {
if (window.LoggingMiddleware) {
window.LoggingMiddleware.log(message, details);
} else {
const logs = JSON.parse(localStorage.getItem("shortener:logs")) || [];
logs.push({ timestamp: new Date().toISOString(), message, details });
localStorage.setItem("shortener:logs", JSON.stringify(logs));
}
}