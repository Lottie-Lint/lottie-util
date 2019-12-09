
import * as assert from 'assert';
import * as utils from '../src';

describe('index', () => {
  describe('isImage', () => {
    it('should be true', () => {
      assert(utils.isImage({
        id: 'image_0',
        w: 750,
        h: 1334,
        u: '',
        p: 'data:image/png;base64,i',
      }));
    });

    it('should be false', () => {
      assert(!utils.isImage({
        id: 'image_0',
      }));
    });
  });

  describe('isPrecomp', () => {
    it('should be true', () => {
      assert(utils.isPrecomp({
        id: 'image_0',
        layers: [{
          id: 'ixx',
        }],
      }));
    });

    it('should be false', () => {
      assert(!utils.isPrecomp({
        id: 'image_0',
      }));
    });
  });

  // describe('isHasMatte', () => {});
  // describe('isLottieJSON', () => {});
});
