import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'shell-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(1111);
    this.route.params.subscribe((params) => {  
      const { remoteEntry, remoteName, exposedModule } = params;  
      loadRemoteModule({ remoteEntry, remoteName, exposedModule })  
        .then((m) => {  
          // 这里可以执行任何微前端模块加载后的逻辑  
          console.log('微前端模块加载成功:', m);  
        })  
        .catch((err) => {  
          console.error('微前端模块加载失败:', err);  
        });  
    });
  }

}
