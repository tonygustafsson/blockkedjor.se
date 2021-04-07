---
layout: default.hbs
title: Hur du använder MetaMask Wallet
description: MetaMask är en oerhört populär Ethereumplånbok där du kan skicka och ta emot ETH, hantera tokens och växla dem.
mainImage: img/guides/metamask/metamask.webp
author: Tony Gustafsson
created: 2021-03-10
modified: 2021-03-10
---

# MetaMask Wallet

![MetaMask](/img/guides/metamask/metamask.webp 'MetaMask')

MetaMask är en av de mest populära plånböckerna för [Ethereum](/kryptovalutor/ethereum.html) och ERC-20-tokens. Den är relativt användarvänlig, och gör det enkelt att flytta pengar mellan olika konton eller integrera med [decentralicerade applikationer](/tekniker/decentraliserade-applikationer.html) och [decentraliserade exchanges](/marknaden/exchanges.html).

Andra fördelar är att den går att använda tillsammans med en [hårdvaruplånbok](/marknaden/planbocker.html) så som [Ledger](https://shop.ledger.com/products/ledger-nano-x) och [Trezor](https://trezor.io/). Det finns även en mobilapp så att du kan utföra dina ärenden direkt i mobilen. Till sist går det även att byta tokens mellan varandra.

## Innehållsförteckning

-   [Installation](#installation)
-   [Skapa ett konto](#skapa-ett-nytt-konto)
-   [Skicka och ta emot Ethereum](#skicka-och-ta-emot-ethereum)
-   [Hantera tokens](#hantera-tokens)
-   [Växla tokens](#växla-tokens)
-   [MetaMask i mobilen](#metamask-i-mobilen)

## Installation

För att börja använda MetaMask på datorn behöver du installera ett tillägg till din webbläsare. De webbläsare som stöds är Chrome, Firefox, Brave och Edge. Nedladdningen kan du göra [härifrån](https://metamask.io/download.html).

När nedladdningen är färdig möts du av en välkomstskylt med en räv som strax kommer bli väldigt bekant för dig. Klicka på "Get Started".

![MetaMask](/img/guides/metamask/metamask-1.webp 'MetaMask')

## Skapa ett nytt konto

Nu får du upp följande val - Import wallet eller Create a Wallet. Du ska nu välja det senare alternativet för att skapa upp ett nytt konto med en ny adress.

![MetaMask](/img/guides/metamask/metamask-2.webp 'MetaMask')

Nästa skärm frågar om du vill tillåta att anonym data samlas. Valet är upp till dig.

Därefter ska du bestämma ett nytt lösenord för ditt konto. Detta lösenord kommer du använda ofta, när du ska använda din plånbok. Tappar du bort lösenordet så kan du alltid återställa ditt konto - mer om det senare. Godkänn avtalen och tryck på "Create".

![MetaMask](/img/guides/metamask/metamask-3.webp 'MetaMask')

Nästa skärm kommer be dig ta backup på ditt konto. Frasen kan senare användas för att återställa ditt konto på en annan dator eller om kontot av någon anledning försvinner från datorn. Frasen kan sättas samman av MetaMask för att skapa din privata nyckel, och därmed få access till ditt konto och dina pengar igen.

**VIKTIGT: Tappar du bort denna fras så kan du inte återställa ditt konto, och eventuella pengar som finns på kontot är borta för evigt!**

Skriv ner frasen. Ska du ha mycket pengar på kontot så rekommenderas det att skriva ner det på ett papper och förvara i exempelvis ett bankfack. Att spara den i en fil på datorn är inte ett alternativ om du inte bara testar hur det fungerar.

Välj Next när du är klar.

![MetaMask](/img/guides/metamask/metamask-4.webp 'MetaMask')

Nu kommer den tråkiga biten, där du måste bevisa att du sparat din fras från föregående steg. Detta för att det inte är ovanligt att människor tappar bort hela sina besparingar när de en gång i tiden tänkt "Jag gör det sen...".

Så fyll i din fras, ett ord i taget, i ordning.

![MetaMask](/img/guides/metamask/metamask-5.webp 'MetaMask')

![MetaMask](/img/guides/metamask/metamask-6.webp 'MetaMask')
_Hurra! Nur är du klar!_

## Skicka och ta emot Ethereum

MetaMask finns i två vyer, en som fälls ut uppifrån verktygsfältet högst upp till höger, och en variant som visas i en flik i webbläsaren. Den första varianten är bekväm men oerhört irriterande då den börjar från noll varje gång man öppnar den. Så ska man kopiera en adress exempelvis och har fyllt i summan, så är det borta nästa gång man öppnar den. Därför är den expanderade "flikvyn" att föredra. Öppna den genom att fälla ut MetaMask från verktygsfältet, klicka på de tre tre vertikala prickarna uppe till höger, och välj "Expanded view".

Till saken...

### Ta emot Ethereum

Det finns ingen särskild knapp för att ta emot pengar, utan du skickar helt enkelt din publika adress till den som ska skicka dig pengar. Enklaste sättet är att få tag i den är att klicka på den under "Account 1". En adress börjar på 0x...

![MetaMask](/img/guides/metamask/metamask-7.webp 'MetaMask')

När pengarna kommit in så kommer det synas på antalet ETH du har i din plånbok, samt undertill som visar senaste transaktioner.

### Skicka Ethereum

För att skicka ETH till dina kompisar, dig själv eller en [exchange](/marknaden/exchanges.html) så klickar du på den blå knappen "Send". Här kan du skriva in adressen (som börjar 0x...) till den du vill skicka till, alternativt scanna en QR-kod. Har du flera konton i MetaMask så kommer du kunna välja dem här också. Du möts sedan av denna skärm:

![MetaMask](/img/guides/metamask/metamask-8.webp 'MetaMask')
_Klicka på adressen högt upp för att kopiera det till urklipp_

Du får nu möjlighet att fylla i hur mycket ETH du vill skicka, och hur mycket du vill betala i transaktionsavgift. Hur mycket du bör betala i transaktionsavgift kommer att variera beroende på hur belastat nätverket är. "Average" brukar räcka, och tar cirka en minut, men det kan också ta mycket längre tid. När det inte skiljer så mycket mellan Average och Fast så är det effektivaste att välja snabbaste.

Ska du bara skicka till ett annat konto så kanske det inte spelar så stor roll hur fort transaktionen går, men ska du integrera med [decentralicerade applikationer](/tekniker/decentraliserade-applikationer.html) och [decentralicerade exchanges](/marknaden/exchanges.html) så uppstår ibland transaktionskostnadskrig. Om din transaktion inte går igenom fort nog så kan förutsättningarna ha ändrats, och din transaktion blir avbruten. En avbruten transaktion ger dig inte tillbaka din transaktionsavgift.

Sedan tar du "Next", och bekräftar. Sedan är det bara att vänta tills det decentralicerade nätverket verifierat din transaktion.

## Hantera tokens

Du kan även hantera dina tokens (ERC-20, ERC-721 osv) genom MetaMask. Så länge dessa finns på kontot som är kopplad till din MetaMask så bör de dyka upp på startskärmen under fliken "Assets". För att ta emot assets är det, precis som med ETH, bara ge ut din adress. Se [Ta emot Ethereum](#ta-emot-ethereum).

För att skicka dina assets till vänner eller en exchanges för att sälja dem, kan du bara klicka på dem från startskärmen. Därefter väljer du "Send". Ange adressen (Eller använder dig av QR-kod). Precis som när du skickar Ethereum så väljer du sedan beloppet och din transaktionsavgift. Notera att transaktionsavgiften alltid betalas med ETH oavsett vilken asset/token det är du skickar. Det är därför en god idé att alltid ha lite ETH kvar på kontot ett ett par transaktioner.

Om din token _inte_ visas i listan på startskärmen kan de behöva läggas till. Längst ner på startskärmen finns knappen "Lägg till token". Du kan här söka upp det. När inte det heller fungerar så får du lägga till den manuellt genom fliken "Custom Token".

![MetaMask](/img/guides/metamask/metamask-9.webp 'MetaMask')
_Fyller du i kontraktsadressen så fylls de andra två fälten i automatiskt_

Av dessa tre fält är det bara "Token Contract Address" du behöver fylla i. Varje token har nämligen en kontraktadress som är unik. Tre metoder för att hitta denna adress:

1. Du har kontraktadressen på skaparnas webbplats.
2. Du hittar token via [EtherScan](https://etherscan.io/). Du går då till tokenet i fråga och ser "Contract" högst upp till höger.
3. Om du hittar din token på [CoinGecko](https://www.coingecko.com/) så kan du kopiera kontraktsadressen vid ikonen för Kopiera.

![MetaMask](/img/guides/metamask/metamask-10.webp 'MetaMask')
_Här kopierar du kontraktsadressen från CoinGecko_

När du matar in denna adress i MetaMask så bör den fylla i Symbol och Precision själv. Klicka på Next så syns den i listan, och du kan skicka den precis som vanligt.

## Växla tokens

En ny funktion sedan 2021 är möjligheten att kunna växla (swappa) tokens mellan varandra direkt i MetaMask. Det sker genom [decentralicerade exchanges](/marknaden/exchanges.html). Man behöver således inte använda tjänster så som [Uniswap](/guider/uniswap.html) om man inte vill.

Enklaste sättet är att klicka på den blå knappen "Swap". Här kan du välja om du vill byta _från_ ETH eller en särskild token, och vad du vill ha tillbaka. Här har vi ett exempel där jag vill växla 0.01 ETH som där och då motsvarade $18.32 - och jag vill ha REN för dessa.

![MetaMask](/img/guides/metamask/metamask-11.webp 'MetaMask')

Klicka sedan på "Review Swap". Det kommer ta några sekunder då den kollar bästa möjliga pris och rutt. Du kommer att se ungefär vad transaktionsavgiften kommer att bli, och du kan även välja transaktionsavgift manuellt genom den lilla länken "Edit". Som vi nämnt innan så är det ofta en god idé att välja snabbaste möjliga transaktioner när man växlar på decentralicerade marknadsplatser, eftersom långsamma transaktioner ofta misslyckas, och du går miste om transaktionsavgiften. När allt ser rätt ut klickar du på "Swap".

![MetaMask](/img/guides/metamask/metamask-12.webp 'MetaMask')
_Hurra! 13.55 REN för mina ynka 0.01 ETH_

Nackdelar med detta? Även MetaMask tar en liten avgift på under 1%. Sedan tar de även en avgift hos den decentralicerade marknadsplatsen. Men dessa avgifter är försvinnande små i jämförelse med transaktionsavgiften man betalar för Ethereumnätverket.

## MetaMask i mobilen

Du kan [ladda ner MetaMask](https://metamask.io/download.html) till IOS eller Android, varpå du kan utföra allt som du kan göra med datorversionen. Du kommer att verifiera dig med ett fingeravtryck i stället för ett lösenord vid användning.

För att få upp dina konton i mobilappen öppnar du MetaMask på datorn. Klicka på Bollen som indikerar ditt konto högst upp till höger. Välj "Settings", sedan "Advanced". Där ser du en knapp som det står "Sync with mobile" på. Klicka på den. Ange ditt lösenord för MetaMask på datorn. Du får nu en QR-kod.

Öppna nu appen i telefonen. Har du inga konton så får du en installationsguide. Väljer du att importera ett konto så kan du scanna in QR-koden på datorn. Om du _inte_ får en guide av någon anledning så kan du manuellt importera dina konton genom att klicka på Huvudmenyn, sedan Account högst upp. Längst ner hittar du här "Import an account".

Här kan du välja Scan a QR Code. Tada!
