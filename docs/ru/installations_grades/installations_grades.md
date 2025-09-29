# {heading(Градации размеров инсталляций)[id=installations_grades]}

В {linkto(#tab_installations_grades)[text=таблице %number]} приведены градации размеров инсталляции {var(sys2)}.

{caption(Таблица {counter(table)[id=numb_tab_installations_grades]} — Градации размеров инсталляции {var(sys2)})[align=right;position=above;id=tab_installations_grades;number={const(numb_tab_installations_grades)}]}
[cols="2,1,1,1,1", options="header"]
|===
|Роль
|Мини
|Малая
|Средняя
|Крупная

|Контроллер
|1
|3
|3–9
|9–27

|Вычислительный узел
|1–10
|11–30
|31–100
|101–700

|Сетевой узел
|0
|0
|2–10
|10–30

|Узел прикладных сервисов
|0–1
|1
|3
|3

|Мониторинг и логирование
|0–1
|1
|1–3
|3–9
|===
{/caption}

<warn>

* Окончательное количество сетевых узлов зависит от требований к количеству виртуальных сетей и маршрутизаторов (не более 150 маршрутизаторов на сетевой узел).
* Количество узлов Ceph и High-IOPS Storage не рассматриваются в данной таблице, так как требования к объёмам дисковых хранилищ могут сильно отличаться в инсталляциях.
* Крупные инсталляции (более 100 ВУ) требуют детальной проработки проекта.
* Для градаций Средняя и Крупная требуется использование как минимум 25 Гб/с сетей.

</warn>

## {heading(Демо-стенд (Мини))[id=examples_of_typical_solutions_mini]}

В {linkto(#tab_examples_of_typical_solutions_mini)[text=таблице %number]} приведён пример типового решения для демо-стенда (Мини).

{caption(Таблица {counter(table)[id=numb_tab_examples_of_typical_solutions_mini]} — Демо-стенд (Мини))[align=right;position=above;id=tab_examples_of_typical_solutions_mini;number={const(numb_tab_examples_of_typical_solutions_mini)}]}
[cols="4,2,5,2,4,4", options="header"]
|===
|Роль
|Кол-во
|CPU
|Память (ГБ)
|Диски
|Сетевые интерфейсы

|Deploy
|1
|1x Intel Xeon (8 ядер)
|8
|2x 1 ТБ HDD
|1x 10 Гб/с

|Контроллер
|3
|2x Intel Xeon Gold (28 ядер)
|256
|2x 480 ГБ SSD
|4x 10 Гб/с 2x LACP

|Вычислительный узел
|3
|2x Intel Xeon Gold (28 ядер)
|1024
|2x 480 ГБ SSD
|4x 10 Гб/с 2x LACP

|Ceph
|3
|2x Intel Xeon Silver (10 ядер)
|128
|2x 480 ГБ SSD,

6x 3.84 ТБ SSD
|4x 10 Гб/с 2x LACP

|Мониторинг и логирование
|1
|2x Intel Xeon Silver (16 ядер)
|128
|2x 960 ГБ SSD
|2x 10 Гб/с LACP
|===
{/caption}

Общее количество портов (без учёта uplink):

* 10 Гб/с — 39 штук.
* 1 Гб/с — 11 штук.

Сетевое оборудование:

* Коммутатор 10 Гб/с — 24 порта — 2 штуки.
* Коммутатор 1 Гб/с — 24 порта — 1 штука.

Отдельные коммутаторы для СХД не выделяются.

## {heading(Мини-облако)[id=examples_of_typical_solutions_mini_cloud]}

В {linkto(#tab_examples_of_typical_solutions_mini_cloud)[text=таблице %number]} приведён пример типового решения для Мини-облака.

{caption(Таблица {counter(table)[id=numb_tab_examples_of_typical_solutions_mini_cloud]} — Мини-облако)[align=right;position=above;id=tab_examples_of_typical_solutions_mini_cloud;number={const(numb_tab_examples_of_typical_solutions_mini_cloud)}]}
[cols="4,2,5,2,4,4", options="header"]
|===
|Роль
|Кол-во
|CPU
|Память (ГБ)
|Диски
|Сетевые интерфейсы

|Deploy
|1
|1x Intel Xeon (8 ядер)
|8
|2x 1 ТБ HDD
|1x 10 Гб/с

|Контроллер
|3
|2x Intel Xeon Gold (28 ядер)
|256
|2x 480 ГБ SSD
|4x 10 Гб/с 2x LACP

|Вычислительный узел
|10
|2x Intel Xeon Gold (28 ядер)
|1024
|2x 480 ГБ SSD
|4x 10 Гб/с 2x LACP

|Ceph
|3
|2x Intel Xeon Silver (10 ядер)
|128
|2x 480 ГБ SSD,

6x 7.68 ТБ SSD
|4x 10 Гб/с 2x LACP

|Мониторинг и логирование
|1
|2x Intel Xeon Silver (16 ядер)
|128
|2x 1.92 ТБ SSD
|2x 10 Гб/с LACP
|===
{/caption}

Общее количество портов (без учёта uplink):

* 10 Гб/с — 67 штук (37 — для основных сетей, 40 — для сетей СХД).
* 1 Гб/с — 18 штук.

Сетевое оборудование:

* Коммутатор 10 Гб/с — 24 порта — 4 штуки (2 из них — для сетей СХД).
* Коммутатор 1 Гб/с — 24 порта — 1 штука.

## {heading(Малая инсталляция)[id=examples_of_typical_solutions_small]}

В {linkto(#tab_examples_of_typical_solutions_small)[text=таблице %number]} приведён пример типового решения Малой инсталляции.

{caption(Таблица {counter(table)[id=numb_tab_examples_of_typical_solutions_small]} — Малая инсталляция)[align=right;position=above;id=tab_examples_of_typical_solutions_small;number={const(numb_tab_examples_of_typical_solutions_small)}]}
[cols="4,2,5,2,4,4", options="header"]
|===
|Роль
|Кол-во
|CPU
|Память (ГБ)
|Диски
|Сетевые интерфейсы

|Deploy
|1
|1x Intel Xeon (8 ядер)
|8
|2x 1 ТБ HDD
|1x 10 Гб/с

|Контроллер
|3
|2x Intel Xeon Gold (28 ядер)
|512
|2x 480 ГБ SSD
|4x 10 Гб/с 2x LACP

|Вычислительный узел
|30
|2x Intel Xeon Gold (28 ядер)
|1024
|2x 480 ГБ SSD
|4x 10 Гб/с 2x LACP

|Ceph
|6
|2x Intel Xeon Silver (10 ядер)
|128
|2x 480 ГБ SSD,

6x 7.68 ТБ SSD
|4x 10 Гб/с 2x LACP

|High-IOPS
|4
|2x Intel Xeon Silver (10 ядер)
|128
|2x 480 ГБ SSD,

6x 7.68 ТБ NVMe
|4x 10 Гб/с 2x LACP

|Прикладные сервисы
|1
|2x Intel Xeon Gold (28 ядер)
|256
|2x 480 ГБ SSD,

8x 15,36 ТБ NVMe
|2x 10 Гб/с (LACP)

|Мониторинг и логирование
|1
|2x Intel Xeon Silver (16 ядер)
|128
|2x 3.84 ТБ SSD
|2x 10 Гб/с LACP
|===
{/caption}

Общее количество портов (без учёта uplink):

* 10 Гб/с — 177 штук (137 — для основных сетей, 40 — для сетей СХД).
* 1 Гб/с — 46 штук.

Сетевое оборудование:

* Коммутатор 10 Гб/с — 48 портов — 4 штуки (1 из них — для сетей СХД).
* Коммутатор 1 Гб/с — 48 портов — 1 штука.

## {heading(Средняя инсталляция)[id=examples_of_typical_solutions_average]}

В {linkto(#tab_examples_of_typical_solutions_average)[text=таблице %number]} приведён пример типового решения Средней инсталляции.

{caption(Таблица {counter(table)[id=numb_tab_examples_of_typical_solutions_average]} — Средняя инсталляция)[align=right;position=above;id=tab_examples_of_typical_solutions_average;number={const(numb_tab_examples_of_typical_solutions_average)}]}
[cols="4,2,5,2,4,4", options="header"]
|===
|Роль
|Кол-во
|CPU
|Память (ГБ)
|Диски
|Сетевые интерфейсы

|Deploy
|1
|1x Intel Xeon (8 ядер)
|8
|2x 1 ТБ HDD
|1x 10 Гб/с

|Контроллер
|9
|2x Intel Xeon Gold (28 ядер)
|512
|2x 480 ГБ SSD
|4x 25 Гб/с 2x LACP

|Вычислительный узел
|100
|2x Intel Xeon Gold (28 ядер)
|1024
|2x 480 ГБ SSD
|4x 25 Гб/с 2x LACP

|Сетевой узел
|8
|2x Intel Xeon Gold (24 ядра)
|512
|2x 480 ГБ SSD
|4x 25 Гб/с 2x LACP

|Ceph
|12
|2x Intel Xeon Gold (24 ядра)
|128
|2x 480 ГБ SSD,

6x 7.68 ТБ NVMe
|4x 25 Гб/с 2x LACP

|High-IOPS
|8
|2x Intel Xeon Silver (10 ядер)
|128
|2x 480 ГБ SSD,

6x 7.68 ТБ NVMe
|4x 25 Гб/с 2x LACP

|Прикладные сервисы
|3
|2x Intel Xeon Gold (28 ядер)
|256
|2x 480 ГБ SSD,

8x 15,36 ТБ NVMe
|2x 25 Гб/с (LACP)

|Мониторинг и логирование
|3
|2x Intel Xeon Silver (16 ядер)
|128
|2x 3.84 ТБ SSD
|2x 25 Гб/с LACP
|===
{/caption}

Общее количество портов (без учёта uplink):

* 25 Гб/с — 560 штук (480 — для основных сетей, 80 — для сетей СХД).
* 1 Гб/с — 144 штуки.

Сетевое оборудование:

* Коммутатор 25 Гб/с — 48 портов — 12 штук (2 из них — для сетей СХД).
* Коммутатор 1 Гб/с — 48 портов — 4 штуки.

## {heading(Крупная инсталляция)[id=examples_of_typical_solutions_big]}

В {linkto(#tab_examples_of_typical_solutions_big)[text=таблице %number]} приведён пример типового решения Крупной инсталляции.

{caption(Таблица {counter(table)[id=numb_tab_examples_of_typical_solutions_big]} — Крупная инсталляция)[align=right;position=above;id=tab_examples_of_typical_solutions_big;number={const(numb_tab_examples_of_typical_solutions_big)}]}
[cols="4,2,5,2,4,4", options="header"]
|===
|Роль
|Кол-во
|CPU
|Память (ГБ)
|Диски
|Сетевые интерфейсы

|Deploy
|1
|1x Intel Xeon (8 ядер)
|8
|2x 1 ТБ HDD
|1x 10 Гб/с

|Контроллер
|27
|2x Intel Xeon Gold (28 ядер)
|512
|2x 480 ГБ SSD
|4x 25 Гб/с 2x LACP

|Вычислительный узел
|300
|2x Intel Xeon Gold (28 ядер)
|1024
|2x 480 ГБ SSD
|4x 25 Гб/с 2x LACP

|Сетевой узел
|20
|2x Intel Xeon Gold (24 ядра)
|512
|2x 480 ГБ SSD
|4x 25 Гб/с 2x LACP

|Ceph
|30
|2x Intel Xeon Gold (24 ядра)
|128
|2x 480 ГБ SSD,

6x 7.68 ТБ NVMe
|4x 25 Гб/с 2x LACP

|High-IOPS
|24
|2x Intel Xeon Silver (10 ядер)
|128
|2x 480 ГБ SSD,

6x 7.68 ТБ NVMe
|4x 25 Гб/с 2x LACP

|Прикладные сервисы
|3
|2x Intel Xeon Gold (28 ядер)
|256
|2x 480 ГБ SSD,

8x 15,36 ТБ NVMe
|2x 25 Гб/с (LACP)

|Мониторинг и логирование
|6
|2x Intel Xeon Silver (16 ядер)
|128
|2x 3.84 ТБ SSD
|2x 25 Гб/с LACP
|===
{/caption}

Рекомендуется разделить {var(sys4)} на две или более зон доступности ({linkto(#tab_examples_of_typical_solutions_big_3)[text=таблица %number]}).

{caption(Таблица {counter(table)[id=numb_tab_examples_of_typical_solutions_big_3]} — Крупная инсталляция с разделением на 3 зоны доступности и распределённым управляющим слоем)[align=right;position=above;id=tab_examples_of_typical_solutions_big_3;number={const(numb_tab_examples_of_typical_solutions_big_3)}]}
[cols="4,2,5,2,4,4", options="header"]
|===
|Роль
|Кол-во
|CPU
|Память (ГБ)
|Диски
|Сетевые интерфейсы

|Deploy
|1
|1x Intel Xeon (8 ядер)
|8
|2x 1 ТБ HDD
|1x 10 Гб/с

6+|**Зона доступности 1**

|Контроллер
|9
|2x Intel Xeon Gold (28 ядер)
|512
|2x 480 ГБ SSD
|4x 25 Гб/с 2x LACP

|Вычислительный узел
|100
|2x Intel Xeon Gold (28 ядер)
|1024
|2x 480 ГБ SSD
|4x 25 Гб/с 2x LACP

|Сетевой узел
|8
|2x Intel Xeon Gold (24 ядра)
|512
|2x 480 ГБ SSD
|4x 25 Гб/с 2x LACP

|Ceph
|12
|2x Intel Xeon Gold (24 ядра)
|128
|2x 480 ГБ SSD,

6x 7.68 ТБ NVMe
|4x 25 Гб/с 2x LACP

|High-IOPS
|8
|2x Intel Xeon Silver (10 ядер)
|128
|2x 480 ГБ SSD,

6x 7.68 ТБ NVMe
|4x 25 Гб/с 2x LACP

|Прикладные сервисы
|3
|2x Intel Xeon Gold (28 ядер)
|256
|2x 480 ГБ SSD,

8x 15,36 ТБ NVMe
|2x 25 Гб/с (LACP)

|Мониторинг и логирование
|2
|2x Intel Xeon Silver (16 ядер)
|128
|2x 3.84 ТБ SSD
|2x 25 Гб/с LACP

6+|**Зона доступности 2**

|Контроллер
|9
|2x Intel Xeon Gold (28 ядер)
|512
|2x 480 ГБ SSD
|4x 25 Гб/с 2x LACP

|Вычислительный узел
|100
|2x Intel Xeon Gold (28 ядер)
|1024
|2x 480 ГБ SSD
|4x 25 Гб/с 2x LACP

|Сетевой узел
|8
|2x Intel Xeon Gold (24 ядра)
|512
|2x 480 ГБ SSD
|4x 25 Гб/с 2x LACP

|Ceph
|12
|2x Intel Xeon Gold (24 ядра)
|128
|2x 480 ГБ SSD,

6x 7.68 ТБ NVMe
|4x 25 Гб/с 2x LACP

|High-IOPS
|8
|2x Intel Xeon Silver (10 ядер)
|128
|2x 480 ГБ SSD,

6x 7.68 ТБ NVMe
|4x 25 Гб/с 2x LACP

|Мониторинг и логирование
|2
|2x Intel Xeon Silver (16 ядер)
|128
|2x 3.84 ТБ SSD
|2x 25 Гб/с LACP

6+|**Зона доступности 3**

|Контроллер
|9
|2x Intel Xeon Gold (28 ядер)
|512
|2x 480 ГБ SSD
|4x 25 Гб/с 2x LACP

|Вычислительный узел
|100
|2x Intel Xeon Gold (28 ядер)
|1024
|2x 480 ГБ SSD
|4x 25 Гб/с 2x LACP

|Сетевой узел
|8
|2x Intel Xeon Gold (24 ядра)
|512
|2x 480 ГБ SSD
|4x 25 Гб/с 2x LACP

|Ceph
|12
|2x Intel Xeon Gold (24 ядра)
|128
|2x 480 ГБ SSD,

6x 7.68 ТБ NVMe
|4x 25 Гб/с 2x LACP

|High-IOPS
|8
|2x Intel Xeon Silver (10 ядер)
|128
|2x 480 ГБ SSD,

6x 7.68 ТБ NVMe
|4x 25 Гб/с 2x LACP

|Мониторинг и логирование
|2
|2x Intel Xeon Silver (16 ядер)
|128
|2x 3.84 ТБ SSD
|2x 25 Гб/с LACP
|===
{/caption}

Общее количество портов (без учёта uplink):

* Зона доступности 1 + deploy узел:

   * 25 Гб/с — 558 штук (478 — для основных сетей, 80 — для сетей СХД).
   * 1 Гб/с — 143 штуки.

* Зона доступности 2:

   * 25 Гб/с — 552 штуки (472 — для основных сетей, 80 — для сетей СХД).
   * 1 Гб/с — 139 штук.

* Зона доступности 3:

   * 25 Гб/с — 552 штуки (472 — для основных сетей, 80 — для сетей СХД).
   * 1 Гб/с — 139 штук.

Сетевое оборудование:

* Зона доступности 1:

   * Коммутатор 25 Гб/с — 48 портов — 12 штук (2 из них — для сетей СХД).
   * Коммутатор 1 Гб/с — 48 портов — 3 штуки.

* Зона доступности 2:

   * Коммутатор 25 Гб/с — 48 портов — 12 штук (2 из них — для сетей СХД).
   * Коммутатор 1 Гб/с — 48 портов — 3 штуки.

* Зона доступности 3:

   * Коммутатор 25 Гб/с — 48 портов — 12 штук (2 из них — для сетей СХД).
   * Коммутатор 1 Гб/с — 48 портов — 3 штуки.

