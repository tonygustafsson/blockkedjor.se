---
layout: layout.html
title: IOTA
description: En lösning för Internet of Things som baseras på DAG-teknologi, som utlovar lösa problemet med skalbarhet. Med gratis och fria transaktioner möjliggörs mikrotransaktioner på ett sätt som tidigare inte varit möjligt.
mainImage: img/iota.png
author: Tony Gustafsson
created: 2019-07-29
modified: 2019-07-29
---

# IOTA

![IOTA](../img/iota.png 'IOTA')

Officiell webbplats: https://www.iota.org/

IOTA skapades år 2017 av the IOTA Foundation, och har ett tydligt fokus på Internet of Things (IoT). Deras vision är att maskiner ska kunna kommunicera med andra maskiner, och utföra transaktioner däremellan. Exempelvis ska bilen kunna betala tullar och avgifter automatiskt och kaffemaskinen ska kunna köpa nya kapslar när de börjar ta slut.

För att detta ska fungera så anser man att en transaktion måste vara gratis, för att möjliggöra mikrotransaktioner. Det måste även gå fort, och med tanke på att IoT kommer involvera miljarder maskiner i framtiden så kan man inte basera nätverket på [Proof of Work](/tekniker/proof-of-work.html) och [blockkedjor](/tekniker/blockkedjor.html). Därför valde man en teknik kallad Tangle, men som är deras variant av [riktade acykliska grafer](/tekniker/riktade-acykliska-grafer.html).

Fria transaktioner innebär i teorin att nätverket kan missbrukas och fyllas med ickeönskade transaktioner som belastar nätverket. För att lösa detta så måste varje transaktion validera två andra, slumpmässigt utvalda, transaktioner. Detta görs med ett litet Proof of Work-arbete, som förstås kostar CPU och därmed elektricitet.

Detta är en av bristerna, då små IoT-devices ofta har begränsad CPU-kraft och minne. Man har heller inget möjlighet att erbjuda [smarta kontrakt](/tekniker/smarta-kontrakt.html) på grund av valet av Riktade acykliska grafer (DAG). Detta är något man nu försöker lösa med ett projekt kallat [Qubic](https://qubic.iota.org/).

Qubic är tänkt att delegera smarta kontrakt till särskilda noder. Dessa noder, eller "orakel" som de ibland kallas, kan ta mätvärden från den fysiska verkligheten och introducera dem till deras decentraliserade nätverk. De kan även exekvera något som liknar smarta kontrakt. Smarta kontrakt i kombination med gratis transaktioner är något som är nytt för kryptovärlden, och är enormt kraftfullt. För första gången kan det skickas miljoner mindre transaktioner som inte belastar nätverket, utan snarare bidrar till det (DAGs blir nämligen snabbare desto fler transaktioner som fyller nätverket, i stället för tvärtom).

IOTA har sedan starten kritiserats för att vara centraliserade, eftersom man haft egna noder i nätverket som validerat transaktioner. Nu har man frångått detta till mån för oberoende noder och ett decentraliserat system som övervakar att allt går rätt till på nätverket

## Fördelar

-   Deras DAG-lösning löser problemet med skalbarhet. Snabba, och helt gratis transaktioner. Med ett nätverk som blir snabbare ju fler transaktioner, i stället för tvärtom.
-   Starkt community och organisation.
-   Riktigt starka partnerskap.
-   Kvantdatorsäker teknik. Kvantdatorer kan bli ett hot mot vanliga blockkedjor och allt vad mining heter. NÅgot som inte kan drabba ett nätverk som enbart kan skapa transaktioner genom att validera andras transaktioner.
-   Qubic kan bli riktigt intressant med smarta kontrakt i kombination med mikrotransaktioner.

## Nackdelar

-   Mindre centraliserat än tidigare, men fortfarande inte vad man kan kalla decentraliserat.
-   Tekniskt komplext och aningen svårt för utvecklare.
-   Inga smarta kontrakt. Även om Qubic sägs komma lösa detta problem så återstår mycket mystik kring hur detta kommer att fungera. Och ingen ser att det kan göras helt decentraliserat.
-   DAGs är fortfarande mindre beprövat än blockkedjor. Risken för att upptäcka säkerhetshål anses vara större.
-   Inget stöd för anonyma/hemliga transaktioner.

## Att köpa

De går att köpa BNB (Binance Coin) med kontokort på [Binance](https://www.binance.com) och därefter köpa NEO för dessa.

## Nuvarande pris (CoinGecko)

<script src="https://widgets.coingecko.com/coingecko-coin-ticker-widget.js"></script>

<coingecko-coin-ticker-widget currency="sek" coin-id="iota" locale="en"></coingecko-coin-ticker-widget>
