let num = 4;

function addEmpleado () {
    let dni= prompt("Introduzca el dni");
    let nombre= prompt("Introduzca el nombre");
    let apellidos=prompt("Introduzca los apellidos");
    
    let listaDNI= document.getElementsByClassName("dni");
    
        
        
            let tabla = document.getElementById("tabla1");
            fila = document.createElement("tr"); 
            columna0 = document.createElement("td"); 
            columna1 = document.createElement("td"); 
            columna2 = document.createElement("td"); 
            columna3 = document.createElement("td"); 
        
            contenidoNum= document.createTextNode(num);
            contenidoDNI = document.createTextNode(dni);
            contenidoNombre = document.createTextNode(nombre);
            contenidoApellidos = document.createTextNode(apellidos);
        
            columna0.appendChild(contenidoNum);
            columna1.appendChild(contenidoDNI);
            columna2.appendChild(contenidoNombre); 
            columna3.appendChild(contenidoApellidos); 
             
            fila.appendChild(columna0);
            fila.appendChild(columna1);
            fila.appendChild(columna2);
            fila.appendChild(columna3);
    
            
        
            tabla.appendChild(fila);
            num++;
            
       
        
    
}

function delEmpleado () {
    let dni= prompt("Introduzca el dni para borrar el empleado");
 
    let listaTd= document.getElementsByClassName("dni");

    for (let i = 0; i < listaTd.length; i++) {
        if (listaTd[i]==dni) {
            delDni=document.getElementsByTagName(dni);
            document.removeChild(delDni);
        }else{
            alert("El dni introducido no coincide con ninguno ya existente");
        }  
    }
  
}

