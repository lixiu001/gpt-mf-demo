import { loadRemoteModule } from '@angular-architects/module-federation';
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadRemoteGuard implements CanLoad {
  constructor(private router: Router) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(1222);
      
    // 加载远程模块
    return loadRemoteModule({
      remoteEntry: 'http://localhost:3001/remoteEntry.js',
      remoteName: 'mfe1',
      exposedModule: './Module',
    }).then(() => {
      return true; // 远程模块加载成功，允许加载路由模块
    }).catch(error => {
      console.error('Failed to load remote module:', error);
      this.router.navigate(['/404']); // 远程模块加载失败，导航到404页面或其他错误处理
      return false; // 不允许加载路由模块
    });
  }

  
}
