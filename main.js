function tabuada(){
    let num = window.document.getElementById('num');
    let end = document.getElementById('end');
    if(num.value.length == 0 || end.value.length == 0){
        window.alert('[ERRO!] Confira os dados!');
    } else{
        let n = Number(num.value);
        let e = Number(end.value);
        let res = window.document.getElementById('resposta');
        let r = n*e;
        let x = 0;
        res.innerHTML = `A tabuada do ${n} é: <br> <br>`;
        do{
            r = n*x;
            res.innerHTML += `${x} X ${n} = ${r} <br>`;
            x = x + 1;
        } while(x <= e);
    }
}