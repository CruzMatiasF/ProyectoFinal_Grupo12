function id(str){
    return document.getElementById(str);

}
    

function obtener_random (num_min,num_max){
    const amplitud_valores=cant_palabras-valor_mas_bajo;
    const valor_al_azar = Math.floor(Math.random ( )*amplitud_valores)+valor_mas_bajo;
    console.log(valor_al_azar);
    return valor_al_azar; 

}