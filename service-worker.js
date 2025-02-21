self.addEventListener("install", (event) => {
    console.log("Service Worker instalado!");
    self.skipWaiting(); // Força a ativação imediata
  });
  
  self.addEventListener("activate", (event) => {
    console.log("Service Worker ativado!");
  });
