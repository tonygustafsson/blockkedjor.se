---
layout: default.hbs
title: Lightning Network
description: En lager-2-lösning för bland annat Bitcoin och Litecoin som löser problemet med skalbarhet. Transaktioner sker inte längre på lager-1-kedjan utan endast resultatet av lager-2-kedjan lagras.
mainImage: img/lightning-network.webp
author: Tony Gustafsson
created: 2021-03-05
modified: 2021-03-05
---

# Lightning Network

![Lightning Network](/img/lightning-network.webp 'Lightning Network')

Lightning Network är ett betalnätverk som ligger ovanpå [blockkedjor](/tekniker/blockkedjor.html) så som [Bitcoin](/kryptovalutor/bitcoin.html) och [Litecoin](/kryptovalutor/litecoin.html), och kallas därför för en lager2-lösning. Förslaget togs fram av Joseph Poon och Thaddeus Dryja 2015 och kom ut som beta år 2018.

Syftet med Lightning Network är att lösa problemet med skalbarheten. Det ger extremt billiga och snabba transaktioner, vilket gör det möjligt att betala med Bitcoin för kaffet eller skicka mikrotransaktioner. Tekniken är inte tänkt för större transaktioner eftersom säkerheten inte är lika hög som på den underliggande blockkedjan.

Idag är [Bitcoin](/kryptovalutor/bitcoin.html) mest ett sätt att lagra värde på, lite som ett sparkonto. Men när Lightning Network är redo möjliggör det att låta Bitcoin vara en riktig valuta som används dagligdags, för att handla kaffe, en hamburgare eller betala för en parkeringsplats.

## Fördelar

-   Ökad integritet då alla transaktioner mellan två parter inte sparas publikt på en kedja.
-   Snabba transaktioner, vanligtvis under minuten, ofta på några få millisekunder (istället efter 10+ minuter).
-   Billiga transaktioner, det kostar oftast ören.
-   Antalet samtidiga transaktioner. Någon övre gräns finns egentligen inte, vilket gör att systemet kan konkurrera med VISA, MasterCard och Swish.

## Nackdelar

-   Inte riktigt redo för användning ännu, fortfarande experimentell, trots att utvecklingen pågått sedan 2015.
-   Båda parter måste vara online för att transaktionen ska gå igenom.
-   Lägre säkerhet än på blockkedjan.
-   Då utvecklingen dragit ut på tiden har man fått konkurrens från andra lösningar där Bitcoins värde vilar på andra blockkedjor istället, så som [Wrapped Bitcoin (wBTC)](https://wbtc.network/) på [Ethereum](/kryptovalutor/ethereum.html) och RenBTC på [REN](https://renproject.io/).

## Hur det går till

Betalkanaler skapas mellan två parter. En summa dedikeras för kanalen på blockkedjan (lager 1), och först när någon av partner avslutar betalkanalen så debiteras kostnaderna "på riktigt". Innan dess är det information som bara de två parterna känner till, men ingen kan förstås spendera pengar denne inte har.

Man kan även skicka pengar till parter man inte har en direkt uppsatt betalkanal till genom ett routingprotkoll som liknar [TOR](https://www.torproject.org/download/). Varje person som skapar upp en betalkanal väljer själv vad det ska kosta att skicka pengar genom kanalen - men om det är för dyrt kommer människor förstås välja en annan rutt. Generellt är det väldigt billigt, även att göra en betalning genom många parter/noder.

![Lightning Network Test network](/img/lightning-network-nodes.webp 'Lightning Network Test network')
_Exempel på ett routat Lightning-nätverk på ett testnät_

## Stöd

Idag finns det tyvärr dåligt stöd för tekniken, men är man lite teknikkunnig går det absolut att använda det redan idag. Plånböcker som stödjer tekniken är bland annat [Wallet of Satoshi](https://www.walletofsatoshi.com/), [Breez](https://breez.technology/), [BLW](https://lightning-wallet.com/) och [Eclair](https://play.google.com/store/apps/details?id=fr.acinq.eclair.wallet.mainnet2).

Marknadsplatser som stödjer Lightning Network är bland annat [Bitfinex](https://www.bitfinex.com/), [OkEx](https://www.okex.com/) och [River Financial](https://river.com/).

Mer information:

-   [Understanding the Lightning Network](https://bitcoinmagazine.com/technical/understanding-the-lightning-network-part-building-a-bidirectional-payment-channel-1464710791)
-   [Lightning Network](https://lightning.network/)
