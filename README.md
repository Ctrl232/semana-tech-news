# Semana Tech News 📰

Portal de noticias Full Stack.

## Tecnologías

| Capa | Stack |
|---|---|
| Frontend | React 18 · Vite · React Router v6 · Axios |
| Backend | Java 17 · Spring Boot 3 · Spring Data JPA · H2 |
| DevOps | Docker · Docker Compose · Nginx |

## Arquitectura
semana-tech-news/
├── frontend/         → React app (puerto 5173 dev / 80 prod)
│   ├── src/
│   │   ├── components/   → ArticleCard, ArticleForm, Navbar, SkeletonCard
│   │   ├── hooks/        → useArticles (custom hook)
│   │   ├── pages/        → Home, ArticleDetail, Admin
│   │   └── services/     → articleService (capa de acceso a API)
│   └── Dockerfile
├── backend/          → Spring Boot API REST (puerto 8080)
│   ├── src/main/java/com/semana/newsapi/
│   │   ├── controller/   → ArticleController
│   │   ├── service/      → ArticleService
│   │   ├── repository/   → ArticleRepository
│   │   ├── model/        → Article
│   │   ├── dto/          → ArticleDTO
│   │   └── config/       → DataSeeder
│   └── Dockerfile
└── docker-compose.yml

## Crear el proyecto Spring Boot (Backend)
Ve a start.spring.io abre en el navegador: https://start.spring.io y configura así:
| Campo | Valor |
| :---  | ---:  |
| Project | Maven |
| Language | Java |
| Spring Boot | 3.2.x (la más reciente estable) |
| Group | com.semana | 
| Artifact | news-api |
| Name | news-api |
| Packaging | Jar |
| Java | 17 |

Dependencias — agrega estas 4:
- Spring Web
- Spring Data JPA
- H2 Database
- Lombok

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

### Opción A — Con Docker (recomendado)

Requiere Docker Desktop instalado.

```bash
git clone https://github.com/TU_USUARIO/semana-tech-news.git
cd semana-tech-news
docker compose up --build
```

Abrir en el navegador: **http://localhost**

### Opción B — Local sin Docker

**Backend:**
```bash
cd backend
./mvnw spring-boot:run
# Corre en http://localhost:8080
```

**Frontend** (en otra terminal):
```bash
cd frontend
npm install
npm run dev
# Corre en http://localhost:5173
```

## Endpoints de la API

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/articles` | Listar artículos (acepta `?category=`) |
| GET | `/api/articles/{id}` | Obtener artículo por ID |
| POST | `/api/articles` | Crear artículo |
| PUT | `/api/articles/{id}` | Editar artículo |
| DELETE | `/api/articles/{id}` | Eliminar artículo (soft delete) |

## Funcionalidades

- Listado de noticias con skeleton loading
- Filtro por categoría en tiempo real
- Vista de detalle de artículo
- Panel admin con CRUD completo
- Soft delete (los artículos no se borran físicamente)
- Responsive para móvil y escritorio

## Decisiones técnicas

- **H2 en memoria:** simplifica la ejecución local sin dependencias externas. En producción se reemplazaría por PostgreSQL cambiando solo la configuración de datasource.
- **Custom hook `useArticles`:** separa la lógica de fetching del componente visual, facilitando el testing y la reutilización.
- **DTOs en el backend:** evita exponer la entidad JPA directamente, desacoplando el modelo de persistencia del contrato de la API.
- **Soft delete:** los artículos eliminados mantienen el campo `active = false`, preservando la integridad referencial e historial.
- **Nginx como proxy:** en Docker, nginx enruta `/api/` al backend, evitando problemas de CORS en producción.

## Autor
**Daniel Montaño** · Ingeniero de Sistemas  
