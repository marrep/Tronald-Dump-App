// Load locally greift auf den lokalen Speicher des Browsers zurück
// und returned einen geparsten JSON String als Object mit dem Key 'todo'
export default function loadLocally(key) {
  const jsonString = localStorage.getItem(key); // = .querySelector???
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.log("localStorage data was bad.");
  }
}
