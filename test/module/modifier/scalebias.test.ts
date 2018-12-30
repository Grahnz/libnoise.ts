import { expect } from 'chai';
import { describe, it } from 'mocha';

import { Const } from '@app/module/generator';
import { ScaleBias } from '@app/module/modifier';

describe('module/combiner/scalebias', () => {
  it("can construct successfully", () => {
    // Setup
    const value = 2;
    const sourceModule = new Const(value);
    const scale = 2;
    const bias = 2;

    // Test
    const testFunc = () => {
      new ScaleBias(sourceModule, scale, bias);
    };

    // Assert
    expect(testFunc).not.to.throw();
  });

  it("calling getValue without a sourceModule throws an error", () => {
    // Setup
    const x = 10;
    const y = 10;
    const z = 10;
    const mockModule = new ScaleBias();

    // Test
    const testFunc = () => {
      mockModule.getValue(x, y, z);
    };

    // Assert
    expect(testFunc).to.throw();
  });

  it("calling getValue returns a number", () => {
    // Setup
    const x = 10;
    const y = 10;
    const z = 10;
    const mockModule = createMockModule();

    // Test
    const value = mockModule.getValue(x, y, z);

    // Assert
    expect(value).to.be.ok;
  });
});

function createMockModule() {
  const value = 2;
  const sourceModule = new Const(value);
  const scale = 2;
  const bias = 2;

  // Test
  return new ScaleBias(sourceModule, scale, bias);
}