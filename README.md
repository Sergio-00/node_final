# API CRUD con Express y un Front-end

Proyecto que permite crear, obtener, actualizar y eliminar usuarios.  
Incluye una API con Express + Prisma y un frontend con HTML, CSS y JS que consume dicha API.

---

## Requisitos

- Node.js instalado
- Base de datos PostgreSQL (en Supabase o local)

## Cómo ejecutar el proyecto

### En el Backend

Instalar dependencias:

```bash
cd node_final/
```

```bash
npm i
```

Configura tu archivo .env y luego ejecuta:

```bash
npx prisma migrate dev
```

Luego ejecuta la API:

```bash
npm run start
```

La API correrá en: http://localhost:3000

### En el Frontend

Solo abre el archivo:

front_end/index.html

Asegúrate de que la API esté en ejecución.
