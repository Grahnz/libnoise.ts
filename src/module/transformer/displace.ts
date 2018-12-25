class Displace {
  sourceModule: any;
  xModule: any;
  yModule: any;
  zModule: any;

  constructor(sourceModule, xModule, yModule, zModule) {
    this.sourceModule = sourceModule || null;
    this.xModule = xModule || null;
    this.yModule = yModule || null;
    this.zModule = zModule || null;
  }

  getValue(x, y, z) {
    if (!this.sourceModule) {
      throw new Error('Invalid or missing source module!');
    }

    if (!this.xModule || !this.yModule || !this.zModule) {
      throw new Error('Invalid or missing displacement module(s)!');
    }

    return this.sourceModule.getValue(
      x + this.xModule.getValue(x, y, z),
      y + this.yModule.getValue(x, y, z),
      z + this.zModule.getValue(x, y, z)
    );
  }
}

export default Displace;