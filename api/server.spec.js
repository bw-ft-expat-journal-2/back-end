const supertest = require("supertest");

const server = require("./server");
const db = require("../database/dbConfig");

describe("server", () => {
  //   describe("environment", () => {
  //     it('should be set to the DB_ENV variable to "testing"', () => {
  //       expect(process.env.DB_ENV.toBe("testing"));
  //     });
  //   });
  describe("GET /", () => {
    it("should return HTTP status code 200", () => {
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });

    it("should return JSON", async () => {
      const res = await supertest(server).get("/");

      expect(res.type).toMatch(/json/i);
    });

    it("should return an api property with the value we're up and running", async () => {
      const res = await supertest(server).get("/");

      expect(res.body.api).toBe("we're up and running");
    });
  });

  describe("POST /register", () => {
    beforeEach(async () => {
      await db("users").truncate();
    });

    it("should return 201 when passed correct data", () => {
      return supertest(server)
        .post("/api/auth/register")
        .send({ username: "newuser", password: "passwords" })
        .then((res) => {
          expect(res.status).toBe(201);
        });
    });

    it("should fail with code 400 when passed incorrect data", () => {
      return supertest(server)
        .post("/api/auth/register")
        .send({})
        .then((res) => {
          expect(res.status).toBe(400);
        });
    });

    it("should insert the user into the database", async () => {
      const res = await supertest(server)
        .post("/api/auth/register")
        .setEncoding({ username: "newuser", password: "passwords" });

        expect(res.body.data).toBe({ username: "newuser", password: "passwords" })
    });
  });
});
