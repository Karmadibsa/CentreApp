export const CONFIG = {
    // Cette URL pointe vers la version "Raw" du fichier tools.json hébergé sur votre dépôt GitHub.
    // Cela permet à l'application de lire ce fichier directement depuis internet.
    // Si vous modifiez tools.json sur GitHub, l'application se mettra à jour automatiquement au prochain lancement.
    TOOLS_CONFIG_URL: 'https://raw.githubusercontent.com/Karmadibsa/CentreApp/main/tools.json',

    // Liste de secours au cas où l'internet ne fonctionne pas ou le fichier est inaccessible
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
            name: 'OptiCal Center',
            description: 'Planification de repas et calculs pour le batch cooking.',
            url: 'https://optical-center.netlify.app/',
            icon: 'food-variant',
            color: '#FFA500'
        }
    ]
};
