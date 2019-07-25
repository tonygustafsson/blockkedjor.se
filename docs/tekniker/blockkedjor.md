---
layout: layout.html
title: Blockkedjor
description: Om tekniken bakom blockkedjor. Hur de fungerar och vad de kan användas till, samt om de olika generationerna sedan 2009.
mainImage:
author: Tony Gustafsson
created: 2019-07-22
modified: 2019-07-25
---

# Blockkedjor

En blockkedja (blockchain) består av en lång serie med block. Varje block innehåller vanligtvis flera transaktioner. Det är en decentraliserad databas utan en central knutpunkt, vilket gör det svårt att stoppa eller kontrollera.

Nätverket består av x antal noder, och varje nod är en dator som validerar transaktioner. Noderna blir belönade för sitt arbete (brytning/mining) genom att systemet automatiskt skickar pengar till den som hinner först med att validera ett block.

Varje block har ett hashvärde som inte kan beräknas fram, utan endast kan slumpas fram och de slumpade hasharna kan sedan vara rätt eller fel. En miner "gissar fel" otaliga gånger innan någon slutligen gissar rätt. Den som hinner först är den som belönas med en ersättning. Alla andra noder kan sedan validera att resultatet stämde, och om resultatet är felaktigt så ignoreras det och hamnar aldrig på blockkedjan.

Varje nytt block knyts samman med tidigare block, vilket gör det omöjligt att påverka ordningen eller innehållet i en blockkedja i efterhand. Det gör att det passar utmärkt som exempelvis valuta.

Den första decentraliserade blockkedjan skapades 2008 av Satoshi Nakamoto, vars identitet även idag är okänd. Han gav liv till den största valutan idag, Bitcoin. Idag finns det tusentals andra blockkedjor. Vissa är väldigt lika Bitcoin, så som Litecoin - medan andra är totalt olik i sin natur, så som IOTA.

## Generationer

Blockkedjor har funnits i ca 10 år, men redan nu har upphovsmakare till nya blockkedjor börjat dela in tekniken i generationer. Det är ofta missvisande, och om ytterligare tio år så kan man ställa sig tveksam till att vi kommer att se på generationerna på samma vis som nu.

### Generation 1

Den första generationens blockkedjor är typiskt enbart för transaktioner av pengar. Här till hör de tidiga blockkedjorna som [Bitcoin](/kryptovalutor/bitcoin.html) och [Litecoin](/kryptovalutor/litecoin.html). De är typiskt långsamma och rör sig med ett fåtal transaktioner i sekunden. De använder sig vanligtvis av [Proof of Work](/tekniker/proof-of-work.html) som konsensusmodell.

### Generation 2

Den här typen av blockkedjor hanterar vanligtvis andra saker än rena pengatransaktioner. De använder sig av [smarta kontrakt](/tekniker/smarta-kontrakt.html) och är applikationsplattformar. Ett typexempel är [Ethereum](/kryptovalutor/ethereum.html). Det är en fantastisk teknik där decentraliserade nätverk kan skapa spel, applikationer eller flytta pengar när vissa krav uppfylls. De är dock fortfarande långsamma, även om de är snabbare än Generation 1 så blir det extra tydligt när det handlar om applikationer.

### Generation 3

Det handlar fortfarande om pengatransaktioner och applikationsplattformar, men till den här generationen har man börjat fokusera på skalbarhet, hållbarhet och kommunikation mellan olika blockkedjor. För att lyckas med detta har man oftast lämnat Proof of Work bakom sig, och arbetar med [Proof of Stake](/tekniker/proof-of-stake.html) eller modernare modeller så som [riktade acykliska grafer](/tekniker/riktade-acykliska-grafer.html) eller [hashgrafer](/teknik/hashgrafer.html).

Typexempel på dessa är [IOTA](/kryptovalutor/iota.html), [Neo](/kryptovalutor/neo.html) och [Nano](/kryptovalutor/nano.html).

### Generation 4

Denna generation är så pass ny och fungerar hittills mest i marknadssyfte där man vill lyfta fram hur fantastiskt modern man är och hur mycket bättre än alla andra man är. Vissa spelare hävdar att AI spelar en stor roll, eller integration mot den fysiska verkligheten genom så kallade orakel.
