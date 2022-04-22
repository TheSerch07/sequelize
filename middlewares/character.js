const { Router } = require('express');
const { Op, Character, Role } = require('../db');
const router = Router();


router.post('/', async (req,res)=> {
  const { code, name, hp, mana } = req.body
  if (!code) return res.status(404).send("Falta enviar datos obligatorios")
  if (!name) return res.status(404).send("Falta enviar datos obligatorios")
  if (!hp) return res.status(404).send("Falta enviar datos obligatorios")
  if (!mana) return res.status(404).send("Falta enviar datos obligatorios")
  // if (!race) res.status(404).send("Falta enviar datos obligatorios")
  try {
    const character = await Character.create(req.body)
    res.status(201).json(character)
  } catch {
    res.status(404).send("Error en alguno de los datos provistos")
  }
})

// Con Async

// router.get('/', async (req, res) => {
//   const { race } = req.query
//   const condition = {}
//   const where = {}
//   if (race) where.race = race
//   condition.where = where
//   const characters = await Character.findAll(condition)
//   return res.json(characters)
// })

// Con Promises

router.get('/', (req, res) => {
  const { race } = req.query
  const condition = {}
  const where = {}
  if (race) where.race = race
  condition.where = where
  Character.findAll(condition)
    .then(character => {
      if (character) return res.json(character)
    }).catch(err => console.log(err))
})

//Con Async

router.get('/:code', async (req, res) => {
  const { code } = req.params
  const charactersByCode = await Character.findByPk(code) 
  if (!charactersByCode) return res.status(404).send("El código " + code + " no corresponde a un personaje existente")
  return res.json(charactersByCode)
})

//Con Promises

// router.get('/:code', (req, res) => {
//   const { code } = req.params
//   Character.findByPk(code)
//     .then(character => {
//       if (!character) return res.status(404).send("El código " + code + " no corresponde a un personaje existente")
//       res.json(character)
//     }).catch(err => console.log(err))
// })
module.exports = router;