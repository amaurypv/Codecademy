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

-para cambiar antes del ultimo commit que se hizo (MUY IMPORTANTE) 
git checkout HEAD archivo-que-se-esta-trabajando
-tambien se puede hacer de la siguiente manera:
git checkout -- nombre-del-archivo

-para regresarse al cambio que se hizo en versiones anteriores. 
git reset 7numeros-del-commit-sha (se encuentran en la parte derecha de las versiones en la pagina de github)
-revisar en git status si se hizo el cambio
-despues se se tiene que poner
git retore 'nombre del archivo

-para regresarse al cambio que se hizo en versiones anteriores. 
git reset 7numeros-del-commit-sha (se encuentran en la parte derecha de las versiones en la pagina de github)

-para poner un trabajo en stand by y hacer modificaciones ya sea en otra rama o en un commit anterior, pero sin perder el avance que llevas en el trabajo que has puesto en stand by
git stash
-este comando hace que se ponga el trabajo en un directorio escondido para poder seguir trabajando en el, incluso se puede cambiar de rama 
-para regresar al trabajo y seguir editandolo se pone el comando 
git stash pop

-cuando se quiere modificar el ultimo commit, se puede usar -amend. para eso, promero modificamos los cambios que queremos hacer. 
despues se añade al staged 
-git add .
y despues se pone 
-git commit --amend  
nos va a pedir el nuevo nombre del commit. pero si se quiere dejar el nombre del anterior commit se pone. 
-git commit --amend  --no-edit
