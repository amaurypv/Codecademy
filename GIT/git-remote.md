remote" se refiere a un repositorio en línea o en otro lugar aparte de tu repositorio local. Los repositorios remotos son esenciales para la colaboración y la gestión del código en equipos, ya que permiten a múltiples personas trabajar juntas en el mismo proyecto

Clonar un repositorio
Para trabajar con un repositorio remoto, generalmente comienzas por clonar el repositorio remoto en tu máquina local. Esto se hace utilizando el comando git clone. Por ejemplo:
-git clone URL_DEL_REPOSITORIO_REMOTO nombre-repositorio-propio


primero clonar el repositorio 
ir al directorio donde se encuentra el repositorio
para saber si alguien de equipo hizo algun cambio en el proyecto 
-git fetch
-trabajar en una rama nueva creada por cada usuario
-cambiarse a la rama nueva
para subir lo que se ha trabajado al proyecto. 
git merge origin/master

git clone: Creates a local copy of a remote.
git remote -v: Lists a Git project’s remotes.
git fetch: Fetches work from the remote into the local copy.
git merge origin/master: Merges origin/master into your local branch.
git push origin branch_name Pushes a local branch to the origin remote.
