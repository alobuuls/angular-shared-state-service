# 🚀 Angular Shared State Service

Aplicación desarrollada en **Angular 12** que demuestra cómo compartir estado entre componentes utilizando `BehaviorSubject` de RxJS.

El proyecto simula un sistema de comunicación global entre páginas sin necesidad de librerías externas como NgRx.

---

## ⚙️ Requisitos del sistema

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- 📦 **Node.js:** `v14.x` o `v16.x` *(preferiblemente v14.21.3)*
- 📦 **npm:** `v6+`
- 🅰️ **Angular CLI:** `v12.x`

---

## 🔍 Verificar versiones instaladas

```bash
node -v
npm -v
ng version
```

---

## 🚀 Instalación del proyecto

### 1️⃣ Clonar el repositorio

```bash
git clone <URL_DEL_REPO>
cd angular-shared-state-service
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

---

## ▶️ Ejecutar el proyecto

```bash
ng serve
```

Luego abre:

```bash
http://localhost:4200
```

---

## 🧠 Arquitectura del proyecto

El proyecto está basado en un servicio central de estado:

### 📦 StateService

- Usa `BehaviorSubject` como fuente de estado global
- Permite emitir y escuchar cambios de datos
- Simula un store simple sin librerías externas

---

## 📄 Páginas del proyecto

### 📌 Page 1 (Emitter)

- Envía datos al estado global

### 📌 Page 2 (Reader)

- Solo escucha cambios del estado

### 📌 Page 3 (Emitter + Reader)

- Lee y actualiza el estado simultáneamente

---

## ⚙️ Funcionalidades principales

- 🔄 Comunicación entre componentes sin `Input/Output`
- 📡 Estado compartido con `BehaviorSubject`
- 🧠 Patrón tipo mini state management
- 📦 Observables en tiempo real
- 🧩 Arquitectura desacoplada

---

## 🧰 Tecnologías utilizadas

- 🅰️ Angular 12
- ⚡ TypeScript
- 🔄 RxJS (BehaviorSubject)
- 🌐 Angular Forms

---

## 📁 Estructura del proyecto

```bash
src/app/
├── pages/
│   ├── page1/
│   ├── page2/
│   ├── page3/
├── services/
│   └── state.service.ts
├── interfaces/
│   └── obs.interface.ts
```

---

## 🔥 Conceptos implementados

- BehaviorSubject como store simple
- Shared state between components
- Reactive programming with RxJS
- Component communication without @Input/@Output
- Subscription to observables

---

## 📄 Licencia

Este proyecto es de uso educativo y forma parte de un portafolio personal.
