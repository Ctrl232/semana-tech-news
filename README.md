# Semana Tech News 📰

Portal de noticias Full Stack desarrollado como prueba técnica.

## Tecnologías
- **Frontend:** React 18 + Vite + React Router v6 + Axios
- **Backend:** Java 17 + Spring Boot 3 + Spring Data JPA + H2

## Estructura
- semana-tech-news/
- ├── frontend/   → React app
- ├── components/
- │   ├── ArticleCard.jsx
- │   ├── ArticleForm.jsx
- │   ├── Navbar.jsx
- │   └── SkeletonCard.jsx
- ├── hooks/
- │   └── useArticles.js
- ├── pages/
- │   ├── Admin.jsx
- │   ├── ArticleDetail.jsx
- │   └── Home.jsx
- ├── services/
- │   └── articleService.js
- ├── App.jsx
- └── main.jsx

- └── backend/    → Spring Boot API
- └── backend/src/main/java/com/semana/newsapi/
- ├── config/
- │   └── DataSeeder.java       ← datos de prueba
- ├── controller/
- │   └── ArticleController.java
- ├── dto/
- │   └── ArticleDTO.java
- ├── model/
- │   └── Article.java
- ├── repository/
- │   └── ArticleRepository.java
- └── service/
-     └── ArticleService.java

## Crear el proyecto Spring Boot (Backend)
Ve a start.spring.io
- Abre en el navegador: https://start.spring.io
- Configura así:
- Campo         Valor
- Project       Maven
- Language      Java
- Spring Boot   3.2.x (la más reciente estable)
- Group         com.semana
- Artifact      news-api
- Name          news-api
- Packaging     Jar
- Java          17

- ➡️  Dependencias — agrega estas 4:
- ✅ Spring Web
- ✅ Spring Data JPA
- ✅ H2 Database
- ✅ Lombok

## Crear el proyecto React (Frontend)
- npm create vite@latest frontend -- --template react
- npm install
- npm install react-router-dom axios

### Limpia el boilerplate de Vite
Borra los archivos
- rm src/assets/react.svg public/vite.svg src/App.css

## Configura la estructura de carpetas
mkdir -p src/pages src/components src/services src/hooks

## Cómo ejecutar 
**Backend:**
cd backend
- mvn spring-boot:run
**Frontend:**
cd frontend
- npm run dev