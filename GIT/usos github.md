-para clonar un repositorio se tiene que ir a la pagina de github y copiar la direccion del repositorio
despues en terminal en la carpeta donde se quiere descargar el repositorio poner el siguiente codigo. 
git clone direccion-de-la-pagina-a-clonar

-para agregar modificaciones a un repositorio.
git add .

-para checar el status de los archivos. 
git status

-para quitar un archivo que se agrego y no se quiera mandar a commit 
git reset HEAD nombre-archivo   

-para añadir los cambios del stagging area al repositorio 
git commit -m 'titulo de los cambios'

-para ver las ramas que se tiene en el repositorio se va a poner un asterisco sobre la rama en la que se está trabajando 
git branch

-para cambiar de rama
git checkout rama-a-cambiar

-para cambiar antes del ultimo commit que se hizo 
-git checkout HEAD archivo-que-se-esta-trabajando

-para regresarse al cambio que se hizo en versiones anteriores. 
git reset 7numeros-del-commit-sha (se encuentran en la parte derecha de las versiones en la pagina de github)
-revisar en git status si se hizo el cambio
-despues se se tiene que poner
git retore 'nombre del archivo

-para regresarse al cambio que se hizo en versiones anteriores. 
git reset 7numeros-del-commit-sha (se encuentran en la parte derecha de las versiones en la pagina de github)