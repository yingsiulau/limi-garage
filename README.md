# Limi Garage GmbH — Website (Design-Varianten)

Statische Remake-Website für die Limi Garage GmbH, Bargen BE.
Kein Build-Schritt — reines HTML/CSS/JS.

## Struktur

| Pfad | Inhalt |
|------|--------|
| `/` | Auswahlseite (verlinkt die drei Varianten) |
| `/variante-1/` | **Werkstatt-Rapport** — kräftig, plakativ |
| `/variante-2/` | **Klar** — ruhig, sachlich |
| `/variante-3/` | **Mittelweg** — Mischung aus beiden |
| `/assets/` | gemeinsame Bilder & Logo |

## Lokal ansehen

```bash
python3 -m http.server 4567
# http://localhost:4567/
```

## Hosting

Läuft auf GitHub Pages (Branch `main`, Ordner `/root`). Die Datei `.nojekyll`
verhindert die Jekyll-Verarbeitung.
