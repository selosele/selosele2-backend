import { UserInfo } from "src/auth/decorator/user-info.decorator";
import { User } from "src/auth/user.entity";

/**
 * 권한 유틸
 */
export class AuthUtil {
  user: User = null;

  constructor(@UserInfo() user: User) {
    this.user = user;
    console.log(this.user);
  }

  static hasRole(role: string) {
    return false;
  }

}
