// write test for function

const { encrypt } = require("./caesarCipher")
const { decrypt } = require("./caesarCipher")

test("fails if text does not encrypt"), () => {
    expect(encrypt("hello", 2)).toBe("jgnnq")
}