# Parc Auto - Gestion de Parc Automobile

Application web de gestion de parc automobile développée avec React (frontend) et Node.js (backend).

## 🚀 Technologies utilisées

- Frontend: React.js
- Backend: Node.js, Express
- Base de données: MySQL
- Containerisation: Docker, Docker Compose

## 📋 Prérequis

- [Node.js](https://nodejs.org/) (v18 ou supérieur)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)

## 🔧 Installation et lancement

### Sans Docker

1. **Backend**
```bash
cd server
npm install
node serverce.js
```
Le serveur démarre sur [http://localhost:5000](http://localhost:5000)

2. **Frontend**
```bash
cd client
npm install
npm start
```
L'application est accessible sur [http://localhost:3000](http://localhost:3000)

### Avec Docker

1. **Cloner le projet**
```bash
git clone <votre-repo>
cd ParcAuto
```

2. **Lancer avec Docker Compose**
```bash
docker-compose up --build
```

Accès aux applications:
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000](http://localhost:5000)

## 🛠️ Structure du projet

```
ParcAuto/
├── client/             # Frontend React
│   ├── src/           # Code source React
│   └── Dockerfile     # Configuration Docker frontend
├── server/            # Backend Node.js
│   ├── serverce.js    # Point d'entrée backend
│   └── Dockerfile     # Configuration Docker backend
└── docker-compose.yml # Configuration Docker Compose
```

## 📝 Fonctionnalités

- Gestion des utilisateurs
- Gestion des véhicules
- Suivi des missions
- Gestion des réparations
- Rapports et statistiques

## 🚫 Arrêter les conteneurs

```bash
docker-compose down
```

## 👥 Auteur

- Najat Salhi

## 📄 Licence

Ce projet est sous licence MIT