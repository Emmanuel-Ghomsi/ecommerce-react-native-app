# Application E-commerce en React Native

## Description

Cette application e-commerce a été développée en utilisant React Native, basée sur les APIs fournies par [dummyjson.com](https://dummyjson.com/docs). Elle permet aux utilisateurs de naviguer, consulter et acheter des produits via une interface mobile intuitive et performante.

## Fonctionnalités

- Page d’accueil
- Affichage des produits de la catégorie (TOP) dans un slider
- Voir les catégories disponibles
- Mise en valeur des produits d'une catégorie de choix
- Consultation des produits par catégorie
- Consultation de la page d’un produit
- Ajout de produits dans un panier
- Consultation du panier en cours
- Enregistrement d'un panier
- Connexion/Inscription
- Consultation des paniers d’un utilisateur

## Technologies Utilisées

### Framework et Outils Principaux

- **React Native** : Framework pour le développement d'applications mobiles cross-platform.
- **Expo** : Outils et services intégrés pour simplifier le développement avec React Native. [Documentation](https://docs.expo.dev/)
- **React Navigation** : Librairie pour la gestion de la navigation dans les applications React Native. [Documentation](https://reactnavigation.org/docs/native-stack-navigator/)
- **Zustand** : Gestion des états réactive et intuitive. [Documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)

### Bibliothèques et Modules

- **react-native-async-storage** : Utilisé pour stocker les données localement sur l'appareil de l'utilisateur.
- **react-native-elements** : Composants UI prêts à l'emploi pour une interface utilisateur rapide et efficace.
- **react-native-slider** : Pour créer le slider affichant les produits de la catégorie TOP.
- **react-native-dotenv** : Pour la création et la gestion des variables d'environnement.

## Choix des Technologies

### React Native

React Native permet de créer des applications mobiles pour iOS et Android à partir d'une seule base de code, ce qui réduit considérablement le temps de développement et les coûts de maintenance.

### Expo

Expo facilite le développement avec React Native en fournissant un environnement de développement rapide, des outils de déploiement simples et une grande bibliothèque de composants et d'APIs pré-intégrés.

### React Navigation

React Navigation est la solution de navigation de facto pour React Native, offrant des transitions fluides et une gestion efficace de l'historique de navigation.

### Zustand

Zustand offre une gestion des états intuitive et légère, idéale pour les applications de petite à moyenne taille comme celle-ci.

### react-native-async-storage

react-native-async-storage est utilisé pour gérer le stockage local de données de manière asynchrone, ce qui est crucial pour des fonctionnalités telles que le panier en cours et les informations de session utilisateur.

### react-native-elements

Cette bibliothèque offre une large gamme de composants UI prêts à l'emploi, permettant une conception rapide et une uniformité visuelle dans toute l'application.

### react-native-dotenv

Cette bibliothèque est un plugin babel qui permet d'injecter des variables d'environnement dans notre environnement javascript. Nous le déclarons comme plugin dans notre fichier.

## Installation et Lancement du Projet

### Prérequis

- Node.js
- npm ou yarn
- Expo CLI

### Installation

1. Clonez le dépôt GitHub :
   ```bash
   git clone https://github.com/Emmanuel-Ghomsi/ecommerce-react-native-app.git
   ```

2. Installez les dépendances :
   ```bash
   cd ecommerce-react-native-app
   npm install
   # ou
   yarn install
   ```

3. Installez Expo CLI si ce n'est pas déjà fait :
   ```bash
   npm install -g expo-cli
   ```

4. Lancer le Projet
      
   Démarrez le projet Expo :
   ```bash
   expo start
   ```