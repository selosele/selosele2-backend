import { JwtService } from '@nestjs/jwt';

/** JWT Service 인스턴스를 생성 및 리턴하는 팩토리 클래스 */
export class JwtServiceFactory {

  /** JWT Service 인스턴스 */
  private static instance: JwtService = null;

  /** JWT Service 인스턴스를 리턴한다. */
  static create() {
    if (null === this.instance) {
      this.instance = new JwtService();
    }
    return this.instance;
  }

}