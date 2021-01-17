const request = require("supertest");

const app = require("../../src/app");

describe("GET /users", () => {
  it("responds with json", async () => {
    const response = await request(app)
      .get("/users")
      .set("Accept", "application/json");
    const result = response.body;

    expect(response.status).toBe(200);
    expect(result[0]).toEqual({ name: "John" });
    expect(result[1]).toEqual({ name: "Elon" });
  });
});
