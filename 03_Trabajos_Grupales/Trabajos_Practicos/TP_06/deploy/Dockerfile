# Multi-stage Dockerfile para EcoHarmony Park
# Stage 1: Build de la interfaz React (Vite)
FROM node:20-alpine AS frontend-builder
WORKDIR /build
COPY web/frontend/package*.json ./
RUN npm install --no-audit --no-fund
COPY web/frontend/ ./
RUN npm run build

# Stage 2: Runtime en Python ligero
FROM python:3.13-slim
WORKDIR /app

# Instalar dependencias mínimas de Python
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiar código fuente y backend
COPY src/ ./src/
COPY web/server.py ./web/server.py

# Copiar la interfaz compilada desde el stage 1
COPY --from=frontend-builder /build/dist ./web/frontend/dist

# Directorio persistente para la base de datos SQLite
RUN mkdir -p /app/web/data

ENV PYTHONUNBUFFERED=1
ENV PORT=8092
EXPOSE 8092

CMD ["python", "web/server.py", "8092"]
