import supertest from "supertest";
import app from "../src";


const api = supertest(app);

describe("API test" , () => {
    it("should return 201 when inserting a fruit",  async () => {
      const result = await api.post("/fruits");
      expect(result.status).toEqual(201)
    }  )
    it("should return 409 when inserting a fruit that is already registered", async () => {
      const result = await api.post("/fruits");
      expect(result.status).toBe(409)
    })
})
