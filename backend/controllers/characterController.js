const { Character, Role } = require('../db/models');


async function getCharacter(req, res){
  try {
    let characters = await Role.findAll({
      include: {model: Character},
      raw: true
    });
    res.json(characters)
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { getCharacter }
