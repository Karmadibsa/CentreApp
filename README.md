# Centrapp - Votre Hub Centralisé d'Outils

Cette application mobile centralise tous vos outils déployés sur Netlify en un seul endroit, avec un design premium et glassmorphic.

## Fonctionnalités

- **Liste d'outils dynamique** : Mettez à jour votre liste d'outils sans réinstaller l'application.
- **Interface Premium** : Mode sombre, glassmorphism et animations fluides.
- **Intégration WebView Immersive** : Naviguez dans vos outils en plein écran, comme des applications natives.

## Mise à jour des outils sans réinstallation

Pour ajouter ou modifier des outils sans redéployer l'APK, suivez ces étapes :

1.  **Créez un fichier de configuration** :
    Hébergez un fichier `tools.json` en ligne (par exemple, sur un Gist GitHub ou un de vos sites Netlify).
    
    Format :
    ```json
    [
      {
        "id": "1",
        "name": "Mon Nouvel Outil",
        "description": "Description de l'outil.",
        "url": "https://mon-outil.netlify.app",
        "icon": "rocket",
        "color": "#FF5733"
      },
      ...
    ]
    ```

2.  **Liez-le** :
    Ouvrez `src/constants/config.js` et mettez à jour `TOOLS_CONFIG_URL` avec l'URL brute de votre fichier JSON.

3.  **Compilez une fois** :
    Générez votre APK (Android) ou IPA (iOS).

4.  **Mettez à jour à tout moment** :
    Lorsque vous déployez un nouvel outil, ajoutez-le simplement à votre `tools.json` en ligne. L'application récupérera la nouvelle liste au prochain lancement ou rafraîchissement !

## Lancer le projet localement

1.  Installer les dépendances :
    ```bash
    npm install
    ```
2.  Démarrer le serveur :
    ```bash
    npx expo start
    ```
3.  Scannez le code QR avec Expo Go.

## Icônes
Référence pour les noms d'icônes : [https://icons.expo.fyi/](https://icons.expo.fyi/) (MaterialCommunityIcons).
