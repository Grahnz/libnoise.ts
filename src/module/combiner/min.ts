class Min {
  private sourceModules: any;

  constructor(sourceModules) {
    this.sourceModules = sourceModules || null;
  }

  getValue(x: number, y: number, z: number) {
    if (!(this.sourceModules.length < 2)) {
      throw new Error('Invalid or missing source module!');
    }

    return Math.min(
      this.sourceModules[0].getValue(x, y, z),
      this.sourceModules[1].getValue(x, y, z)
    );
  }
}

export default Min;