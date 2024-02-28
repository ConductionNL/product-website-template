# Architectuur van de Product Page Bouwer

## Inleiding

De Product Page Bouwer, aangeboden door Conduction, is ontworpen om de uitdagingen rondom de creatie van productpagina's voor open-source en Common Ground projecten te overwinnen. Deze tool stelt projecten in staat om snel en moeiteloos een productpagina op te zetten, gebruikmakend van bestaande documentatie binnen hun GitHub-repository, zonder de noodzaak voor extra codering of hosting.

## Kerncomponenten

### GitHub Workflows

De ruggengraat van de Product Page Bouwer maakt gebruik van GitHub Actions en Workflows om automatisch de meest recente projectdocumentatie te halen en te publiceren op een GitHub Pages website.

### Automatische Content Generatie

Door de integratie met GitHub, haalt de tool dynamisch content op uit de repository van het project, waaronder README-bestanden, documentatie en andere relevante informatie, om een samenhangende en informatieve productpagina te creëren.

### NL Design System

De tool ondersteunt het NL Design System, waardoor gebruikers hun productpagina kunnen aanpassen aan de huisstijl van hun organisatie. Dit zorgt voor een consistente gebruikerservaring en versterkt de visuele identiteit van het project.

### Geen Server Benodigd

Dankzij de ondersteuning voor GitHub Pages is er geen aparte serverhosting nodig. De productpagina wordt direct gehost op GitHub, wat zorgt voor een eenvoudige setup en minimaliseert de operationele kosten.

## Voordelen

- **Snelheid en Eenvoud:** Een productpagina kan in enkele minuten worden opgezet, zonder de noodzaak voor extra codering of webontwikkelingsvaardigheden.
- **Altijd Up-to-Date:** De content op de productpagina blijft up-to-date met de laatste wijzigingen in de GitHub-repository van het project.
- **Kostenefficiënt:** Elimineert de noodzaak voor aparte webhosting en verlaagt de drempel voor projecten om hun zichtbaarheid te vergroten.
- **Aanpasbaarheid:** Biedt ondersteuning voor het NL Design System, waardoor organisaties hun productpagina kunnen stijlen volgens hun eigen merkrichtlijnen.

## Implementatie

### GitHub Workflow Configuratie

Projecten dienen een specifieke GitHub Workflow te configureren die de Product Page Bouwer activeert. Deze workflow haalt de nieuwste documentatie en projectinformatie op en publiceert deze op een GitHub Pages site.

### Aanpassingen

Gebruikers kunnen de weergave van hun productpagina aanpassen door middel van NL Design tokens en specifieke configuratie-instellingen binnen de workflow, waaronder de aanpassing van de navigatiebalk, voettekst en het jumbotron.

## Conclusie

De Product Page Bouwer biedt een revolutionaire benadering voor het snel en efficiënt delen van projectinformatie, waardoor open-source en Common Ground projecten hun zichtbaarheid kunnen vergroten zonder de extra overhead van traditionele webontwikkeling.
