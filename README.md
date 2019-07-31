# frontend
"El Diquecito" frontend repository

--------
#Git
--------
```sh
$ git init
```
```sh
$ git remote add origin [link]
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
