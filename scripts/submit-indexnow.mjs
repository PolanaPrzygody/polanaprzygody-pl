const host = "polanaprzygody.pl";
const key = "f4c7a2e9b18d4f63a0c5e7b291d846fa";
const baseUrl = `https://${host}`;

const paths = [
  "/",
  "/poznaj-nas",
  "/galeria-zdjec",
  "/uslugi",
  "/logopedia",
  "/integracja-sensoryczna",
  "/psycholog-dzieciecy",
  "/trening-umiejetnosci-spolecznych",
  "/cennik",
  "/terapeuci",
  "/umow-sie",
];

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host,
    key,
    keyLocation: `${baseUrl}/${key}.txt`,
    urlList: paths.map((path) => `${baseUrl}${path}`),
  }),
});

if (!response.ok) {
  const body = await response.text();
  throw new Error(`IndexNow zwrócił ${response.status}: ${body}`);
}

console.log(`IndexNow: zgłoszono ${paths.length} adresów URL.`);
