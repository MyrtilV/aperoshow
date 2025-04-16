document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('.left-list li');
    const accueilImages = document.getElementById('accueil-images');
    const contentArea = document.getElementById('content-area');

    const contentMap = {
        'jeu1': `
            <h2>Le Doute Raisonnable</h2>
            <p>Objectif : faire croire une info fausse... ou défendre une vraie qui semble improbable.</p>
            <ul>
                <li>Annonce : "Je vais vous raconter un truc, à vous de dire si c’est vrai ou inventé."</li>
                <li>Les autres posent 2 questions chacun.</li>
                <li>Vote : vrai ou faux, puis révélation.</li>
                <li>Gage pour ceux qui se sont trompés.</li>
            </ul>
        `,
        'jeu2': `
            <h2>Mot Karma</h2>
            <ul>
                <li>Chaque joueur choisit un mot courant (ex : "boire").</li>
                <li>Si quelqu’un le dit : 1 "karma".</li>
                <li>À 3 karmas : gage.</li>
                <li>Interdiction de rappeler son mot aux autres !</li>
            </ul>
        `,
        'jeu3': `
            <h2>La Minute Show-Off</h2>
            <ul>
                <li>Chaque joueur se vante d’un autre pendant 1 minute.</li>
                <li>Vrai, faux ou absurde, tout est permis.</li>
                <li>La personne concernée confirme ou non.</li>
            </ul>
        `,
        'jeu4': `
            <h2>Freeze Version Apéro</h2>
            <ul>
                <li>Quelqu’un crie "Freeze".</li>
                <li>Tous s’arrêtent net.</li>
                <li>Le dernier à bouger = gage.</li>
                <li>Utilisable une seule fois toutes les 10 minutes.</li>
            </ul>
        `,
        'jeu5': `
            <h2>Le Psycho Quiz</h2>
            <ul>
                <li>Un joueur sort de la pièce.</li>
                <li>Les autres répondent à une question sur lui ("quel animal le représente ?").</li>
                <li>Il revient et tente de deviner les réponses.</li>
                <li>Mauvaise réponse = gage ou gorgée.</li>
            </ul>
        `
    };

    listItems.forEach(item => {
        item.addEventListener('click', function () {
            const contentId = this.dataset.content;

            if (contentMap[contentId]) {
                contentArea.classList.remove('visible');

                setTimeout(() => {
                    contentArea.innerHTML = contentMap[contentId];
                    accueilImages.style.display = 'none';
                    contentArea.classList.add('visible');
                }, 100);

                // Highlight sélection
                listItems.forEach(li => li.classList.remove('selected'));
                this.classList.add('selected');
            }
        });
    });
});