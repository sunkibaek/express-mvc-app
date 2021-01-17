const request = require("supertest");

const app = require("../../src/app");

describe("GET /", () => {
  it("responds with json", async () => {
    const response = await request(app)
      .get("/")
      .set("Accept", "application/json");
    const result = response.body;

    expect(response.status).toBe(200);
    expect(result).toEqual({ title: "Express" });
  });
});
