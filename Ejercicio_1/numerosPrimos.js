const numerosPrimos = [];

let numeros_primos = (parametro_a, parametro_b) => {
    //Valida si se han ingresado solo 2 parámetros
    if (typeof process.argv[3] === 'undefined' || typeof process.argv[4] !== 'undefined') 
        return 'Debes ingresar 2 parámetros';

    let param_a = '';
    let param_b = '';

    param_a = parametro_a;
    param_b = parametro_b;
    
    //Valida si parámetros son solo números naturales
    if (isNaN(param_a) || isNaN(param_b) || param_a.includes("-") || param_b.includes("-") || param_a.includes(".") || param_b.includes(".")) 
        return 'Debes ingresar solo números naturales';
    
    const num_a = Number(param_a);
    const num_b = Number(param_b); 
    
    //Comprueba si cada número entre primer y segundo parámetro es primo
    for(let i = num_a; i <= num_b; i++){
        if(es_primo(i)) numerosPrimos.push(i);
    }
    
    //Define el texto de retorno según cantidad de números primos encontrados
    numerosPrimos.length > 0
        ? console.log("Los números primos entre " + num_a + " y " + num_b + " son:") 
        : console.log("no se encontraron numeros primos entre " + num_a + " y " + num_b);
   
    return numerosPrimos;
}

let es_primo = (numero) => {
    //Por definición los número primos comienzan desde el 2
    if(numero < 2) return false;
    
    //Obtiene limite inferior de raíz del número a comprobar + 1
    let raiz = Math.floor(Math.sqrt(numero)) + 1;
   
    //Retorna falso si el residuo de la división es 0 
    for(let i = 2; i < raiz; i++){
        if(numero % i == 0){
            return false;
        }
    }

    return true;
}

console.log(numeros_primos(process.argv[2],process.argv[3]));


