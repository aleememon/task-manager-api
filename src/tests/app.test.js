const request = require("supertest");
const app = require("../../app");
jest.mock("../controllers/task.controller");

describe("Task API Smoke Tests", () => {
    it("GET /api/tasks", async () => {
        const res = await request(app).get("/api/tasks");
        expect(res.statusCode).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    it("POST /api/tasks/create", async () => {
        const res = await request(app)
            .post("/api/tasks/create")
            .send({
                title: "qwertyuiopasdfghjkl",
                description: "Testing...."
            });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("_id");
        expect(res.body.title).toBe("qwertyuiopasdfghjkl");
    });
});
