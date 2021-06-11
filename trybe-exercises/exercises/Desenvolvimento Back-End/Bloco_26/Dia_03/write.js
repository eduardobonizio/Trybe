const fs = require('fs/promises');

module.exports = {
  write: (caminho, texto) => {
      fs.writeFile(caminho, texto);
      return 'ok'
  }
}
