interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario {
    return {
        nome: 'Fabio',
        email: 'fabiohpaes@gmail.com'
    }
}

function setUser(usuario: Usuario) {
    //...
}