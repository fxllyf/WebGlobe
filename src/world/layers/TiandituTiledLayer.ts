///<amd-module name="world/layers/TiandituTiledLayer"/>
import TiledLayer = require('./TiledLayer');

class TiandituTiledLayer extends TiledLayer {

  getTileUrl(level: number, row: number, column: number): string {
    var url = "";
    var sum = level + row + column;
    var serverIdx = sum % 8;
    url = `//t${serverIdx}.tianditu.com/DataServer?T=vec_w&x=${column}&y=${row}&l=${level}`;
    return url;
  }
  
}

export = TiandituTiledLayer;