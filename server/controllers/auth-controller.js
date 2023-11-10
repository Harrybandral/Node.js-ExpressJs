const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to  harry using Controller");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    res.status(200).send("Welcome to registration page using controller again");
  } catch (error) {
    res.send(400).send({ msg: "page not found" });
  }
};

module.exports = { home, register };
