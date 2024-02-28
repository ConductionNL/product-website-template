# Over de Product Website Template

De [Product Website Template](https://github.com/ConductionNL/product-website-template) van [Conduction](https://www.conduction.nl/) is ontwikkeld om een snel en gemakkelijk opzetten van productpagina's voor open source en Common Ground projecten mogelijk te maken. Deze sjabloon stelt gebruikers in staat om met minimale inspanning een professionele en gestroomlijnde productpagina te creëren.

## Kernfunctionaliteiten

- **Eenvoudige Configuratie:** Gebruikers kunnen snel een productpagina opzetten zonder uitgebreide technische kennis.
- **Automatische Integratie:** De template haalt automatisch informatie uit uw GitHub-repository om de productpagina te vullen.
- **Aanpasbaar Ontwerp:** Pas de stijl van uw productpagina aan met behulp van NL Design Tokens om een consistente merkidentiteit te waarborgen.
- **Geen Server Nodig:** Maak gebruik van GitHub Pages voor hosting, wat het onderhoud en de kosten vermindert.
- **Dynamische Inhoud:** De pagina wordt automatisch bijgewerkt met de nieuwste documentatie uit uw repository.

## Installatie

### Voorbereiding

1. Zorg ervoor dat uw project is gehost op GitHub en dat u toegang hebt tot de repository-instellingen.

### GitHub Workflow Configuratie

1. Download het [workflow-bestand](https://github.com/ConductionNL/product-website-template/blob/main/.github/workflows/product-page-deploy.yml) voor de productpagina.
2. Voeg dit bestand toe aan de `.github/workflows` map in uw repository.
3. Pas de configuratie aan binnen het workflow-bestand om overeen te komen met uw projectspecificaties.

### Activering GitHub Pages

1. Activeer GitHub Pages in de instellingen van uw repository.
2. Configureer GitHub Pages om de inhoud van de `gh-pages` branch te gebruiken.

## Gebruik

Na installatie en configuratie wordt uw productpagina automatisch gegenereerd en gehost via GitHub Pages. U kunt de pagina verder aanpassen door de configuratieopties in het workflow-bestand aan te passen of door eigen content toe te voegen aan uw GitHub-repository.

## Bijdragen

Wij verwelkomen bijdragen aan de Product Website Template. Of het nu gaat om bug fixes, feature suggesties of code bijdragen, raadpleeg onze [CONTRIBUTING.md](CONTRIBUTING.md) voor meer informatie over hoe u kunt bijdragen.

## Licentie

De Product Website Template is uitgegeven onder de EUPL 1.2 licentie. Bekijk het [LICENSE.md](LICENSE.md) bestand voor meer details.

## Contact

Voor meer informatie over de Product Website Template of hoe u deze kunt implementeren voor uw projecten, kunt u contact opnemen via [info@conduction.nl](mailto:info@conduction.nl).
