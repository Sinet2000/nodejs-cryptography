// Asymmetric encryption depends on two keys. Encrypt a message with the public key and decrypt it with the private key.
// Asymmetric encryption is used on the web whenever you use HTTPS to establish an encrypted connection to that website. The browser finds the public key of an SSL certificate installed on the website, which is used to encrypt any data you send, then the private key decrypts it.
import { publicEncrypt, privateDecrypt } from "crypto";
import { publicKey, privateKey } from "./keypair.js";

const encryptedData = publicEncrypt(publicKey, Buffer.from(secretMessage));

console.log(encryptedData.toString("hex"));

const decryptedData = privateDecrypt(privateKey, encryptedData);

console.log(decryptedData.toString("utf-8"));
