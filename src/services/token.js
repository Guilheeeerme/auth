const jwt = require("jsonwebtoken");
const { crypto: config } = require("../../config");

const signOptions = {
  algorithm: "RS256",
  expiresIn: "1w",
};

const sign = (payload) => jwt.sign(payload, config.jwt.privateKey, signOptions);

const verify = (token) =>
  new Promise((resolve, reject) =>
    jwt.verify(token, config.jwt.publicKey, (error, data) =>
      error ? reject() : resolve(data)
    )
  );

module.exports = {
  sign,
  verify,
};
