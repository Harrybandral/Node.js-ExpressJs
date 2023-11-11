const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to  harry using Controller");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).send({ message: req.body });
  } catch (error) {
    res.send(400).send({ msg: "page not found" });
  }
};

module.exports = { home, register };
