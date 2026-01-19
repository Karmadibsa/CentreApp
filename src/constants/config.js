export const CONFIG = {
    // Remplacez cette URL par l'URL brute de votre fichier JSON de configuration d'outils
    // Exemple : 'https://raw.githubusercontent.com/username/repo/main/tools.json'
    TOOLS_CONFIG_URL: 'https://raw.githubusercontent.com/momper-axel/centrapp-config/main/tools.json',

    // Liste d'outils par défaut (Utilisée si la configuration en ligne n'est pas accessible)
    DEFAULT_TOOLS: [
        {
            id: '1',
            name: 'Mots Passants',
            description: 'Jeu de lettres et de réflexion.',
            url: 'https://mots-passants.netlify.app/',
            icon: 'alphabetical',
            color: '#6C63FF'
        },
        {
            id: '2',
            name: 'Fil Good',
            description: "Calculateur de coûts d'impression 3D.",
            url: 'https://fil-good.netlify.app/',
            icon: 'printer-3d',
            color: '#FF6584'
        },
        {
            id: '3',
            name: 'OptiTrain',
            description: "Optimisation d'abonnements train pour alternants.",
            url: 'https://optitrain.netlify.app/',
            icon: 'train',
            color: '#00E5FF'
        },
        {
            id: '4',
            name: 'OptiCal Center', // Renamed slightly to fit context or keep user's name but description is key
            description: 'Planification de repas et calculs pour le batch cooking.',
            url: 'https://optical-center.netlify.app/',
            icon: 'food-variant',
            color: '#FFA500'
        }
    ]
};
