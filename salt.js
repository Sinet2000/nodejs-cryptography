// Hashes are great for making passwords unreadable, but they are not good for storing passwords.
// Hashes are deterministic, meaning the same input will always produce the same output.
// This makes it easy for attackers to use a dictionary attack to find the original password.

// Salting is a technique used to make hashes more secure.
// Salting involves adding random data to the input before hashing it.
// This makes it difficult for attackers to use a dictionary attack.
// The salt must be unique for each password.
// The salt is stored with the password hash.
// When a user logs in, the salt is retrieved and used to hash the password.
// The hash is then compared with the stored hash.
// If the hashes match, the password is correct.
// If the hashes do not match, the password is incorrect.
import { scryptSync, randomBytes, timingSafeEqual } from "crypto";

const users = [];

function signup(email, password) {
    const salt = randomBytes(16).toString("hex");
    const hashedPassword = scryptSync(password, salt, 64).toString("hex");

    const user = { email, password: `${salt}:${hashedPassword}` };

    users.push(user);

    return user;
}

function login(email, password) {
    const user = users.find((v) => v.email === email);

    const [salt, key] = user.password.split(":");
    const hashedBuffer = scryptSync(password, salt, 64);

    const keyBuffer = Buffer.from(key, "hex");
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    if (match) {
        return "login success!";
    } else {
        return "login fail!";
    }
}

const user = signup("foo@bar.com", "pa$$word");

console.log(user);

const result = login("foo@bar.com", "password");

console.log(result);

const result2 = login("foo@bar.com", "pa$$word");

console.log(result2);
