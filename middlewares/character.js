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
module.exports = router;