import { initRouter } from "./core/router.js";
import { initUI } from "./core/uiContainer.js";
import "./core/supabaseClient.js"; // просто подключаем, чтобы window.supabase был определён

// Точка входа приложения
function initApp() {
  console.log("App started");

  // Инициализация UI (создание базовой структуры)
  initUI();

  // Инициализация роутера (переключение между модулями)
  initRouter();

  // Регистрация Service Worker (для PWA)
  registerServiceWorker();
}

// Регистрация Service Worker
function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/src/serviceWorker.js")
        .then(registration => {
          console.log("Service Worker registered:", registration);
        })
        .catch(error => {
          console.error("Service Worker registration failed:", error);
        });
    });
  } else {
    console.log("Service Worker not supported");
  }
}

// Запуск приложения
initApp();