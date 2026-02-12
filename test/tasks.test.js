const request = require("supertest");
const app = require("../index");

describe("Task Management API", () => {
  test("POST /tasks creates a task", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({ title: "Test task" });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("title", "Test task");
    expect(res.body).toHaveProperty("completed", false);
    expect(res.body).toHaveProperty("createdAt");
  });

  test("GET /tasks returns task list", async () => {
    const res = await request(app).get("/tasks");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });
});