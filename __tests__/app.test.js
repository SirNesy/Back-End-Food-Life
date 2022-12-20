const request = require("supertest");
const { authentication, db } = require("../firebaseconfig");
const app = require("../app");

describe.only("POST /api/users", () => {
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

describe("POST /api/items", () => {
  test("201 response with new item", () => {
    return request(app)
      .post("/api/items")
      .send({
        itemName: "Milk",
        expiryDate: "20/02/2023",
        amount: 2,
      })
      .expect(201)
      .then(({ body }) => {
        expect(body.item).toMatchObject({
          itemId: expect.any(String),
          itemName: "Milk",
          expiryDate: expect.any(String),
          amount: 2,
          created_at: expect.any(Object),
        });
      });
  });
});

describe("GET : /api/items", () => {
  test("should return an array of items", () => {
    return request(app)
      .get("/api/items")
      .expect(200)
      .then(({ body }) => {
        body.items.forEach((item) => {
          expect(item).toMatchObject({
            itemId: expect.any(String),
            itemName: expect.any(String),
            expiryDate: expect.any(String),
            amount: expect.any(Number),
            created_at: expect.any(Object),
          });
        });
      });
  });
});

describe("GET: /api/items/:item_id", () => {
  test("200: should return an item of given id", () => {
    return request(app)
      .get("/api/items/AHzJ24JeW6YbxJCcJupC")
      .expect(200)
      .then(({ body }) => {
        expect(body.item).toEqual({
          itemId: "AHzJ24JeW6YbxJCcJupC",
          itemName: "Milk",
          expiryDate: "20/02/2023",
          amount: 2,
          created_at: expect.any(Object),
        });
      });
  });
});
