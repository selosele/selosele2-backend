import { MenuDto } from "./menu.dto";

/** 메뉴 권한 DTO */
export class MenuRoleDto {

  /** 메뉴 ID */
  menuId?: number;

  /** 권한 ID */
  roleId?: string;

  /** 메뉴 */
  menu?: MenuDto;
  
}
