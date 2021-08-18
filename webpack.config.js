const CopyPlugin = require('copy-webpack-plugin');

new CopyPlugin({
    patterns: [ //webpack va agregar en la carpeta build que es donde se desplega la app ,se van a guardar los assets y el service-worker para tenerlo ahi . y hacer mas rapido el renderizado al guardar en el cache info.
      { from: 'public/manifest.json', to: '' },
      { from: 'public/service-worker.js', to: '' },
      { from: 'public/icon.png', to: 'assets' },
    ],
  });