const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                            <p>Seguidores ${user.followers ?? '0'}</p>
                                            <p>Seguindo ${user.following ?? '0'}</p>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                                        </div>
                                    </div>`;

        let repositoriesItens = '';
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}
        <ul class="infos-repo">
            <li>🍴 ${repo.forks_count}</li>
            <li>⭐ ${repo.stargazers_count}</li>
            <li>👀 ${repo.watchers}</li>
            <li>👨‍💻 ${repo.language ?? 'Nenhuma linguagem'}</li>
        </a></li>`)
        
        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens ?? 'Sem eventos!'}</ul>
                                            </div>`
        }


        let eventsItens = '';
        user.events.forEach(even => {
            let eventsRepositorieName = even.repo.name;
            let description = even.payload.description;
            let message = even.payload.commits?.length > 0 ? even.payload.commits?.[0].message : null;
            let eventsType = even.type;

            eventsItens += `<li><span class="repo-name">${eventsRepositorieName}</span> - ${description ?? message ?? eventsType}</li>`
        });
    

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Eventos</h2>
                                                <ul>${eventsItens}</ul>
                                            </div>`
        }
    },

    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado!</h3>"
    }
}

export {screen};