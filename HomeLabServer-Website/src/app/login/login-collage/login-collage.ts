import { Component } from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';

export interface HexLogo  {
  key:number;
  value:string;
  animation:string;
}

@Component({
  selector: 'app-login-collage',
  imports: [
    NgOptimizedImage,
    NgClass
  ],
  templateUrl: './login-collage.html',
  standalone: true,
  styleUrls: ['./login-collage.css']
})
export class LoginCollage {
  imgWidth = 150;
  imgHeight = 173;
  // imgPlaceUrl = `https://placehold.co/${this.imgWidth}x${this.imgHeight}`;
  hexRows:HexLogo[][]  = [
    [
      { key: 1, value: this.ubuntuServerLogo(), animation: "animate-spin" },
      { key: 2, value: this.apacheLogo(), animation: "animate-vertical-flip" },
      { key: 3, value: this.tomcatLogo(), animation: "animate-wiggle" }
    ],
    [
      { key: 4, value: this.mariadb(), animation: "animate-pulse" },
      { key: 5, value: this.mySqlLogo(), animation: "animate-slit-in-horizontal" },
      // { key: 5, value: this.mySqlLogo(), animation: "animate-slit-in-horizontal" },
      // { key: 5, value: this.mySqlLogo(), animation: "animate-slit-in-horizontal" }
    ],
    [
      { key: 6, value: this.angularLogo(), animation: "animate-heartbeat" },
      { key: 7, value: this.tailwindLogo(), animation: "animate-wave" },
      { key: 8, value: this.springLogo(), animation: "animate-spring" }
    ],
    [
      { key: 9, value: this.javaLogo(), animation: "animate-java" },
      { key: 10, value: this.tsLogo(), animation: "animate-flicker" },
      // { key: 10, value: this.tsLogo(), animation: "animate-flicker" },
      // { key: 10, value: this.tsLogo(), animation: "animate-flicker" }
    ],
    [
      { key: 11, value: this.dockerLogo(), animation: "animate-bounce-in-top" },
      { key: 12, value: this.raspberrypiLogo(), animation: "animate-shake-horizontal" },
      { key: 13, value: this.gitLogo(), animation: "animate-git-branch-pulse" }
    ]
  ];
  constructor() {
  }
  ubuntuServerLogo():string {
    return "logo\\ubuntu-svgrepo-com.svg"
  }

  apacheLogo():string {
    return "logo\\apache-svgrepo-com.svg"
  }

  tomcatLogo():string {
    return "logo\\tomcat-svgrepo-com.svg"
  }
  mariadb():string {
    return "logo\\mariadb-svgrepo-com.svg"
  }
  mySqlLogo():string {
    return "logo\\mysql-svgrepo-com.svg"
  }
  angularLogo():string {
    return "logo\\angular-svgrepo-com.svg"
  }

  tailwindLogo():string {
    return "logo\\tailwind-svgrepo-com.svg"
  }

  springLogo():string {
    return "logo\\spring-svgrepo-com.svg"
  }

  javaLogo():string {
    return "logo\\java-logo-svgrepo-com.svg"
  }

  tsLogo():string {
    return "logo\\typescript-svgrepo-com.svg"
  }
  dockerLogo():string {
    return "logo\\docker-svgrepo-com.svg"
  }

  pytohnLogo():string {
    return "logo\\python-svgrepo-com.svg"
  }
  gitLogo():string {
    return "logo\\git-svgrepo-com.svg"
  }

  raspberrypiLogo(){
    return "logo\\raspberry-pi-svgrepo-com.svg"
  }
}
