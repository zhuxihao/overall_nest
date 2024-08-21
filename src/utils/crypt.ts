import { createCipheriv, createDecipheriv } from 'crypto';

const cryptoKey = 'adjg894kjgng394uadjg894kjgng394u';

const aesIv = 'adjg894kjgng394u';

const isHex = (str) => {
  return /[0-9a-fA-F]+$/.test(str);
};

// 加密
export const enCrypt = (info) => {
  if (typeof info === 'object') {
    info = JSON.stringify(info);
  }
  const cipher = createCipheriv(
    'aes-256-cbc',
    Buffer.from(cryptoKey),
    Buffer.from(aesIv),
  );
  const encrypted = cipher.update(info, 'utf8', 'hex') + cipher.final('hex');
  // 十六进制字符串转换为 Buffer
  const buffer = Buffer.from(encrypted, 'hex');

  // 将 Buffer 转换为 Base64 编码的字符串
  const base64String = buffer.toString('base64');
  return base64String;
};

// 解密
export const deCrypt = (info: any) => {
  console.log(info, '加密');

  info = info.replace(/\r\n/g, '');
  if (!isHex(info)) {
    const buffer = Buffer.from(info, 'base64'); // Base64 解码为 Buffer
    info = buffer.toString('hex'); //buffer解析为16进制
  }
  console.log(info, '1');

  const decipher = createDecipheriv(
    'aes-256-cbc',
    Buffer.from(cryptoKey),
    Buffer.from(aesIv),
  );
  console.log(decipher, '2');

  decipher.setAutoPadding(true); // 这将自动移除PKCS#7填充
  console.log(decipher, '3');

  const decrypted =
    decipher.update(info, 'hex', 'utf8') + decipher.final('utf8');
  return decrypted;
};
