const fetchUsers = async () => {
    try {
        const response = await fetch('https://api.exemplo.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
    }
};

fetchUsers();

const createUser = async () => {
    try {
        const response = await fetch('https://api.exemplo.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: 'Novo Usuário', email: 'usuario@email.com' })
        });
        const data = await response.json();
        console.log('Usuário criado:', data);
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
    }
};

createUser();