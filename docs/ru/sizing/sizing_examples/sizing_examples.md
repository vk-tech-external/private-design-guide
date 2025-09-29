# {heading(Примеры сайзинга типовых решений)[id=sizing_examples]}

## {heading(Тестовый/демонстрационный стенд)[id=sizing_test_stand]}

{caption(Таблица {counter(table)[id=numb_tab_test_stand]} — Тестовый/демонстрационный стенд)[align=right;position=above;id=tab_test_stand;number={const(numb_tab_test_stand)}]}
[cols="1,3,1,2,1,2,2", options="header"]
|===
|№
|Роль
|Кол-во
|CPU
|RAM (ГБ)
|Storage
|Сетевые интерфейсы

|1
|Deploy
|1
|1x Intel Xeon E-2314
|8
|2x 1 Тбайт HDD
|1x10Gb

|2
|Controlplane
|3
|2x Intel Xeon Silver 4210R
|256
|2x 480 Гбайт SSD
|4x10 Gb 2хLACP

|3
|Compute
|3
|2x Intel Xeon Gold 6238R
|1024
|2x 480 Гбайт SSD
|4x10Gb 2хLACP

|4
|Ceph
|3
|2x Intel Xeon Silver 4210R
|128
|2x 480 Гбайт SSD, 6x 3.84 Тбайт SSD
|4x10Gb 2хLACP

|5
|Route Server (RS)
|2
|1x Intel Xeon E-2314
|8
|2x 480 Гбайт SSD
|2x10Gb LACP

|6
|Monitoring Logging
|1
|2x Intel Xeon Silver 4210R
|128
|2x 960 Гбайт SSD
|2x10Gb LACP
|===
{/caption}

Общее число портов (без учета аплинков):

* 10 Гбит/с — 43 шт.
* 1 Гбит/с — 13 шт.

Сетевое оборудование:

* Коммутатор 10 Гбит/с — 24 порта — 2 шт.
* Коммутатор 1 Гбит/с — 24 порта — 1 шт.
* Отдельные коммутаторы для СХД не выделяются.

## {heading(Тестовый/демонстрационный стенд (ВМ))[id=sizing_test_stand_vm]}

{caption(Таблица {counter(table)[id=numb_tab_test_stand_vm]} — Тестовый/демонстрационный стенд (ВМ))[align=right;position=above;id=tab_test_stand_vm;number={const(numb_tab_test_stand_vm)}]}
[cols="1,3,1,2,1,2,2", options="header"]
|===
|№
|Роль
|Кол-во
|CPU
|RAM (ГБ)
|Storage
|Сетевые интерфейсы

|1
|Deploy
|1
|2 vCPU
|8
|1 Тбайт vHDD
|10Gb

|2
|Controlplane
|3
|24 vCPU
|64
|480 Гбайт vSSD
|10Gb

|3
|Compute
|3
|32 vCPU
|512
|480 Гбайт vSSD
|10Gb

|4
|Ceph
|3
|8 vCPU
|64
|480 Гбайт vSSD, 4 Тбайт vSSD
|10Gb

|5
|Route Server (RS)
|2
|2 vCPU
|8
|480 Гбайт vSSD
|10Gb

|6
|Monitoring Logging
|1
|12 vCPU
|128
|1 Тбайт vSSD
|10Gb
|===
{/caption}

Используется виртуализированное сетевое оборудование

## {heading(Мини-облако (10 гипервизоров))[id=sizing_mini_cloud]}

{caption(Таблица {counter(table)[id=numb_tab_mini_cloud]} — Мини-облако)[align=right;position=above;id=tab_mini_cloud;number={const(numb_tab_mini_cloud)}]}
[cols="1,3,1,2,1,2,2", options="header"]
|===
|№
|Роль
|Кол-во
|CPU
|RAM (ГБ)
|Storage
|Сетевые интерфейсы

|1
|Deploy
|1
|1x Intel Xeon E-2314
|8
|2x 1 Тбайт HDD
|1x10Gb

|2
|Controlplane
|3
|2x Intel Xeon Silver 4210R
|256
|2x 480 Гбайт SSD
|4x10 Gb 2хLACP

|3
|Compute
|10
|2x Intel Xeon Gold 6238R
|1024
|2x 480 Гбайт SSD
|4x10Gb 2хLACP

|4
|Ceph
|3
|2x Intel Xeon Silver 4210R
|128
|2x 480 Гбайт SSD, 6x 7.68 Тбайт SSD
|4x10Gb 2хLACP

|5
|Route Server (RS)
|2
|1x Intel Xeon E-2314
|8
|2x 480 Гбайт SSD
|2x10Gb LACP

|6
|Monitoring Logging
|1
|2x Intel Xeon Silver 4210R
|128
|2x 1.92 Тбайт SSD
|2x10Gb LACP
|===
{/caption}

Общее число портов (без учета аплинков):

* 10 Гбит/с — 71 шт. (33 для основных сетей, 38 для сетей СХД).
* 1 Гбит/с — 20 шт.

Сетевое оборудование:

* Коммутатор 10 Гбит/с — 24 порта — 4 шт. (из них 2 для сетей СХД).
* Коммутатор 1 Гбит/с — 24 порта — 1 шт.

## {heading(Малая инсталляция (30 гипервизоров))[id=sizing_mini_installation]}

{caption(Таблица {counter(table)[id=numb_tab_mini_installation]} — Малая инсталляция)[align=right;position=above;id=tab_mini_installation;number={const(numb_tab_mini_installation)}]}
[cols="1,3,1,2,1,2,2", options="header"]
|===
|№
|Роль
|Кол-во
|CPU
|RAM (ГБ)
|Storage
|Сетевые интерфейсы

|1
|Deploy
|1
|1x Intel Xeon E-2314
|8
|2x 1 Тбайт HDD
|1x 10Gb

|2
|Controlplane
|9
|2x Intel Xeon Gold 6238R
|512
|2x 480 Гбайт SSD
|4x10 Gb 2хLACP

|3
|Compute
|30
|2x Intel Xeon Gold 6238R
|1024
|2x 480 Гбайт SSD
|4x10Gb 2хLACP

|4
|Ceph
|6
|2x Intel Xeon Silver 4210R
|128
|2x 480 Гбайт SSD, 6x 7.68 Тбайт SSD
|4x10Gb 2хLACP

|5
|High-IOPS
|2
|2x Intel Xeon Silver 4210R
|128
|2x 480 Гбайт SSD, 6x 3.84 ТБ NVMe
|2x10Gb LACP

|6
|Route Server (RS)
|2
|1x Intel Xeon E-2314
|8
|2x 480 Гбайт SSD
|2x10Gb LACP

|7
|Monitoring Logging
|2
|2x Intel Xeon Silver 4210R
|128
|2x 3.84 Тбайт SSD
|2x10Gb LACP
|===
{/caption}

Общее число портов (без учета аплинков):

* 10 Гбит/с — 193 шт. (87 для основных сетей, 106 для сетей СХД).
* 1 Гбит/с — 52 шт.

Сетевое оборудование:

* Коммутатор 10 Гбит/с — 48 портов — 6 шт. (из 4 них для сетей СХД).
* Коммутатор 1 Гбит/с — 48 портов — 2 шт.

## {heading(Средняя инсталляция (100 гипервизоров))[id=sizing_average_installation]}

{caption(Таблица {counter(table)[id=numb_tab_average_installation]} — Средняя инсталляция)[align=right;position=above;id=tab_average_installation;number={const(numb_tab_average_installation)}]}
[cols="1,3,1,2,1,2,2", options="header"]
|===
|№
|Роль
|Кол-во
|CPU
|RAM (ГБ)
|Storage
|Сетевые интерфейсы

|1
|Deploy
|1
|1x Intel Xeon E-2314
|8
|2x 1 Тбайт HDD
|1x 10Gb

|2
|Controlplane
|9
|2x Intel Xeon Gold 6238R
|512
|2x 480 Гбайт SSD
|4x25 Gb 2хLACP

|3
|Network
|9
|2x Intel Xeon Gold 5220R
|512
|2x 480 Гбайт SSD
|2x25 Gb 2хLACP

|4
|Compute
|100
|2x Intel Xeon Gold 6238R
|1024
|2x 480 Гбайт SSD
|4x25Gb 2хLACP

|5
|Ceph
|12
|2x Intel Xeon Silver 4210R
|128
|2x 480 Гбайт SSD, 6x 7.68 Тбайт SSD
|4x25Gb 2хLACP

|6
|High-IOPS
|6
|2x Intel Xeon Silver 4210R
|128
|2x 480 Гбайт SSD, 6x 3.84 ТБ NVMe
|2x25Gb LACP

|7
|Route Server (RS)
|2
|1x Intel Xeon E-2314
|8
|2x 480 Гбайт SSD
|2x25Gb LACP

|8
|Monitoring Logging
|3
|2x Intel Xeon Silver 4210R
|128
|2x 3.84 Тбайт SSD
|2x25Gb LACP
|===
{/caption}

Общее число портов (без учета аплинков):

* 25 Гбит/с — 525 шт. (247 для основных сетей, 278 для сетей СХД).
* 1 Гбит/с — 142 шт.

Сетевое оборудование:

* Коммутатор 25 Гбит/с — 48 портов — 14 шт. (из 8 них для сетей СХД).
* Коммутатор 1 Гбит/с — 48 портов — 4 шт.

## {heading(Крупная инсталляция (300 гипервизоров))[id=sizing_large_installation]}

{caption(Таблица {counter(table)[id=numb_tab_large_installation]} — Крупная инсталляция)[align=right;position=above;id=tab_large_installation;number={const(numb_tab_large_installation)}]}
[cols="1,3,1,2,1,2,2", options="header"]
|===
|№
|Роль
|Кол-во
|CPU
|RAM (ГБ)
|Storage
|Сетевые интерфейсы

|1
|Deploy
|1
|1x Intel Xeon E-2314
|8
|2x 1 Тбайт HDD
|1x 10Gb

|2
|Controlplane
|27
|2x Intel Xeon Gold 6238R
|512
|4x 960 Гбайт NVMe
|4x25 Gb 2хLACP

|3
|Network
|21
|2x Intel Xeon Gold 5220R
|512
|2x 480 Гбайт SSD
|2x25 Gb 2хLACP

|4
|Compute
|300
|2x Intel Xeon Gold 6238R
|1024
|2x 480 Гбайт SSD
|4x25Gb 2хLACP

|5
|Ceph
|30
|2x Intel Xeon Silver 4210R
|128
|2x 480 Гбайт SSD, 6x 7.68 Тбайт SSD
|4x25Gb 2хLACP

|6
|High-IOPS
|9
|2x Intel Xeon Silver 4210R
|128
|2x 480 Гбайт SSD, 6x 3.84 ТБ NVMe
|2x25Gb LACP

|7
|Route Server (RS)
|2
|1x Intel Xeon E-2314
|8
|2x 480 Гбайт SSD
|2x25Gb LACP

|8
|Monitoring Logging
|6
|2x Intel Xeon Silver 6238R
|256
|2x 3.84 Тбайт SSD
|2x25Gb LACP
|===
{/caption}

* Рекомендуется разделить {var(sys4)} на 2 или более зон доступности.

{caption(Таблица {counter(table)[id=numb_tab_large_installation_two_zone]} — Крупная инсталляция с двумя зонами доступности)[align=right;position=above;id=tab_large_installation_two_zone;number={const(numb_tab_large_installation_two_zone)}]}
[cols="1,3,1,2,1,2,2", options="header"]
|===
|№
|Роль
|Кол-во
|CPU
|RAM (ГБ)
|Storage
|Сетевые интерфейсы

|1
|Deploy
|1
|1x Intel Xeon E-2314
|8
|2x 1 Тбайт HDD
|1x 10Gb

|2
|Controlplane
|27
|2x Intel Xeon Gold 6238R
|512
|4x 960 Гбайт NVMe
|4x25 Gb 2хLACP

|3
|Network
|21
|2x Intel Xeon Gold 5220R
|512
|2x 480 Гбайт SSD
|2x25 Gb 2хLACP

|4
|Route Server (RS)
|2
|1x Intel Xeon E-2314
|8
|2x 480 Гбайт SSD
|2x25Gb LACP

|5
|Monitoring Logging
|2
|2x Intel Xeon Gold 6238R
|256
|2x 3.84 Тбайт SSD
|2x25Gb LACP

7+|Зона доступности 1

|6
|Compute
|180
|2x Intel Xeon Gold 6238R
|1024
|2x 480 Гбайт SSD
|4x25Gb 2хLACP

|7
|Ceph
|18
|2x Intel Xeon Silver 4210R
|128
|2x 480 Гбайт SSD, 6x 7.68 Тбайт SSD
|4x25Gb 2хLACP

|8
|High-IOPS
|6
|2x Intel Xeon Silver 4210R
|128
|2x 480 Гбайт SSD, 6x 3.84 ТБ NVMe
|2x25Gb LACP

7+|Зона доступности 2

|9
|Compute
|120
|2x Intel Xeon Gold 6238R
|1024
|2x 480 Гбайт SSD
|4x25Gb 2хLACP

|10
|Ceph
|12
|2x Intel Xeon Silver 4210R
|128
|2x 480 Гбайт SSD, 6x 7.68 Тбайт SSD
|4x25Gb 2хLACP

|11
|High-IOPS
|3
|2x Intel Xeon Silver 4210R
|128
|2x 480 Гбайт SSD, 6x 3.84 ТБ NVMe
|2x25Gb LACP
|===
{/caption}

Общее число портов (без учета аплинков):

* Зона 1 + контур управления

   * 25 Гбит/с — 963 шт. (465 для основных сетей, 498 для сетей СХД).
   * 1 Гбит/с — 257 шт.

* Зона 2

   * 25 Гбит/с — 534 шт. (240 для основных сетей, 294 для сетей СХД).
   * 1 Гбит/с — 145 шт.

Сетевое оборудование:

* Зона 1 + контур управления

   * Коммутатор 25 Гбит/с — 48 портов — 22 шт. (из 12 них  для сетей СХД).
   * Коммутатор 1 Гбит/с — 48 портов — 6 шт.

* Зона 2

   * Коммутатор 25 Гбит/с — 48 портов — 14 шт. (из 8 них  для сетей СХД).
   * Коммутатор 1 Гбит/с — 48 портов — 4 шт.

Итого:

* Коммутатор 25 Гбит/с — 48 портов — 36 шт. (из 20 них  для сетей СХД).
* Коммутатор 1 Гбит/с — 48 портов — 10 шт.
