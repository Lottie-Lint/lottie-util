
// lottie layer
interface ILottieJSONLayer {
  id: string | number;
  [propName: string]: any;
}

// lottie asset
interface ILottieJSONAsset {
  id: string | number;
  u?: string;
  p?: string;
  e?: number;
  w?: number;
  h?: number;
  layers?: ILottieJSONLayer[];
}

interface ILottieJSON {
  // 帧率
  fr: number;
  // 起始关键帧
  ip: number;
  // 结束关键帧
  op: number;
  // 资源信息
  assets: ILottieJSONAsset[];
  // 图层信息
  layers: ILottieJSONLayer[];
  markers: object[];
}

export function isLottieJSON(jsonObj: ILottieJSON): boolean {
  if (
    typeof jsonObj.fr === 'number' &&
    typeof jsonObj.op === 'number' &&
    Array.isArray(jsonObj.assets) &&
    Array.isArray(jsonObj.layers)
  ) {
    return true;
  }

  return false;
}

export function isImage(asset: ILottieJSONAsset) {
  if (!asset) {
    throw new Error('invel image asset');
  }

  if (asset.h && asset.w && asset.p) {
    return true;
  }

  return false;
}

export function isPrecomp(asset: ILottieJSONAsset) {
  if (!asset) {
    throw new Error('invalid precomp asset');
  }

  // 判断是否是元件
  if (Array.isArray(asset.layers) && asset.layers.length) {
    return true;
  }

  return false;
}

export function isHasMatte(layer) {
  if (layer && layer.tt) {
    return true;
  }

  return false;
}
