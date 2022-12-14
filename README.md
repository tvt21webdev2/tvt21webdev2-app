# Climate Change Charts

## Sovelluksen esittely

Tämän projektin ovat toteuttaneet Oulun ammattikorkeakoulun tietotekniikan tutkinto-ohjelman toisen vuoden opiskelijat. Projektissa on kehitetty ilmastonmuutokseen liittyvää tilastodataa havainnollistava web-sovellus. Havainnollistusten perustana on käytetty useista eri lähteistä peräisin olevia tieteelliseen tutkimukseen perustuvia tietoaineistoja, joissa on tilastoitu mm. pitkän aikavälin ilmakehän hiilidioksidipitoisuuksia, maanpinnan ja ilman lämpötilojen vaihtelua sekä eri valtioiden ja sektoreiden tuottamia hiilidioksidipäästömääriä. Datan havainnollistus sovelluksen sisällä on toteutettu visualisoimalla dataa erilaisten interaktiivisten kuvaajien avulla. Kuvaajista on koostettu sovellukseen valmiita, julkisesti nähtävissä olevia näkymäkokonaisuuksia.

## Sovelluksen käyttö

Sovellukseen (kuva 1) on mahdollista luoda käyttäjätunnus. Rekisteröityneellä ja kirjautuneella käyttäjällä on sovelluksen käyttöliittymän sisältämän editorin avulla mahdollisuus luoda itse määrittelemiään, vapaavalintaisia näkymäkokonaisuuksia edellä mainituista kuvaajakomponenteista. Käyttäjän luomat ja määrittelemät näkymät ovat edelleen jaettavissa yksilöllisellä URL-osoitteella. 

- Sivun osoite: [ClimateChangeCharts](https://climatechangecharts.onrender.com/)
- Sovelluksen esittelyvideo: [Youtube linkki](#)

![Sovelluksen etusivu](/client/src/images/frontpage.jpg "Climate Change Charts etusivu")
KUVA 1. Näkymä sovelluksen aloitussivusta

## Sovelluksen arkkitehtuuri

Sovelluksen palvelinpuoli on toteutettu Java-ohjelmointikielellä Spring Boot -ohjelmointikehystä hyödyntäen. Tietokantana toimii MySQL-tietokanta (kuva 2). Web-käyttöliittymä on toteutettu JavaScript-ohjelmointikielellä ja React-kirjastolla. Reactin sisällä on hyödynnetty [Material UI](https://mui.com/) -komponenttikirjastoa.

![Tietokantarakenne](/client/src/images/db-eer.png "Tietokannan EER-diagrammi")
KUVA 2. EER-kaavio sovelluksen tietokantarakenteesta

## Projektin jäsenet

Projektin eri osa-alueiden sisältämät työtehtävät pyrittiin jakamaan mahdollisimman tasaisesti kaikkien osallistujien kesken. Projektin jokainen tekijä toimi full stack -kehittäjänä osallistuen projektin jokaiseen vaiheeseen. 

Olli Petäjäniemi, [Github](https://github.com/petajaol)
<br>Teea Põldsam, [Github](https://github.com/tpoldsam) 
<br>Johannes Rantapää, [Github](https://github.com/Necromunda) 
<br>Perttu Vehviläinen, [Github](https://github.com/Penamonni) 

## Käyttöönotto

Kloonaa git-repositorio: `git clone https://github.com/tvt21webdev2/tvt21webdev2-app`.

### Backendin käynnistys

Tietokantatallenne löytyy hakemistosta `api/dumps/cccdb14.sql`. Käynnistä tietokantapalvelin haluamallasi tavalla. Määritä Java-projektin application.properties -tiedostoon tarvittavat tiedot tietokantayhteyden muodostamiseksi. Käynnistä Java-palvelin haluamallasi tavalla.

application.properties:

- spring.datasource.url = jdbc:mysql://localhost:3306/cccdb
- spring.datasource.username =
- spring.datasource.password =
- spring.datasource.driver-class-name = com.mysql.cj.jdbc.Driver
- spring.jpa.show-sql = true
- spring.jpa.properties.hibernate.format_sql = true
- spring.jpa.open-in-view = false
- jwt.secret = 

Tietokantapalvelin toimii oletuksena osoitteessa https://localhost:3006. 

Backend-palvelin toimii oletuksena osoitteessa https://localhost:8080.

### Frontendin käynnistys

Siirry client-hakemistoon: `cd client`. 

Asenna tarvittavat riippuvuudet: `npm install`. 

Käynnistys: `npm start`. 

Frontend-palvelin toimii oletuksena osoitteessa https://localhost:3000. 
