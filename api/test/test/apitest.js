//Rajapinnasta testataan käyttäjän luonti, käyttäjän kirjautuminen ja käyttäjän poistaminen

const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const url = "http://localhost:8080";

describe("api tests", () => {
  let name = "username" + Math.round(Math.random() * 1000);
  let psword = "password123";

  describe("register a new user", () => {
    it("should return status ok if successfully registered", (done) => {
      chai
        .request(url)
        .post("/register")
        .send({
          username: name,
          password: psword,
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(201);
          done();
        });
    });
    it("should reject request if user already exists", (done) => {
      chai
        .request(url)
        .post("/register")
        .send({
          username: name,
          password: psword,
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });
  });

  describe("login with credentials", () => {
    it("should return status ok if logged in successfully", (done) => {
      chai
        .request(url)
        .post("/login")
        .send({
          username: name,
          password: psword
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        })
    })
    it("should reject request if credentials are wrong", (done) => {
      chai
        .request(url)
        .post("/login")
        .send({
          username: name,
          password: "asdasdasd",
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(401);
          done();
        });
    });
    it("should reject request if username does not exist", (done) => {
      chai
        .request(url)
        .post("/login")
        .send({
          username: "idontexistinyourdb",
          password: psword,
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(404);
          done();
        });
    });
  })
});
