// Função principal que será executada quando a página carregar
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Faz a requisição para a API do GitHub
        const response = await fetch('https://api.github.com/users/juliagodoyprado');
        
        // Verifica se a resposta foi bem sucedida
        if (!response.ok) {
            throw new Error(`Erro HTTP! status: ${response.status}`);
        }
        
        // Converte a resposta para JSON
        const data = await response.json();
        
        // Atualiza a página com os dados recebidos
        updateProfile(data);
    } catch (error) {
        // Trata erros que possam ocorrer durante a requisição
        console.error('Erro ao carregar dados do GitHub:', error);
        alert('Não foi possível carregar os dados do perfil. Por favor, tente novamente mais tarde.');
    }
});

// Função para atualizar os elementos da página com os dados do perfil
function updateProfile(profileData) {
    // Seleciona os elementos do DOM
    const avatar = document.querySelector('.profile-avatar');
    const name = document.querySelector('.profile-name');
    const username = document.querySelector('.profile-username');
    const repos = document.querySelector('.repos-count');
    const followers = document.querySelector('.followers-count');
    const following = document.querySelector('.following-count');
    const profileLink = document.querySelector('.profile-link');
    
    // Atualiza os elementos com os dados recebidos
    avatar.src = profileData.avatar_url || 'https://via.placeholder.com/180x180';
    name.textContent = profileData.name || 'Nome não disponível';
    username.textContent = `@${profileData.login}`;
    repos.textContent = profileData.public_repos;
    followers.textContent = profileData.followers;
    following.textContent = profileData.following;
    profileLink.href = profileData.html_url;
}