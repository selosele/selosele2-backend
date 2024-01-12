import { countryBlackList } from '@/shared/codes/code';
import { Lookup, lookup } from 'geoip-lite';

/** 클라이언트 IP 주소의 정보를 반환한다. */
export function getIpInfo(ip: string | number): Lookup {
  return lookup(ip);
}

/** 차단 대상의 IP 국가 코드 목록에 해당 코드의 존재 여부를 반환한다. */
export function isBlackIp(countryCode: string): boolean {
  return countryBlackList.includes(countryCode);
}
