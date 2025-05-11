# Specifiche Progetto EpiBooks

Componenti:
- **ReactRouterDom** => rotta '/' per Homepage, '/detail/:asin' dettagli libro
- **Navigation** => HomePage, About, Browse
- **Footer**
- **Welcome** => alert e titolo app
- **AllTheBooks** => renderizza griglia con copertine libri
- **SingleBook** => Card con titolo e copertina - stato *selected* che imposta bordo rosso
- **SearchBar** => input testo controllato che filtra i libri => nella Navigation
- **CommentSection** => contiene *CommentList* con l'elenco delle recensioni, 
 e *AddComment* con un form per inserire o modificare una recensione,
 in una sezione a destra della viewport
- *BooksContext* gestisce tutti gli stati di libri e commenti
- **DONE** *ThemeContext* => gestisce tema light/dark


**API**:
- GET BOOKS : https://epibooks.onrender.com

- GET : https://striveschool-api.herokuapp.com/api/books/:asin/comments => recupera tutti i commenti
- POST : https://striveschool-api.herokuapp.com/api/comments
- PUT/DELETE : https://striveschool-api.herokuapp.com/api/comments/:id

Struttura:
```json
{
  "comment": "testo recensione",
  "rate": "valore tra 1 e 5",
  "elementId": "asin del libro"
}
```