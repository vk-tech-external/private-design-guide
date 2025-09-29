# {heading(Расчёт характеристик инсталляции)[id=installation_characteristics_calculation]}

## {heading(Пример расчёта)[id=installation_calculation_example]}

### {heading(Входные данные)[id=installation_input_data]}

Требуется рассчитать частную инсталляцию вычислительной мощности, приведённую в {linkto(#tab_private_installation_configuration)[text=таблице %number]}.

{caption(Таблица {counter(table)[id=numb_tab_private_installation_configuration]} — Конфигурация частной инсталляции)[align=right;position=above;id=tab_private_installation_configuration;number={const(numb_tab_private_installation_configuration)}]}
[cols="2,1", options="header"]
|===
|Параметр
|Минимальные требования

|vCPU
|10000

|RAM
|80 ТБ

|Хранилище
|240 ТБ

|Хранилище повышенной производительности
|60 ТБ

|Количество ЦОД
|3

|Запас ёмкости ЦОД 1
|50%

|Запас ёмкости ЦОД 2
|50%

|Запас ёмкости ЦОД 3
|15%
|===
{/caption}

30% вычислительных узлов должны быть оснащены процессорами высокой производительности с коэффициентом переподписки 1. Для остальных ВУ выбран коэффициент переподписки 2.

Связь между ЦОД реализована независимыми оптическими линиями связи, длина каждой из которых составляет менее 40 км. Пропускная способность каждой линии — 40 Гбит/с, максимальная задержка каждой линии — 5 мс.

### {heading(Выбор методов разделения {var(sys2)})[id=installation_choice_of_separation_methods]}

Исходя из наличия ЦОД и каналов связи между ними методом сегментации будут зоны доступности. Вычислительные ресурсы должны быть распределены между ЦОД в следующих пропорциях:

* ЦОД 1 и 2 — по 45 %.
* ЦОД 3 — 10 %.

Исходя из требований к двум вариантам переподписки потребуется 2 типа агрегатов ВУ в каждой зоне доступности.

### {heading(Расчёты серверов рабочих нагрузок)[id=installation_server_workload_calculations]}

#### {heading(Расчёты количества ВУ)[id=installation_calculations_of_the_number_of_compute_nodes]}

Для агрегата с переподпиской 2 выбран сервер с двумя процессорами Intel Xeon Gold 6338 (32 ядра).

Для агрегата с высокопроизводительным процессором выбран сервер с двумя процессорами Intel Xeon Platinum 8380 (40 ядер).

Объём памяти во всех серверах — 1024 ГБ.

**Расчёт количества ВУ с высокопроизводительными процессорами**

1. Расчёт по CPU:

   {formula(Q_{sCPU} = 0.3 * \frac {Q_{reg}}{Q_{CPU} \ast O_{CPU} \ast E_{CPU}} = 0.3 * \frac {10000}{2 \ast 40 \ast 1 \ast 0,9} \approx 42)}.

1. Расчёт по RAM:

   {formula(Q_{sRAM} = 0.3 * \frac {V_{reg}}{(V_{RAM} - 16) \ast E_{RAM}} = 0.3 * \frac {80 \ast 1024}{(1024 -16) \ast 0,9} \approx 28)}.

Из двух полученных значений необходимо выбрать большее, а именно 42.

Распределение серверов по ЦОД:

* ЦОД 1 и 2 — по 19 серверов.
* ЦОД 3 — 4 сервера.

Итоговая спецификация сервера приведена в {linkto(#tab_final_server_specification1)[text=таблице %number]}.

{caption(Таблица {counter(table)[id=numb_tab_final_server_specification1]} — Итоговая спецификация сервера)[align=right;position=above;id=tab_final_server_specification1;number={const(numb_tab_final_server_specification1)}]}
[cols="1,3", options="header"]
|===
|Параметр
|Минимальные требования

|Процессор
|2x Intel Xeon Platinum 8380

|Оперативная память
|1024 ГБ

|Хранилище
|2x 480 ГБ SSD

|Сеть
|2x 25 Гбит/сек (2x LACP)

Выделенный интерфейс управления (IPMI, BMC, iDRAC, iLO и т.п.)
|===
{/caption}

**Расчёт количества ВУ с коэффициентом переподписки CPU 2**

1. Расчёт по CPU:

   {formula(Q_{sCPU} = 0.7 * \frac {Q_{reg}}{Q_{CPU} \ast O_{CPU} \ast E_{CPU}} = 0.7 * \frac {10000}{2 \ast 32 \ast 2 \ast 0,9} \approx 61)}.

1. Расчёт по RAM:

   {formula(Q_{sRAM} = 0.7 * \frac {V_{reg}}{(V_{RAM} - 16) \ast E_{RAM}} = 0.7 * \frac {80 \ast 1024}{(1024 -16) \ast 0,9} \approx 64)}.

Из двух полученных значений необходимо выбрать большее, а именно 64.

Распределение серверов по ЦОД:

* ЦОД 1 и 2 — по 29 серверов.
* ЦОД 3 — 6 серверов.

Итоговая спецификация сервера приведена в {linkto(#tab_final_server_specification2)[text=таблице %number]}.

{caption(Таблица {counter(table)[id=numb_tab_final_server_specification2]} — Итоговая спецификация сервера)[align=right;position=above;id=tab_final_server_specification2;number={const(numb_tab_final_server_specification2)}]}
[cols="1,3", options="header"]
|===
|Параметр
|Минимальные требования

|Процессор
|2x Intel Xeon Gold 6338

|Оперативная память
|1024 ГБ

|Хранилище
|2x 480 ГБ SSD

|Сеть
|2x 25 Гбит/сек (2x LACP)

Выделенный интерфейс управления (IPMI, BMC, iDRAC, iLO и т.п.)
|===
{/caption}

Суммарное количество ВУ — 106. Их итоговое распределение по ЦОД:

* ЦОД 1 и 2 — по 48 серверов.
* ЦОД 3 — 10 серверов.

#### {heading(Расчёт серверов Ceph)[id=installation_calculations_for_ceph]}

**Расчёт параметров одного сервера**

Для серверов Ceph выбрано шасси с 8 дисками SSD NVMe объёмом 7.68 ТБ, пропускная способность диска — 2500 МБайт/сек.

Количество OSD на 1 NVMe диск — 2, количество OSD на сервер: {formula(Q_{sOSD} = {2 \ast 8} = 16)}.

Пропускная способность массива дисков одного сервера: {formula(T_{SD} = {0.9 \ast 8 \ast 2500} = 18000)} Мбайт/сек. При профиле нагрузки 30% «на запись» и 70% «на чтение», пропускная способность массива дисков «на чтение» будет равна 12600 Мбайт/сек.

Требуемое количество ядер CPU на сервер: {formula(Q_{CPU} = {16 * 2 + 2 + 2 + 8} = 44)}. Наиболее подходящим процессором под рассчитанные требования является 2x Intel Xeon Gold 5318 (24 ядра), итого 48 ядер.

Требуемый объём оперативной памяти: {formula(V_{RAM} = {16 * 4 + 5 + 2 + 4} = 75)} ГБ. Наиболее подходящим объёмом памяти под рассчитанные требования является 128 ГБ.

Для четырёх сетевых карт с пропускной способностью 25 Гбит/сек, пропускная способность сети Ceph Internal: {formula(T_{int} \approx 0.85 * \frac {4 \ast 25 \ast 10^9}{8 \ast 2^{20}} = 10133)}. Полученное значение отличается от пропускной способности «на чтение» приблизительно на 20%. Можно допустить, что данное отличие будет оказывать влияние только в моменты пиковой нагрузки.

Итоговая спецификация сервера приведена в {linkto(#tab_final_server_specification3)[text=таблице %number]}.

{caption(Таблица {counter(table)[id=numb_tab_final_server_specification3]} — Итоговая спецификация сервера)[align=right;position=above;id=tab_final_server_specification3;number={const(numb_tab_final_server_specification3)}]}
[cols="1,3", options="header"]
|===
|Параметр
|Минимальные требования

|Процессор
|2x Intel Xeon Gold 5318

|Оперативная память
|128 ГБ

|Хранилище
|2x 480 ГБ SSD — ОС

8x 7,68 ТБ SSD NVMe

|Сеть
|2x 25 Гбит/сек (2x LACP) — Ceph External

4x 25 Гбит/сек (2x LACP) — Ceph Internal

Выделенный интерфейс управления (IPMI, BMC, iDRAC, iLO и т.п.)
|===
{/caption}

**Расчёт количества серверов и кластеров**

Объём одного диска в TiB:

{formula(V_D = \frac {7.68 \ast 10^{12}}{2^{40}} \approx 6.99)}.

Требуемое количество серверов Ceph (без учёта требований к количеству серверов в кластере):

{formula(N_{sru} = \frac {240 * 3}{8 \ast 6.99 \ast 0.7} \approx 19)}.

Предполагаемое распределение серверов по ЦОД (без учёта требований к количеству серверов в кластере):

* ЦОД 1 и 2 — по 8,5 серверов.
* ЦОД 3 — 1,9 сервера.

Исходя из требований к количеству серверов в кластере Ceph распределение кластеров по ЦОД будет следующим:

* ЦОД 1 и 2 — по одному кластеру из 9 узлов.
* ЦОД 3 — кластер из 3 узлов.

Ёмкость кластера из 9 узлов:

{formula(V_{cluster} = 0.7 * \frac {8 \ast 6.99 \ast 9}{3} \approx 117)} TiB.

Ёмкость кластера из 3 узлов:

{formula(V_{cluster} = 0.7 * \frac {8 \ast 6.99 \ast 3}{3} \approx 39)} TiB.

Суммарная ёмкость всех кластеров Ceph: 117+117+39=273 TiB.

#### {heading(Расчёт количества High-IOPS Storage)[id=installation_calculations_for_high_iops]}

Для серверов High-IOPS Storage выбрано шасси с 8 дисками SSD NVMe объёмом 7,68 ТБ, пропускная способность диска — 2500 МБайт/сек.

Требуемое количество серверов: {formula(N_{sru} = \frac {60 \ast 2}{8 \ast 6.99 \ast 0.8} \approx 3)}.

Минимальное количество серверов в зоне доступности — 2. Таким образом в каждой зоне доступности необходимо разместить по 2 сервера High-IOPS Storage.

Пропускная способность массива дисков: {formula(T_{SD} = 0.9 * \frac {8 \ast 2500}{2} = 9000)} МБайт/сек.

Минимальное количество ядер CPU на сервер: {formula(Q_{CPU} = \frac {9000}{50000} + 8 \approx 8)}. Наиболее подходящим процессором под рассчитанные требования является 2x Intel Xeon Silver 4310 (12 ядер).

Для четырёх сетевых карт с пропускной способностью 25 Гбит/сек, пропускная способность сети: {formula(T = 0.85 * \frac {4 \ast 25 \ast 10^9}{8 \ast 2^20} = 10133)}. Данной пропускной способности достаточно, чтобы обрабатывать трафик массива дисков сервера.

Итоговая спецификация сервера приведена в {linkto(#tab_final_server_specification4)[text=таблице %number]}.

{caption(Таблица {counter(table)[id=numb_tab_final_server_specification4]} — Итоговая спецификация сервера)[align=right;position=above;id=tab_final_server_specification4;number={const(numb_tab_final_server_specification4)}]}
[cols="1,3", options="header"]
|===
|Параметр
|Минимальные требования

|Процессор
|2x Intel Xeon Silver 4310

|Оперативная память
|128 ГБ

|Хранилище
|2x 480 ГБ SSD — ОС

8x 7,68 ТБ SSD NVMe

|Сеть
|4x 25 Гбит/сек (2x LACP)

Выделенный интерфейс управления (IPMI, BMC, iDRAC, iLO и т.п.)
|===
{/caption}

### {heading(Расчёт количества управляющих узлов)[id=installation_calculation_of_the_number_of_control_nodes]}

#### {heading(Контроллеры)[id=installation_controllers]}

Исходя из количества ВУ минимальное рекомендованное количество контроллеров — 3. Раскладка узлов контроллера по зонам доступности — по 3 узла на зону.

Распределение компонентов по контроллерам в каждой зоне доступности:

* Контроллер 1: HAProxy, Nova, Cinder, Neutron, иные компоненты, не перечисленные в данном списке и не размещаемые в служебном кластере Kubernetes.
* Контроллер 2: etcd, служебные БД.
* Контроллер 3: служебный кластер Kubernetes.

Итоговая спецификация контроллеров 1 и 3 приведена в {linkto(#tab_final_specification_of_controller_1_and_3)[text=таблице %number]}.

{caption(Таблица {counter(table)[id=numb_tab_final_specification_of_controller_1_and_3]} — Итоговая спецификация контроллера 1 и 3)[align=right;position=above;id=tab_final_specification_of_controller_1_and_3;number={const(numb_tab_final_specification_of_controller_1_and_3)}]}
[cols="1,3", options="header"]
|===
|Параметр
|Минимальные требования

|Процессор
|2x Intel Xeon Gold (минимум 28 ядер)

|Оперативная память
|512 ГБ

|Хранилище
|2x 480 ГБ SSD — для ОС

|Сеть
|4x 25 Гбит/сек (2x LACP)

Выделенный интерфейс управления (IPMI, BMC, iDRAC, iLO и т.п.)
|===
{/caption}

Итоговая спецификация контроллера 2 приведена в {linkto(#tab_final_specification_of_controller_2)[text=таблице %number]}.

{caption(Таблица {counter(table)[id=numb_tab_final_specification_of_controller_2]} — Итоговая спецификация контроллера 2)[align=right;position=above;id=tab_final_specification_of_controller_2;number={const(numb_tab_final_specification_of_controller_2)}]}
[cols="1,3", options="header"]
|===
|Параметр
|Минимальные требования

|Процессор
|2x Intel Xeon Gold 6348

|Оперативная память
|512 ГБ

|Хранилище
|2x 480 ГБ SSD — для ОС

2x 3,84 ТБ NVMe — для контроллеров под размещение служебных БД компонентов

|Сеть
|4x 25 Гбит/сек (2x LACP)

Выделенный интерфейс управления (IPMI, BMC, iDRAC, iLO и т.п.)
|===
{/caption}

#### {heading(Узел мониторинга и логирования)[id=installation_monitoring_and_logging_nodes]}

Итоговая спецификация сервера приведена в {linkto(#tab_final_server_specification5)[text=таблице %number]}.

{caption(Таблица {counter(table)[id=numb_tab_final_server_specification5]} — Итоговая спецификация сервера)[align=right;position=above;id=tab_final_server_specification5;number={const(numb_tab_final_server_specification5)}]}
[cols="1,3", options="header"]
|===
|Параметр
|Минимальные требования

|Процессор
|2x Intel Xeon Silver 4210R (16 ядер)

|Оперативная память
|128 ГБ

|Хранилище
|2x 480 ГБ SSD — для ОС

2x 3,84 ТБ NVMe — под размещение БД компонентов

|Сеть
|2x 25 Гбит/сек (2x LACP)

Выделенный интерфейс управления (IPMI, BMC, iDRAC, iLO и т.п.)
|===
{/caption}

При количестве ВУ больше 100 рекомендованное количество узлов мониторинга и логирования — 2.

#### {heading(Узел развёртывания/репозитория)[id=installation_deployment_repository_node]}

Итоговая спецификация сервера приведена в {linkto(#tab_final_server_specification6)[text=таблице %number]}.

{caption(Таблица {counter(table)[id=numb_tab_final_server_specification6]} — Итоговая спецификация сервера)[align=right;position=above;id=tab_final_server_specification6;number={const(numb_tab_final_server_specification6)}]}
[cols="1,3", options="header"]
|===
|Параметр
|Минимальные требования

|Процессор
|2x Intel Xeon Silver 4210R (16 ядер)

|Оперативная память
|16 ГБ

|Хранилище
|2x 960 ГБ SSD

|Сеть
|2x 25 Гбит/сек (2x LACP)

Выделенный интерфейс управления (IPMI, BMC, iDRAC, iLO и т.п.)
|===
{/caption}

### {heading(Определение портового бюджета и требований к сетевой фабрике)[id=installation_defining_port_budget_and_network_fabric_requirements]}

#### {heading(Портовый бюджет)[id=installation_port_budget]}

Итоговые требования к портовой ёмкости по ЦОД приведены в {linkto(#tab_final_requirements_for_data_center_port_capacity)[text=таблице %number]}.

{caption(Таблица {counter(table)[id=numb_tab_final_requirements_for_data_center_port_capacity]} — Итоговые требования к портовой ёмкости по ЦОД)[align=right;position=above;id=tab_final_requirements_for_data_center_port_capacity;number={const(numb_tab_final_requirements_for_data_center_port_capacity)}]}
[cols="3,2,2,2", options="header"]
|===
|Скорость портов коммутаторов
|Используется LACP
|Количество портов
|Примечания

|25 ГБит/сек
|Да
|176
|ЦОД 1

|1 Гбит/сек
|Нет
|130
|ЦОД 1 (IPMI/OOB)

|25 ГБит/сек
|Да
|170
|ЦОД 2

|1 Гбит/сек
|Нет
|124
|ЦОД 2 (IPMI/OOB)

|25 ГБит/сек
|Да
|58
|ЦОД 3

|1 Гбит/сек
|Нет
|36
|ЦОД 3 (IPMI/OOB)
|===
{/caption}

#### {heading(Сетевая фабрика)[id=installation_network_factory]}

Для сетевой фабрики планируется использовать оборудование с характеристиками, приведёнными в {linkto(#tab_final_requirements_for_data_center_port_capacity2)[text=таблице %number]}.

{caption(Таблица {counter(table)[id=numb_tab_final_requirements_for_data_center_port_capacity2]} — Итоговые требования к портовой ёмкости по ЦОД)[align=right;position=above;id=tab_final_requirements_for_data_center_port_capacity2;number={const(numb_tab_final_requirements_for_data_center_port_capacity2)}]}
[cols="1,1,1,1,1",hrows=2]
|===
.2+| <!--- В ТАБЛИЦЕ НЕ РАБОТАЮТ ПУСТЫЕ ЯЧЕЙКИ  --->
2+|**Downlink**
2+|**Uplink**

|**Скорость, ГБит/сек**
|**Количество**
|**Скорость, ГБит/сек**
|**Количество**

|Leaf
|25
|48
|100
|6

|Spine
|100
|48
|—
|—

|Border Leaf
|100
|4
|25
|16

|Firewall
|25
|4
|25
|4

|Datacenter Gateway
|25
|4
|25
|4

|IPMI & OOB
|1
|48
|25
|2
|===
{/caption}

Итоговые требования к оборудованию фабрики приведены в {linkto(#tab_final_requirements_for_factory_equipment)[text=таблице %number]}.

{caption(Таблица {counter(table)[id=numb_tab_final_requirements_for_factory_equipment]} — Итоговые требования к оборудованию фабрики)[align=right;position=above;id=tab_final_requirements_for_factory_equipment;number={const(numb_tab_final_requirements_for_factory_equipment)}]}
[cols="2,1,1,1,3", options="header"]
|===
|<!--- В ТАБЛИЦЕ НЕ РАБОТАЮТ ПУСТЫЕ ЯЧЕЙКИ -->
|ЦОД 1
|ЦОД 2
|ЦОД 3
|Требования к технологиям

|Leaf
|4
|4
|2
|BGP, EVPN, VxLAN, MC-LAG

|Spine
|2
|2
|2
|BGP, EVPN

|Border Leaf
|2
|2
|2
|BGP, EVPN, VxLAN

|Firewall
|2
|2
|2
|BGP

|Datacenter Gateway
|2
|2
|2
|L3VPN, EVPN

|IPMI & OOB
|4
|4
|1
|VLAN
|===
{/caption}

#### {heading(Список необходимых сетей)[id=installation_list_of_required_networks]}

Список необходимых сетей приведён в {linkto(#tab_list_of_networks)[text=таблице %number]}.

{caption(Таблица {counter(table)[id=numb_tab_list_of_networks]} — Список сетей)[align=right;position=above;id=tab_list_of_networks;number={const(numb_tab_list_of_networks)}]}
[cols="3,2,2,2,2", options="header"]
|===
|Название сети
|Номер VLAN
|Адрес подсети
|Размерность сети
|Адрес шлюза

|Public API Loopback
.4+|Не применимо
|10.10.100.0
|/29
.4+|Не применимо

|Private API Loopback
|10.10.100.8
|/29

.2+|K8s Internal
|Pods — 172.16.0.0
|/23

|Services — 172.16.2.0
|/26

|Cloud External
|200
|10.20.0.0
|/24
|10.20.0.1

5+|**ЦОД 1**

|Management
|111
|10.11.1.0
|/24
|10.11.1.1

|Public API Transport
|112
|10.11.2.0
|/29
|10.11.2.1

|Cloud Tunnel
|113
|10.11.3.0
|/24
|10.11.3.1

|Сeph External
|114
|10.11.4.0
|/24
|10.11.4.1

|Сeph Internal
|115
|10.11.5.0
|/24
|Не применимо

|IPMI
|116
|10.11.6.0
|/24
|10.11.6.1

|OOB
|117
|10.11.7.0
|/24
|10.11.7.1

5+|**ЦОД 2**

|Management
|121
|10.12.1.0
|/24
|10.12.1.1

|Public API Transport
|122
|10.12.2.0
|/29
|10.12.2.1

|Cloud Tunnel
|123
|10.12.3.0
|/24
|10.12.3.1

|Сeph External
|124
|10.12.4.0
|/24
|10.12.4.1

|Сeph Internal
|125
|10.12.5.0
|/24
|Не применимо

|IPMI
|126
|10.12.6.0
|/24
|10.12.6.1

|OOB
|127
|10.12.7.0
|/24
|10.12.7.1

5+|**ЦОД 3**

|Management
|131
|10.13.1.0
|/24
|10.13.1.1

|Public API Transport
|132
|10.13.2.0
|/29
|10.13.2.1

|Cloud Tunnel
|133
|10.13.3.0
|/24
|10.13.3.1

|Сeph External
|134
|10.13.4.0
|/24
|10.13.4.1

|Сeph Internal
|135
|10.13.5.0
|/24
|Не применимо

|IPMI
|136
|10.13.6.0
|/24
|10.13.6.1

|OOB
|137
|10.13.7.0
|/24
|10.13.7.1
|===
{/caption}

## {heading(Определение итоговых характеристик {var(sys2)})[id=installation_determination_of_the_final_characteristics]}

Итоговые характеристики {var(sys2)} приведены в {linkto(#tab_final_characteristics)[text=таблице %number]}.

{caption(Таблица {counter(table)[id=numb_tab_final_characteristics]} — Итоговые характеристики {var(sys2)})[align=right;position=above;id=tab_final_characteristics;number={const(numb_tab_final_characteristics)}]}
[cols="3,1,1,1,1", options="header"]
|===
|<!--- В ТАБЛИЦЕ НЕ РАБОТАЮТ ПУСТЫЕ ЯЧЕЙКИ  -->
|ЦОД 1
|ЦОД 2
|ЦОД 3
|Суммарно

|vCPU высокой производительности
|1368
|1368
|288
|3024

|RAM узлов высокой производительности, ГБ
|16,97
|16,97
|3,57
|37,51

|vCPU
|3340
|3340
|691
|7371

|RAM, ГБ
|25,89
|25,89
|5,36
|57,14

|Емкость Ceph, TiB
|117
|117
|39
|273

|Ёмкость High-IOPS Storage, TiB
|55,9
|55,9
|55,9
|167,7
|===
{/caption}