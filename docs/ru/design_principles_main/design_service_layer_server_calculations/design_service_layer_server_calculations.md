# {heading(Расчёты серверов слоя прикладных сервисов)[id=design_service_layer_server_calculations]}

На серверах слоя прикладных сервисов размещаются кластеры БД VictoriaMetrics и ClickHouse, кластер Kafka. Для сервера с ролью `evh` необходимо предусмотреть дисковое хранилище для БД.

Базовая конфигурация сервера приведена в {linkto(#tab_design_service_layer_server_calculations)[text=таблице %number]}.

{caption(Таблица {counter(table)[id=numb_tab_design_service_layer_server_calculations]} — Базовая конфигурация сервера)[align=right;position=above;id=tab_design_service_layer_server_calculations;number={const(numb_tab_design_service_layer_server_calculations)}]}
[cols="1,3", options="header"]
|===
|Параметр
|Минимальные требования

|Процессор
|2x Intel Xeon Gold (минимум 28 ядер)

|Оперативная память
|256 ГБ

|Хранилище
|2x 480 ГБ SSD — для ОС

8x 15,36 ТБ NVMe — для размещения БД компонентов

|Сеть
|2x 25 Гб/с (LACP)

Выделенный интерфейс управления (IPMI,BMC, iDRAC, iLO и т. п.)
|===
{/caption}