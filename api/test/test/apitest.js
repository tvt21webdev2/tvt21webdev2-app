//Rajapinnasta testataan käyttäjän luonti, käyttäjän kirjautuminen ja käyttäjän poistaminen

const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const url = "http://localhost:8080";

describe("api tests", () => {
  describe("register a new user", () => {
    it("should return status ok if successfully registered", (done) => {
      chai
        .request(url)
        .post("/register")
        .send({
          username: "username" + Math.round(Math.random()*1000),
          password: "test123",
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
          username: "test",
          password: "test",
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });
  });
});
