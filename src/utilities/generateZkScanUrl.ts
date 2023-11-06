import config from 'config';

export type UrlType = 'address' | 'token' | 'tx';

export const generateZkScanUrl = <T extends UrlType = 'address'>(hash: string, urlType?: T) => {
  const safeUrlType = urlType || 'address';
  return `${config.zkScanUrl}/${safeUrlType}/${hash}`;
};

export default generateZkScanUrl;
