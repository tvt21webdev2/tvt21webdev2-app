//Rajapinnasta testataan käyttäjän luonti, käyttäjän kirjautuminen ja käyttäjän poistaminen

const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const url = "http://localhost:8080";

describe("api tests", () => {
  let username = "username" + Math.round(Math.random() * 1000);
  let psword = "Password123!?";
  let token;

  describe("register a new user", () => {
    it("should reject request if username has less than 3 characters", (done) => {
      chai
        .request(url)
        .post("/register")
        .send({
          username: "lol",
          password: psword,
          passwordAgain: psword,
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });
    it("should reject request if username has more than 16 characters", (done) => {
      chai
        .request(url)
        .post("/register")
        .send({
          username: "abcdefghijklmnopqrstu",
          password: psword,
          passwordAgain: psword,
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

    it("should reject request if username has other than alphanumeric characters", (done) => {
      chai
        .request(url)
        .post("/register")
        .send({
          username: "username!?",
          password: psword,
          passwordAgain: psword,
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });
    it("should reject request if password has less than 8 characters", (done) => {
      chai
        .request(url)
        .post("/register")
        .send({
          username: username,
          password: "Asda1",
          passwordAgain: "Asda1",
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });
    it("should reject request if password has no uppercase letters", (done) => {
      chai
        .request(url)
        .post("/register")
        .send({
          username: username,
          password: "asdas1234",
          passwordAgain: "asdas1234",
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });
    it("should reject request if password has no lowercase letters", (done) => {
      chai
        .request(url)
        .post("/register")
        .send({
          username: username,
          password: "ASDAS1234",
          passwordAgain: "ASDAS1234",
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });
    it("should reject request if password has no numbers", (done) => {
      chai
        .request(url)
        .post("/register")
        .send({
          username: username,
          password: "Asdasdasd",
          passwordAgain: "Asdasdasd",
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });
    it("should reject request if passwords do not match", (done) => {
      chai
        .request(url)
        .post("/register")
        .send({
          username: username,
          password: psword,
          passwordAgain: "thisdoesnotmatch",
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });
    it("should return status ok if successfully registered", (done) => {
      chai
        .request(url)
        .post("/register")
        .send({
          username: username,
          password: psword,
          passwordAgain: psword,
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
          username: username,
          password: psword,
          passwordAgain: psword,
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });
  });

  describe("login with credentials", () => {
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
    it("should reject request if credentials are wrong", (done) => {
      chai
        .request(url)
        .post("/login")
        .send({
          username: username,
          password: "asdasdasd",
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(401);
          done();
        });
    });
    it("should return status ok if logged in successfully", (done) => {
      chai
        .request(url)
        .post("/login")
        .send({
          username: username,
          password: psword,
        })
        .end((err, res) => {
          token = res.header["set-cookie"].pop().split(",")[0];
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe("delete user", () => {
    it("should reject request if token is wrong", (done) => {
      chai
        .request(url)
        .delete("/user/delete")
        .set("Cookie", "token=likdsjfgkljafg")
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(401);
          done();
        });
    });
    it("should return status ok if user deleted successfully", (done) => {
      chai
        .request(url)
        .delete("/user/delete")
        .set("Cookie", token)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
    it("should reject request if username does not exist in database", (done) => {
      chai
        .request(url)
        .delete("/user/delete")
        .set("Cookie", token)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(404);
          done();
        });
    });
  });
});
