---
layout: default.hbs
title: Orakel, kryptotjänster som du kan lita på
description: En tjänst som erbjuder utomstående data till smarta kontrakt och blockkedjor på ett tillförligt sätt.
mainImage: img/oracles.webp
author: Tony Gustafsson
created: 2020-08-03
modified: 2020-08-03
---

# Orakel

![Orakel](/img/oracles.webp 'Orakel')

Ett orakel är en tjänst som kan ge [smarta kontrakt](/tekniker/smarta-kontrakt.html) extern information från den verkliga världen. Smarta kontrakt följer given programkod och när vissa uppsatta mål är nådda så exekveras dem. Men de kan aldrig ta beslut utifrån annat än det som finns på [blockkedjan](/tekniker/blockkedjor.html). Detta är en begränsning som omöjliggör saker som slumpmässighet i spel, marknadsinformation eller övriga externa tjänster.

Om du vill skapa ett kontrakt som säger att om Manchester United vinner matchen på fredag så ska de som satsat pengar på detta få avkastning. Hur ska ditt kontrakt veta om de vann eller förlorade? Och hur vet de som spelar att de kan lita på informationen som kommer från dig? Hela poängen med blockkedjor är att inte behöva _lita_ på någon part.

Det är här orakel (oracles) kommer in i bilden. Det är en tjänst som levererar tillförlitlig information från världen, på ett sätt som inte kräver tillit. De håller inte informationen själva, utan orakel är det mellanlager som hämtar informationen, verifierar och autentiserar extern data. Exempelvis om en betalning gått igenom eller om temperaturen är över 25 grader celsius i Oslo.

## Säkerhet

I slutändan är användning av orakeltjänster alltid en risk. Skulle de ge fel information så kan de smarta kontrakten inte göra någonting annat än att följa dem. Om någon exempelvis skulle försöka hacka informationen för att lura systemen att tro att Manchester United förlorade, eftersom han satsat pengar på detta, så är det enklare än att hacka blockkedjan i fråga.

För att försöka komma från dessa problem brukar man använda sig av flera datakällor och flera orakel parallellt. Det finns även metoder för att ge ekonomiska incitament till att inte lura systemet, då det straffar sig. Hårdvaruorkal (mätinstrument) kan även bevisa äktheten på deras data genom zero knowledge proofs, utan att faktiskt visa hur de kom fram till mätvärdena.

![Informationsflöde för orakel](/img/oracles-info.webp 'Informationsflöde för orakel')

## Kostnad

Ingenting är gratis, då det kräver beräkningskraft och lagring för att lyckas med detta, och någon vill ha betalt för sina tjänster. Vanligtvis har en orakeltjänst en egen valuta eller token, som krävs som betalmetod för att använda deras tjänst. Det sker alltså en integration mellan en blockkedja och orakeltjänsten i fråga. Det kostar också att använda sig av ett smart kontrakt (transaktionsavgift).

Idag kan kostnaden att bli för hög för att locka till sig en stor publik. Därför läggs det mycket tid och pengar på att ta fram nya decentraliserade nätverk för att göra systemen snabbare och mer kostnadseffektiva, utan att tumma på säkerheten.

## Exempel på orakeltjänster

-   [ChainLink](https://chain.link/)
-   [Augur](https://augur.net/)
-   [DOS Network](https://dos.network/)
