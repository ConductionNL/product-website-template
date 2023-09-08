# Architectuur van de Hosting voor de Product Website Template

De Product Website Template is ontworpen om een naadloze en efficiënte gebruikerservaring te bieden. Om dit te bereiken, hebben we gekozen voor een serverloze architectuur die zowel robuust als flexibel is. Hier is een gedetailleerde beschrijving van hoe we dit gaan organiseren:

## Domeinnaam en Cloudflare

We zullen de template onderbrengen onder de domeinnaam `commonground.nu`, gehost op een pro-versie van Cloudflare. Hier vindt SSL offloading plaats voor het PKIO-certificaat, waarna Cloudflare de statische gegevens van GitHub Pages haalt. Deze gegevens worden vervolgens op Cloudflare DNS gecached, waardoor de pagina blijft draaien, zelfs als GitHub Pages een verstoring heeft.

## Design Tokens en Centraal CDN

De codebase wordt aangepast om alle design tokens van de NL design organisaties te bevatten (in het worst-case scenario 400). We willen de token set echter vanuit een centraal CDN binnenhalen, zodat alle applicaties onderling een gecachte token set hebben. Dit betekent dat als een gebruiker eenmaal een pagina zoals PIP, WOO of OC heeft aangeraakt, de browser alle NL design tokens van alle organisaties in cache heeft, waardoor er geen vertraging optreedt.

## Cache-Gedreven Architectuur

Elke applicatie leeft in cache dankzij de gedeelde codebase. Als een gebruiker bijvoorbeeld naar PIP Rotterdam is geweest, heeft PIP Grevelingen geen extra laadtijd (volledig cache-gedreven). Specifiek voor OC gaan we ook de dataset "statisch" opslaan.

## Risicoanalyse

Hoewel deze architectuur veel voordelen biedt, zijn er enkele potentiële risico's om te overwegen:

- **Afhankelijkheid van Externe Diensten:** De afhankelijkheid van Cloudflare en GitHub Pages kan leiden tot potentiële verstoringen als een van deze diensten uitvalt.
- **Cache-Beheer:** Onjuist beheer van de cache kan leiden tot inconsistenties in de weergave van de content.
- **Beveiliging:** Hoewel SSL offloading wordt afgehandeld door Cloudflare, moet de beveiliging van de verbinding tussen Cloudflare en GitHub Pages zorgvuldig worden beheerd.

## Conclusie

De voorgestelde architectuur biedt een efficiënte, robuuste en gebruiksvriendelijke oplossing voor het hosten van de Product Website Template. Door gebruik te maken van serverloze technologie, gecentraliseerde caching en een gedeelde codebase, kunnen we een snelle en naadloze gebruikerservaring bieden. De potentiële risico's zijn geïdentificeerd en kunnen worden beheerd met zorgvuldige planning en implementatie.
