import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate() {
    // 这里判断登录状态, 返回 true 或 false
    console.log('kkk');
    return true;
  }
}