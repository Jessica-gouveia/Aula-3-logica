// crie um algoritmo que imprime no console de 10 a 60, iterando a cada 5, exceto para os numeros 35 e 45 que irão ser substituidos pela palavra "PULOU".


let i = 5;

while(i < 60) {
    i += 5;

    if( i === 35 || i === 45) {
        console.log("PULEI");
        continue;
    }

    console.log(i);
}