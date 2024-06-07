Readme Luca:
1) Creata cartella img filtrando immagini fornite, spostate in una cartella quelle che ci servivano e rinominate per avere una sintassi uguale per tutti e omogenea.

2) Creata struttura dati, array films con film cambiati a film esistenti, inseriti link video trailer da youtube, link da cartella img, data di rilascio, generi, durata ecc
Creato array news per la sezione news ed il footer

3) Creata intestazione globale per ogni sezione (quella con bordo verde e sottolineatura)

4) **Creata sezione MoviePlaylist**: 
- Aggiunta intestazione
- Creato contenitore diviso tra sezione embedding trailer e sezione new movie contenente tutte le card stampate in pagina.
- Aggiunto embedding video da youtube che va a prendere il link per ogni film dall'array
- Aggiunta variabile videoAttivo e inserito @click sulle card in html per rendere videoAttivo = all`indice della card cliccata e far apparire il trailer del film cliccato sulla sinistra   

5) **Creata sezione MovieCategories**:
- Aggiunta intestazione
- Aggiunte categorie in html (senza interazioni)
- Aggiunte card in pagina, inizialmente stampo card per ogni film
- Creata variabile filter (inizialmente stringa vuota)
- Aggiunto @click sulle categorie che imposta filter = categoria cliccata
- Aggiunto v-show sulle card che mi fa vedere solo le card che hanno categoria(in array) = filter cosi quando clicco su una categoria vedo solo i film della categoria selezionata.
Nel caso non fosse selezionata nessuna categoria, quindi filter = ``, appariranno tutti i film
- Aggiunto metodo clickElement che aggiunge e toglie la classe clicked alle categorie, facendo vedere ogni volta la categoria cliccata. (Funzione da perfezionare e migliorare)

6) **Sistemato css della sezione JumboComing per renderlo piu simile possibile al mockup**
- Divisa la sezione in 2 col6, una vuota e l'altra con all'interno tutto il contenuto
- Stilizzato tutto il contenuto e racchiuso countdown in div con sfondo

7) **Stilizzato header per renderlo piu simile possibile al mockup**

8) **Stilizzato Jumbo per renderlo piu simile possibile al mockup**

9) **Creato stile globale margin-section per dare un margine fisso dopo ogni sezione**