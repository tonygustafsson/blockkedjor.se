---
layout: layout.html
title: Riktade acykliska grafer
description: DAGs är en teknik som lovar snabbare transaktioner än blockkedjor och som med framgång används av kryptovalutor så som IOTA och NANO.
mainImage:
author: Tony Gustafsson
created: 2019-07-22
modified: 2019-07-25
---

# Riktade acykliska grafer (DAG)

DAG är en teknik som används av exempelvis IOTA och NANO, som utlovar snabbare transaktioner. Det baseras fortfarande på kryptografi, men till skillnad från [Blockkedjor](/tekniker/blockkedjor.html) så består blocken inte av en lång kedja som alla är överens om, utan varje transaktion valideras omgående av intilliggande noder.

Alla noder behöver inte känna till alla transaktioner, så flera transaktioner kan valideras samtidigt, vilket naturligtvis ökar hastigheten. Det är då färre noder som validerar en transaktion, vilket går ut över säkerheten. Det blir problematiskt att få en enhällig överblick, men tekniken lämpar sig bra som valuta och för Internet of Things (IoT).