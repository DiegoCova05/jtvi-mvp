# Manual Técnico
## JTVI ERP - Arquitectura y Documentación de Desarrollo

---

### 1. Arquitectura del Sistema
El sistema JTVI ERP (Producto Mínimo Viable) opera bajo una arquitectura monolítica ligera basada en cliente-servidor, donde un único servidor gestiona tanto la entrega de archivos estáticos (Frontend) como la lógica de negocio (Backend/API REST).

- **Frontend:** Construido sin frameworks (Vanilla) para garantizar máxima velocidad y simplicidad. Utiliza `SortableJS` para la interacción del tablero Kanban.
- **Backend:** API REST construida para procesar las reglas de negocio y manejar la persistencia de datos.
- **Persistencia:** Almacenamiento en archivo plano JSON (`folios.json`) para simular operaciones de base de datos de manera ágil durante la fase MVP.

---

### 2. Stack Tecnológico
- **Entorno de Ejecución:** Node.js (v18 o superior)
- **Framework de Backend:** Express.js 4.x
- **Middlewares:** CORS, Express JSON parser, Express Static
- **Frontend:** HTML5, CSS3 (CSS Grid/Flexbox), JavaScript Vanilla
- **Librerías de Terceros:** SortableJS (para el drag & drop del tablero Kanban)

---

### 3. Equipo de Desarrollo y Roles
El equipo adoptó roles del marco de trabajo **Kanban** combinados con responsabilidades de desarrollo técnico:

| Integrante | Rol Kanban / Desarrollo | Responsabilidades |
| :--- | :--- | :--- |
| **José Ismael Mejía Sierra** | Service Request Manager (SRM) / Backend | Priorización del tablero, reglas de negocio, desarrollo de API y datos simulados. |
| **Romel Sánchez Rodríguez** | Service Delivery Manager (SDM) / Frontend | Flujo del equipo, coordinación, integración. Desarrollo del Dashboard y drag & drop. |
| **Diego Hernández Covarrubias** | Desarrollo Frontend | Construcción de la vista de detalle de los folios. |
| **Cova** | Desarrollo Frontend, UX, UI | Interfaz, usabilidad y detalles de la experiencia de usuario. |
| **Alejandro Pérez Sahagún** | Developer Backend y QA | Soporte en reglas de negocio en backend, pruebas de aceptación y redacción técnica. |

---

### 4. Estructura de Archivos
```text
jtvi-mvp/
├── server.js             # Servidor Express, endpoints API y reglas de negocio
├── folios.json           # Base de datos simulada (JSON plano)
├── package.json          # Dependencias (express, cors) y scripts
├── login.html            # Vista de autenticación
├── dashboard.html        # Vista del tablero Kanban interactivo
├── detalle.html          # Vista de detalle de folios y cambio de estados
└── README.md             # Guía rápida de instalación
```

---

### 5. Contrato de la API (Endpoints)

Todas las rutas responden en `http://localhost:3000`. 

| Método | Endpoint | Body/Params | Descripción / Respuestas |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/login` | `{ usuario, contrasena }` | Retorna status `200` con un JWT simulado (`token`). Retorna `400` si faltan credenciales. |
| **GET** | `/api/folios` | *Headers: Authorization* | Retorna `200` con el array de folios en JSON. Retorna `401` si no hay token. |
| **GET** | `/api/folios/:id` | *Params: id* | Retorna `200` con el folio específico. Retorna `404` si no existe. |
| **PATCH** | `/api/folios/:id` | `{ estado }` | Actualiza el estado del folio. Retorna `200` si cumple las reglas de negocio; `400` si la transición es inválida o faltan criterios. |

---

### 6. Modelo de Datos (`folios.json`)
El sistema utiliza un esquema estructurado que incluye:
- **Metadatos:** `id`, `numero_folio`, `estado`, `fecha_creacion`.
- **Objeto Escuela:** Nombre, CCT, Director, Teléfono, Municipio.
- **Puntos de Control (PC):** Booleanos y timestamps para PC1, PC2 y PC3.
- **Arreglos:** Arreglo de `seriales` (Televisores asignados) y `fotos`/documentos.

---

### 7. Lógica y Reglas de Transición
El backend (`PATCH /api/folios/:id`) actúa como el guardián de las reglas del proyecto:
1. **Progreso Lineal:** Un folio no puede saltar de "Pendiente" a "Cerrado Liquidable" sin pasar por "Pre-Validado" y "En Instalación".
2. **Auto-sellado de PCs:** Al detectar un cambio de estado válido, el backend automáticamente marca en `true` el Punto de Control correspondiente y sella la fecha (`timestamp`).
3. **Manejo de Bloqueos:** El estado "Cancelado" fue removido de la lógica; los errores devuelven un indicador de bloqueo para que la tarjeta permanezca visible en la columna actual.

---

### 8. Instalación y Ejecución Local
Para arrancar el proyecto en un entorno de desarrollo:

```bash
# 1. Posicionarse en el directorio del proyecto
cd jtvi-mvp

# 2. Instalar las dependencias de Node.js
npm install

# 3. Iniciar el servidor backend
npm run start
# (O alternativamente: node server.js)
```
El servidor se inicializará en el puerto 3000. Acceder a `http://localhost:3000/login.html` para ingresar.
