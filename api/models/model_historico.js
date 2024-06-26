const mongoose = require('mongoose');

const historicoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
  },
  calculo: { 
    type: Number, String,
    trim: true, 
    required: true 
  },
  
});

module.exports = mongoose.model("historico", historicoSchema);
