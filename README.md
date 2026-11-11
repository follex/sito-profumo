# giovanniprofumo.it – versione statica

Il sito è stato rifatto in HTML statico partendo dal vecchio Joomla 1.5. La grafica è quella originale del 2010.

## Struttura

```
index.html                  home (italiano)
it/  en/  fr/               una cartella per lingua, ogni pagina è cartella/index.html
  il-tempo-e-degli-uomini/  (fr: le-temps-appartient-aux-hommes/)
  cenni-biografici/         (en: biography/, fr: biographie/)
  opere/                    (en: works/, fr: oeuvres/)
  privacy/
fr/uvres/                   reindirizza al nuovo /fr/oeuvres/
assets/css/template.css     CSS originale del template (non toccato)
assets/css/site.css         aggiustamenti: menu, testi, galleria, lightbox, mobile
assets/js/lightbox.js       galleria a schermo intero (frecce, Esc)
assets/js/home.js           immagine casuale della home (come prima)
assets/img/opere/           39 opere, con le miniature in mini/
```

## Vedere il sito in locale

Le pagine sono cartelle con dentro `index.html`. Il doppio clic sui file quindi non basta: serve un piccolo server.

```bash
cd cartella-del-sito
python3 -m http.server 8000
# apri http://localhost:8000
```

## Pubblicare su GitHub Pages

```bash
git init && git add . && git commit -m "Sito statico"
git branch -M main
git remote add origin git@github.com:UTENTE/sito-profumo.git
git push -u origin main
```

Poi vai in **Settings → Pages → Branch: main / (root)**. Il file `.nojekyll` è già incluso.

## Da completare

- Privacy policy: nelle tre pagine `*/privacy/` vanno sostituiti i segnaposto tra parentesi quadre (email, fornitore di hosting).
- Due parole mancanti nella biografia italiana, già assenti nel sito vecchio:
  "racconta polemicamente ma con ___ e poesia" e "rarefacendo e ___ la forma".
