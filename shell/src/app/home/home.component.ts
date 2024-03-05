import { Component, OnDestroy, OnInit } from '@angular/core';
import { RemoteModuleLoaderService } from '../service/remote-module-loader.service';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { ActivatedRoute,  Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  tasks = [
    { title: 'CRR', description: 'Description for Task CRR' ,modulePath:'/remote'},
    { title: 'DAP', description: 'Description for Task DAP' ,modulePath:'/remote1'},
  ];

  constructor(
    private router: Router ,
    private route: ActivatedRoute,
    private remoteModuleLoaderService: RemoteModuleLoaderService) {}
  ngOnInit(): void {
    console.log('Shell HomeComponent Init');
  }

  ngOnDestroy(): void {
    console.log('Shell HomeComponent Destroy');
  }

  loadRemoteModule(modulePath: string) {
    // this.remoteModuleLoaderService.loadModule(moduleName);
    // loadRemoteModule({
    //   remoteEntry: 'http://localhost:3001/remoteEntry.js',
    //   remoteName: 'mfe1',
    //   exposedModule: './Module',
    // }).then((m) => {
    //   console.log(m);
    //   return m.MicrofrontendModule;
    // })
    this.router.navigate([modulePath]);
  }
}
