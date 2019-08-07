# frontend
"El Diquecito" frontend repository
--------
#Instalacion del proyecto
Lo primero que hay que hacer es descargar el repositorio de git con los siguientes pasos:
--------
#Git
##crear una carpeta donde se instalara el proyecto
```sh
$ git init
```
```sh
$ git remote add origin https://github.com/team3fat/frontend.git
```
```sh
$ git fetch --all
```
```sh
git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
```
```sh
$ git pull --all
```
```sh
$ git branch
```
```sh
$ git checkout develop
```

--------
Despues instalar las siguientes tecnologias desde la terminal
```sh
$ Sudo apt install npm
```
dentro de la carpeta del proyecto usar
```sh
npm install
```

--------
# Stack


| Tech | 
| ------ | 
| UI React “Base” == 16.8.6 | 
| npm “Package manager” == 3.5.2 |  
| “Build System”  |  
| Lint (No implementado - Opcional) |  
| CSS |  
| HTML5 | 
| IDE Vscode |
