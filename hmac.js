// HMAC is a keyed hash function that is used to authenticate the integrity and authenticity of a message.
// HMAC is a hash function that requires a secret key.
const { createHmac } = require("crypto");

const password = "super-secret!";
const message = "🎃 hello jack";

const hmac = createHmac("sha256", password).update(message).digest("hex");

console.log(hmac);
