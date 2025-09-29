# {appendix-heading(Список доступных API)[id=app_available_api; position=prefix]}

{caption(Таблица {counter(table)[id=numb_tab_available_api]} — Список доступных API)[align=right;position=above;number={const(numb_tab_available_api)}]}
[cols="1,3,2,2", options="header"]
|===
|№
|Система
|Протокол
|Порты

|1
|Веб-интерфейсы облачной платформы, репозиторий пакетов
|TCP
|80, 443

|2
|Репозиторий образов Docker
|TCP
|5010

|3
|Консоль NoVNC
|TCP
|6080

|4
|Эндпойнт Barbican
|TCP
|9311

|5
|Эндпойнт Cinder
|TCP
|8776

|6
|Эндпойнт Glance
|TCP
|9292

|7
|Эндпойнт Heat
|TCP
|8004

|8
|Эндпойнт Keystone
|TCP
|5000

|9
|Эндпойнт Keystone
|TCP
|35357

|10
|Эндпойнт Manila
|TCP
|8786

|11
|Эндпойнт Neutron
|TCP
|9696

|12
|Эндпойнт Nova
|TCP
|8774

|13
|Эндпойнт Octavia
|TCP
|9876

|14
|Эндпойнт Trove
|TCP
|8779

|15
|Эндпойнт Magnum
|TCP
|9511

|16
|Эндпойнт Sahara
|TCP
|8386

|17
|Портал просмотра журналов событий (OpenSearch)
|TCP
|80, 443

|18
|Портал мониторинга (Zabbix)
|TCP
|80, 443
|===
{/caption}

<warn>

Список активных эндпойнтов конкретной инсталляции можно посмотреть в консоли при помощи следующих команд OpenStack CLI:

* Все эндпойнты (внутренние, административные, публичные):

   ```bash
   openstack endpoint list
   ```
* Только публичные эндпойнты:

   ```bash
   openstack endpoint list |grep public
   ```

</warn>