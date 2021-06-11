const fs = require('fs/promises');

module.exports = {
  write: (caminho, texto) => {
    try{
      fs.writeFile(caminho, texto);
      return 'ok'
    }catch(err){
      throw new Error('write error')
    }
  }
}
