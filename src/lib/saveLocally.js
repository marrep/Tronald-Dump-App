// speichert die erhaltenen Daten (data) als JSON im Browser
export default function saveLocally(key, data) {
  localStorage.setItem(key, JSON.stringify(data)); // muss man immer als JSON speichern??
}

// Müssen deshalb alle Objekte einen individuellen Key enthalten
