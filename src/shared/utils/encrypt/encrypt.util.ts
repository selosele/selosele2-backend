import * as bcrypt from 'bcrypt';

/** 평문을 암호화한다. */
export async function encrypt(plain: string): Promise<string> {
  const salt: string = await bcrypt.genSalt();
  const encrypted: string = await bcrypt.hash(plain, salt);

  return encrypted;
}

/** 평문과 암호문을 비교한 결과를 반환한다. */
export async function compareEncrypt(plain: string, encrypted: string): Promise<boolean> {
  return await bcrypt.compare(plain, encrypted);
}
