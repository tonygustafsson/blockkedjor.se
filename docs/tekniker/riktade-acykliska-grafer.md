---
layout: default.hbs
title: Riktade acykliska grafer
description: DAGs är en teknik som lovar snabbare transaktioner än blockkedjor och som med framgång används av kryptovalutor så som IOTA och NANO.
mainImage: img/dag.webp
author: Tony Gustafsson
created: 2019-07-22
modified: 2019-07-31
---

# Riktade acykliska grafer (DAG)

![Riktade acykliska grafer](/img/dag.webp 'Riktade acykliska grafer')

Directed Acyclic Graph (DAG) är en utmanare till [blockkedjan](/tekniker/blockkedjor.html), som försöker lösa problemet med dyra transaktionsavgifter, långsamma transaktioner och den dåliga skalbarheten. Blockkedjor i sig har lösningar som lager-2-tekniker (Ex [Lightning Network](/tekniker/lightning-network.html)), sharding och [Proof of Stake](/tekniker/proof-of-stake.html), men hittills har ingen kommit upp i hastigheter som liknar de man ser på DAG-baserade nätverk.

Konceptet i sig är inte nytt, men kom att bli känt i kryptosfären i och med [IOTA](/kryptovalutor/iota.html), som fortfarande är den största DAG-valutan. Även innan dess fanns det valutor som Byteball med liknande teknik.

Hastigheten och sättet att validera gör tekniken utmärkt för mindre enheter, så som Internet of Things (IoT)-enheter.

## Hur det fungerar

Skillnaden mellan blockkedjor, där varje transaktion ligger i ett block tillsammans med många andra transaktioner, som behandlas sekventiellt, är att i DAG-baserade projekt valideras transaktioner för sig, och kan göra så asynkront. Det vill säga, flera transaktioner kan valideras samtidigt.

För att få sin transaktion validerad, krävs det att du validerar två andra, slumpvis utvalda transaktioner. Validering sker vanligtvis med ett litet [Proof of Work](/tekniker/proof-of-work). Den här metoden gör det ohållbart att missbruka nätverket, eftersom någon som spammar nätverket snarare hjälper till att validera snarare än stjälper. Det gör också att transaktionstiden faktiskt blir snabbare desto fler transaktioner som behandlas - alltså tvärtom mot blockkedjor.

På grund av detta så finns det ingen plats för miners i DAG-baserade valutor. Det finns därför ingen som behöver få en belöning för utfört arbete, eftersom du utför arbetet själv när du skickar din transaktion. Därför är transaktionsavgiften helt gratis, vilket ger nya möjligheter för mikrotransaktioner.

Varje nod i nätverket har en egen blockkedja kan man säga. Om en felaktig eller falsk transaktion upptäcks, så knoppas kedjan av och fortsätter där den senaste valida transaktionen var.

![DAG-graf](/img/dag-graph.webp 'DAG-graf')

Blockkedjor är säkra, därför att krypteringsalgoritmerna är säkra. Men ett hot man kan se på horisonten är kvantdatorer, som är extremt mycket snabbare på att gissa kontrollsummor än vanliga datorer. I alla fall kommer de att vara det, när tekniken mognat. Man hittar troligtvis en lösning på det problemet när det är dags, men DAG-baserade lösningar är redan skyddade.

## Svagheter

En del av kritiken mot DAG är att det tummar lite på säkerheten, att alla noder inte känner till alla transaktioner. Det må i vissa fall vara sant, men ska vi kunna ha valutor som går att använda på riktigt, med transaktionstider nästan i realtid, krävs vissa uppoffringar. I ett stort DAG-nätverk är det säkert nog.

En annan svaghet är att det blir omöjligt att hantera [smarta kontrakt](/tekniker/smarta-kontrakt.html) i en kedja där ordningen på transaktionerna inte behöver vara den samma enligt alla noder i nätverket.

## Blockgitter (Block Lattice)

![Blockgitter](/img/block-lattice.webp 'Blockgitter')

Vissa valutor, så som [NANO](/kryptovalutor/nano.html) och VITE har löst problemet med [smarta kontrakt](/tekniker/smarta-kontrakt.html) genom att använda ett blockgitter. Det är fortfarande DAG-baserad teknik, men där splittar man upp transaktioner i två olika händelser. En händelse för att pengar skickas, och en händelse för att pengar tas emot. Då kan man plötsligt känna till ordningen på transaktionerna, trots att nätverket är asynkront.

## Hashgrafer (Hashgraphs)

![Hashgraf](/img/hashgraph.webp 'Hashgraf')

En annan DAG-baserad teknik är hashgrafer, som används av exempelvis Hedera Hashgraph och Tolar HashNET, är ett slags skvallerprotokoll. I stället för att en nod som skickar en transaktion kommunicerar med två andra noder och validerar deras transaktioner, så kommuniceras alla händelser till dessa två parter. Hela historiken. Och de i sin tur berättar allt som den känner till. Så går det runt.

Det skapar ett snabbt och decentraliserat nätverk. Det ger också möjligheten till [smarta kontrakt](/tekniker/smarta-kontrakt.html).
