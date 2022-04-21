const { Router } = require('express');
const { Op, Character, Role } = require('../db');
const router = Router();


router.post('/character', (req,res)=> {
  const { code, name, age, hp, mana, race } = req.body
  if (!code) res.status(404).send("Falta enviar datos obligatorios")
  if (!name) res.status(404).send("Falta enviar datos obligatorios")
  if (!hp) res.status(404).send("Falta enviar datos obligatorios")
  if (!mana) res.status(404).send("Falta enviar datos obligatorios")
  if (!race) res.status(404).send("Falta enviar datos obligatorios")
})
module.exports = router;