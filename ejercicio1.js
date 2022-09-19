function Inicializar() {
    let listaNombres= [];
    for (let i = 0; i < 5; i++) {
        let nombre= prompt("Solicite 5 nombres, por favor");
        if (listaNombres.includes(nombre)==true) {
            prompt("El nombre introducido ya esta en la lista, introduzcalo de nuevo")
        }else{
            listaNombres.push(nombre);
        }
        
        for (let j = 0; j < array.length; j++) {
            
            
        }
        
    }   
    //console.log(listaNombres.sort())
}