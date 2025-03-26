// Signing is the process of creating a digital signature of a message. A signature is a hash of the original message which is then encrypted with the sender’s private key.
// The signature can be verified by the recipient using the public key of the sender. This can guarantee the original message is authentic and unmodified.
const { createSign, createVerify } = require("crypto");
const { publicKey, privateKey } = require("./keypair");

const data = "this data must be signed";

/// SIGN

const signer = createSign("rsa-sha256");

signer.update(data);

const siguature = signer.sign(privateKey, "hex");

console.log(siguature);

/// VERIFY

const verifier = createVerify("rsa-sha256");

verifier.update(data);

const isVerified = verifier.verify(publicKey, siguature, "hex");

console.log(isVerified);
