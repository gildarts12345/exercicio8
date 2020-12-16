     function gerar(){
         let nomes = ['JOAO', 'JULIA', 'ADRIANO', 'GABRIEL', 'LARISSA'];

         let lista = document.getElementById('lista');
           for(var i = 0; i < nomes.length; i++){
            let item = document.createElement('li');
              
           let x = document.getElementById("camps").value;
            document.getElementById("lista").innerHTML = x;

             item.appendChild(document.createTextNode(nomes[i]));
             lista.appendChild(item);
    }
        
           
}
           
var meu_array2 = ['JOAO', 'JULIA', 'ADRIANO', 'GABRIEL', 'LARISSA'];

alert( meu_array2.slice(1, 3) );

var meu_array = ['JOAO', 'JULIA', 'ADRIANO', 'GABRIEL', 'LARISSA'];


var n_numero = meu_array.push('RONALDO');


document.write( 'Meu array agora tem ' + n_numero + ' itens <br>' );
document.write( 'Novo valor do array: ' + meu_array + '<br>' );

var meu_array1 = [0, 1, 2, '20', true, false, 'String'];

alert(meu_array1.length);

