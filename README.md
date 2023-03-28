# Cas pratique sur l'accessibilité

Voici un document HTML assez peu accessible (`index.html`).

Le but de l'exercice est... de le rendre accessible !

Il y a un peu de code Javascript (`script.js`) à déchiffrer pour comprendre l'intention du développeur qui réalisé la page.

N'hésitez pas à:

- Modifier totalement le code
- Supprimer du code
- Ajouter du code

La page doit faire exactement la même chose visuellement. Elle doit juste être plus accessible.

Aucune implémentation supplémentaire n'est demandé en dehors des améliorations sur l'accessibilité.

Aucune librairie n'est permise pour l'exercice.

Quelques conseils:

- N'allez pas trop loin, faites uniquement ce qui vous semble nécessaire
- Peut être qu'il y a un composant ARIA à implémenter


# explication du code rendu plus accessible: utilisation d'ARIA

* Pour index HTML: 
Ajout d'un attribut pour toutes les images, avec une description appropriée. `alt`
Ajout d’un label pour les champs de formulaire.
Ajout d’un attribut avec la valeur pour le bouton de connexion.`role``button`
Utilisation de la touche pour fermer le formulaire de connexion.`Escape`
Suppression de l’attribut du formulaire, car il n’est pas nécessaire pour le traitement du formulaire.`enctype`

* Pour script JS:
Le nouveau script que je propose permet de rendre la modale de connexion accessible au clavier en ajoutant un event listener pour écouter la touche « Escape » et fermer la modale si elle est appuyée.

* Pour le style css:
Je l'ai un peu modifié par rapport aux modifications que j'ai apporté dans le code HTML


# exam_accessibility
