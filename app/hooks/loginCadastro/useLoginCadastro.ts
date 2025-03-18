import axios from "axios"

export default function useLoginCadastro(){

    async function fazerLogin(emailUsername : string, password : string){
        if (emailUsername && password){
            try{
                const response = await axios.post('http://127.0.0.1:8000/api/clientes/login/', {
                    'emailUsername' : emailUsername,
                    'password' : password
                }) 
                return response.data
            } catch(err : unknown){
                if(err instanceof Error){
                    return err.message
                }
                return 'Erro desconhecido'
            }
        }
        else{
            return 'Por favor, preencha todos os campos.'
        }
    }

    async function fazerCadastro(campos : any){
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/clientes/registro/', {
                'username' : campos.username,
                'email' : campos.email,
                'first_name' : campos.firstName,
                'last_name' : campos.lastName,
                'telefone' : campos.telefone,
                'password' : campos.password,
            })
            return response.data
        } catch(err : unknown){
            if(err instanceof Error){
                return JSON.stringify(err.message)
            }
            return 'Erro desconhecido'
        }
    }

    return {
        fazerLogin,
        fazerCadastro
    }
}


