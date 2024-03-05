import { Compiler, Injectable, NgModuleFactoryLoader, NgModuleRef, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModuleFederationService {
  constructor(private loader: NgModuleFactoryLoader, private viewContainerRef: ViewContainerRef) {}

  // Angular的NgModuleFactoryLoader动态加载远程模块。
  async loadRemoteModule() {
    // const remoteModule = await this.loader.load('http://localhost:3001/remoteEntry.js', 'remoteModule');
    // const moduleRef = remoteModule.create(this.viewContainerRef.parentInjector);
    // 在此处使用moduleRef来访问远程模块中的组件、服务等
  }
}
