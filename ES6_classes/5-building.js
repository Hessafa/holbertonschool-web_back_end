export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = sqft;
    
    
    if (this.constructor !== Building) {
      
      if (!this.constructor.prototype.hasOwnProperty('evacuationWarningMessage')) {
        throw Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  get sqft() {
    return this._sqft;
  }
}
