const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;

    const ongs = await connection('ongs').select('*');

    res.json(ongs);
  },

  async create(req, res) {
    const id = crypto.randomBytes(4).toString('HEX');
    const { name, email, whatsapp, city, uf } = req.body;

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    res.json({ id });
  },
};
