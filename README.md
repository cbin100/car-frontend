# Car Explorer Dashboard (Frontend)

Angular application for browsing and filtering car data.

---

## Live Demo

Frontend (Vercel):  
https://car-frontend-eta-ten.vercel.app  

Backend API (Render):  
https://car-backend-fjjq.onrender.com  

---

## Features

- Search cars by make and model  
- Filters:
  - Make
  - Region (USA, Japan, Europe)
- Sorting:
  - MPG
  - Horsepower
  - Year  
- Pagination  
- Angular Material UI  

---

## Tech Stack

- Angular 21
- Angular Material
- RxJS

---

## Configuration

API base URL:

```ts
private apiUrl = 'https://car-backend-fjjq.onrender.com/api/cars';



# Run Locally


```bash
npm install
npx ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

- Persisted filters using localStorage (user preferences are saved even after browser refresh)

## Note

Due to Firebase free-tier limits, data may not always display in the live demo. The application is fully functional and works with a fresh dataset.

Please check also User Guide here: https://github.com/cbin100/car-frontend/blob/main/USER_GUIDE.md

## Author
Watchiba
