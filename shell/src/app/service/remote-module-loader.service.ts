import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemoteModuleLoaderService {

  constructor() { }

  async loadModule(moduleName: string) {
    try {
      const script = document.createElement('script');
      script.src = `http://localhost:3001/remoteEntry.js`;
      script.type = 'module';
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        // 在加载完成后，远程模块会注册到全局变量中，可以在这里通过全局变量获取远程模块
        const remoteModule = (window as any)['remote1'].Module;
        console.log(remoteModule);
        // 根据需要执行远程模块的初始化逻辑
      };
    } catch (error) {
      console.error(`Failed to load remote module ${moduleName}:`, error);
    }
  }
}
