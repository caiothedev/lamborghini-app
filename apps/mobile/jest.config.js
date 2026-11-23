/** @type {import("jest").Config} */
module.exports = {
    preset: "jest-expo",
    testMatch: ["<rootDir>/src/**/*.test.{ts,tsx}"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.test.{ts,tsx}"],
}