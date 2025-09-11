import axios from "axios";
import { Contato } from "../model/contato";



const contatoApiSave = ( contato: Contato ) => {
    console.log("contatoApiSave(): acionado");
    axios.post("https://agenda-contato-dc7d2-default-rtdb.firebaseio.com/contato.json",
        contato
        
    );
}


// const contatoApiSave = ( nome : string, telefone : string, email : string) => {
//     console.log("contatoApiSave(): acionado");
//     axios.post("https://agenda-contato-dc7d2-default-rtdb.firebaseio.com/contato.json",
//         {nome, telefone, email}
        
//     );
// }

export {contatoApiSave}
