const check = require("./references-empty-enum");

it("succeeds when the commit has no type", () => {
    const [actual] = check({ type: "" });
    expect(actual).toBe(true);
});

it("succeeds when the type enum is empty", () => {
    const [actual] = check({ type: "fix" }, "always", []);
    expect(actual).toBe(true);
});

describe("when references is empty", () => {
    const references = [];

    test("a on 'always [a]' succeeds", () => {
        const [actual] = check({ references, type: "a" }, "always", ["a"]);
        expect(actual).toBe(true);
    });

    test("b on 'always [a]' succeeds", () => {
        const [actual] = check({ references, type: "b" }, "always", ["a"]);
        expect(actual).toBe(true);
    });

    test("a on 'never [a]' fails", () => {
        const [actual] = check({ references, type: "a" }, "never", ["a"]);
        expect(actual).toBe(false);
    });

    test("b on 'never [a]' succeeds", () => {
        const [actual] = check({ references, type: "b" }, "never", ["a"]);
        expect(actual).toBe(true);
    });
});

describe("when references is not empty", () => {
    const references = ["CMS-123"];

    test("a on 'always [a]' fails", () => {
        const [actual] = check({ references, type: "a" }, "always", ["a"]);
        expect(actual).toBe(false);
    });

    test("b on 'always [a]' succeeds", () => {
        const [actual] = check({ references, type: "b" }, "always", ["a"]);
        expect(actual).toBe(true);
    });

    test("a on 'never [a]' succeeds", () => {
        const [actual] = check({ references, type: "a" }, "never", ["a"]);
        expect(actual).toBe(true);
    });

    test("b on 'never [a]' succeeds", () => {
        const [actual] = check({ references, type: "b" }, "never", ["a"]);
        expect(actual).toBe(true);
    });
});
