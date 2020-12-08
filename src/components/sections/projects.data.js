class Project {
    constructor(
        name = '',
        repoUrl = '',
        liveUrl = '',
        desc = '',
        technologies = [],
        keyword = []
    ) {
        if (!!!name) throw new Error('Project must have a name')
        if (!!!repoUrl) throw new Error('Project must have repo URL')
        this.name = name;
        this.repoUrl = repoUrl;
        this.liveUrl = liveUrl;
        this.desc = desc;
        this.technologies = technologies;
        this.keyword = keyword;
    }
}

export const projects = [
    new Project(
        'Vanilla JS Snake',
        'https://github.com/jason-nordheim/pure-js-snake',
        'https://vanilla-js-snake.web.app/',
        'A pure HTML/JavaScript browser-based version of snake',
        [
            'JavaScript',
            'HTML',
            'CSS',
            'CSS Grid',
            'CSS Media Queries',
        ],
        'arcade',
        'game',
        'retro',
        'snake',
        'fun',
        'games'
    ),
    new Project(
        '2048', 
        'https://github.com/jason-nordheim/react-2048', 
        'https://play-2048-with-me.web.app/', 
        'React clone of 2048', 
        ['React', 'JavaScript', 'Firebase'], 
        ['hooks', 'functional components', 'useState', 'useRef', 'useEffect', 'eventListeners' ]
    ),
];
