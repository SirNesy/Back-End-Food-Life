const request = require("supertest");
const { authentication, db } = require("../firebaseconfig");
const app = require("../app");

describe("POST /api/users", () => {
  test("201 response with new user", () => {
    return request(app)
      .post("/api/users")
      .send({
        userId: "0012abc",
        firstName: "john",
        lastName: "doe",
        email: "johndoe@gmail.com",
        profile_pic: null,
      })
      .expect(201)
      .then(({ body }) => {
        console.log(body);
        expect(body.user).toEqual({
          userId: "0012abc",
          firstName: "john",
          lastName: "doe",
          email: "johndoe@gmail.com",
          profile_pic: null,
        });
      });
  });
});
