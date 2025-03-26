// HASH - Chop & mix. Input: value of any length. Output: fixed length hash.
// Hash is a one-way function, meaning it cannot be reversed.
// Hashing algorithms are SHA-256, SHA-512, MD5, etc.
// Has small probability of collision
import { createHash } from "crypto";

function hash(valueToHash) {
    return createHash("sha256").update(valueToHash).digest("hex");
}

let password = "hi-mom!";
const hash1 = hash(password);
console.log(`${password} == ${hash1}`);

password = "hi-mom";
const hash2 = hash(password);
console.log(`${password} == ${hash2}`);
const match = hash1 === hash2;

console.log(match ? "✔️  good password" : "❌  password does not match");
