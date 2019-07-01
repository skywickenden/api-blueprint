const request = require("supertest");
const app = require("./app");

// Attaching this simple get request for testing 
// This would normally be a route provided for by the api.
app.get("/foo", (req, res) => res.json({bar: "baz"}));


describe("GET /foo ", () => {
  test("It should be an object with a bar property and baz content", async () => {
    const response = await request(app).get("/foo");
    expect(response.statusCode).toBe(200);
    expect(Object.keys(response.body).sort()).toEqual([
      "bar"
    ]);
    expect(response.body.bar).toBe("baz");

  });
});

