import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { MySharedService } from 'my-shared';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
  providers: [MySharedService]
})
export class AppComponent implements OnInit {
  title = 'shell';
  data: any;
  constructor(
    private router: Router,
    private mySharedService: MySharedService,
    private resolver: ComponentFactoryResolver,
    private vcRef: ViewContainerRef
  ) {
    this.data = mySharedService.getData() || '123213';
  }

  async ngOnInit() {
    console.log(this);
    // 在主应用的模板中，你可以使用 ComponentFactoryResolver 来动态加载远程组件
    // const subAppModule = await loadRemoteModule({
    //   remoteEntry: 'http://localhost:4201/remoteEntry.js',
    //   remoteName: 'subApp',
    //   exposedModule: './SubAppModule',
    // });
    // const moduleRef = await subAppModule;
    // const factory = moduleRef.instance.resolveComponentFactory('TaskDetailComponent');
    // this.vcRef.createComponent(factory);
  }


  goToTask(type: string) {
    this.router.navigate(['/task'])
  }


  test() {
    this.data = this.mySharedService.getData();
  }


  goToShell(): void {
    this.router.navigate([''])
  }

}
