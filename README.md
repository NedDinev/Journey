# Journey

⦁	Пътешествие
<br>Странно, но повечето хора си плануват отрано почивката. Млад програмист разполага с определен бюджет и свободно време в даден сезон. Напишете функция, която да получава бюджета и сезона и на изхода да изкарва, къде ще почива програмистът и колко ще похарчи.

<br>Бюджета определя дестинацията, а сезона определя колко от бюджета ще изхарчи. Ако е лято ще почива на къмпинг, а зимата в хотел. Ако е в Европа, независимо от сезона ще почива в хотел. Всеки къмпинг или хотел, според дестинацията, има собствена цена която отговаря на даден процент от бюджета: 
<br>

⦁	При 100лв. или по-малко – някъде в България
<br>⦁	Лято – 30% от бюджета
<br>⦁	Зима – 70% от бюджета
<br>⦁	При 1000лв. или по малко – някъде на Балканите
<br>⦁	Лято – 40% от бюджета
<br>⦁	Зима – 80% от бюджета
<br>⦁	При повече от 1000лв. – някъде из Европа
<br>⦁	При пътуване из Европа, независимо от сезона ще похарчи 90% от бюджета.
<br>

Вход
<br>Приемат се 2 аргумента :
<br>⦁	Първи– Бюджет, реално число в интервала [10.00...5000.00].
<br>⦁	Втори–  Един от двата възможни сезона: "summer" или "winter"
<br>

Изход
<br>На конзолата трябва да се отпечатат два реда.
<br>⦁	Първи ред – "Somewhere in [дестинация]" измежду "Bulgaria", "Balkans" и "Europe"
<br>⦁	Втори ред – "{Вид почивка} – {Похарчена сума}"
<br>⦁	Почивката може да е между "Camp" и "Hotel"
<br>⦁	Сумата трябва да е закръглена с точност до вторият знак след запетаята.

| вход | изход |
| ------------- | ------------- |
| (["50", "summer"])  | Somewhere in Bulgaria  |
| | Camp - 15.00 |

| вход | изход |
| ------------- | ------------- |
| (["75", "winter"])  | Somewhere in Bulgaria  |
| | Hotel - 52.50 |


| вход | изход |
| ------------- | ------------- |
| (["1500", "summer"]) | Somewhere in Europe  |
| | Hotel - 1350.00 |




	


