---
layout: default.hbs
title: Proof of Stake (PoS)
description: En lösning för skalbarhet, transaktionstider och elkostader som Proof of Work är betyngat med. Här röstas i stället en validerande nod fram baserat på slump, insats och insatsens ålder.
mainImage: img/proof-of-stake.jpg
author: Tony Gustafsson
created: 2019-07-22
modified: 2019-07-30
---

# Proof of Stake (PoS)

![Proof of Stake](../img/proof-of-stake.jpg 'Proof of Stake')

Idéen kom 2011 som en lösning på alla de problem som [Proof of Work](/tekniker/proof-of-work.html) skapade. Exempelvis problemet med skalbarhet, transaktionstiderna, transaktionskostnaderna och elkostnaderna för att driva nätverket. [Ethereum](/kryptovalutor/ethereum.html) har valt att framöver lämna Proof of Work till förmån till Proof of Stake av dessa anledningarna.

Det går ut på att man blir en del av nätverket genom att satsa sina pengar istället för att bryta/mina. Den som får validera nästa block tas fram genom en valprocess. Vanligtvis har man större inflytande desto mer pengar man satsar, och man blir belönad för varje korrekt validering av block som utförs. Valprocessen är styrd av slumpen, men storleken och åldern på insats vägs också in. När man blivit belönad för sin validering så nollställs åldern, vilket försäkrar att de rika inte alltid är de som får mest makt.

Skulle det visa sig att valideringen är falsk eller ett försök till förfalskning bestraffas man genom att ens insats kan tas ifrån en, och att bli bannlyst från nätverket i framtiden. I den här typen av nätverk så bryts inte block, utan de smids (forgas).

I normalfallet är alla existerande mynt i ett Proof of Stake-nätverk redan skapade från början, och transaktionskostnaderna går till de som gjort en insats och "låst" sina pengar för detta syfte. Vissa anser att det är en säkrare modell än Proof of Work då det är billigt och enkelt att vara med och validera block, vilket gör att antalet validerande noder ökar. I Bitcoins fall exempelvis kräver det enorma summor pengar för att få möjligheten att vara med att slåss om belöningar.

## Master nodes

Alla Proof of Stake-nätverk godkänner inte att vem som helst är med och gör insatser och röstar. I stället krävs att personerna som får vara med har en avsevärd stor summa pengar för att få vara med. Belöningen brukar då vara högre än annars för de som har råd att vara med.

Exempel på dessa är Dash.

## Proof of Authority (PoA)

Vissa centraliserade nätverk har valt att vitlista x antal noder i ett nätverk som är godkända spelare. Detta säkerställer kvaliteten, men förstör också decentraliseringen. Det kräver att man litar blint på organisationen i fråga.

Exempel på dessa är [VeChain](/kryptovalutor/vechain.html).

## Distribuerad Proof of Stake (DPoS)

Idéen väcktes 2014 och går ut på att man kan delegera sin insats och sina röster till andra noder. Genom en röstprocess väljs deleganter fram i en slags digital demokrati.

Man får x antal röster baserat på den insats man gjort. Exempel på dessa kan vara EOS, [Cardano](/kryptovalutor/cardano.html) och [TRON](/kryptovalutor/tron.html).
