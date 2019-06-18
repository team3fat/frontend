# frontend
"El Diquecito" frontend repository

--------
#Git
--------
git init

git remote add origin https://github.com/team3fat/frontend.git

git fetch --all

git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done

git pull --all

git branch

git checkout develop
