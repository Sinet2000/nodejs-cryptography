// Encryption is the process of encoding a message or information in such a way that only authorized parties can access it.
// Decryption is the process of taking encoded or encrypted text or other data and converting it back into text that you or the computer can read and understand.
// Encryption and decryption are reversible operations.
// Each time a message is encrypted it is randomized to produce a different output.
// In symmetric encryption, the same key is used to encrypt and decrypt the message.

const { createCipheriv, randomBytes, createDecipheriv } = require("crypto");

/// Cipher

const message = "i like turtles";
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv("aes256", key, iv);

/// Encrypt

const encryptedMessage =
    cipher.update(message, "utf8", "hex") + cipher.final("hex");
console.log(`Encrypted: ${encryptedMessage}`);

/// Decrypt

const decipher = createDecipheriv("aes256", key, iv);
const decryptedMessage =
    decipher.update(encryptedMessage, "hex", "utf-8") + decipher.final("utf8");
console.log(`Deciphered: ${decryptedMessage.toString("utf-8")}`);
