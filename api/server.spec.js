const supertest = require("supertest");

const server = require("./server");
const db = require("../database/dbConfig");

describe("server", () => {
//   describe("environment", () => {
//     it('should be set to the DB_ENV variable to "testing"', () => {
//       expect(process.env.DB_ENV.toBe("testing"));
//     });
//   });
  describe('GET /', () => {
      it('should return HTTP status code 200', () => {
          return supertest(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200)
            })
      })
  })
});
