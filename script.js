
const userYear = prompt('Рік народження?');
const userCity = prompt('Місце проживання?');
const userSport = prompt('Улюблений вид спорту?');

if (userYear == null || userYear == '') {
    alert(`'Шкода, що Ви не захотіли ввести рік народження'`);
}

if (userCity == null || userCity == '') {
    alert(`'Шкода, що Ви не захотіли ввести місце проживання'`);
}

if (userSport == null || userSport == '') {
    alert(`'Шкода, що Ви не захотіли ввести вид спорту'`);
}

switch (userCity) {
    case 'Лондон':
        alert(`Вік: ${2024 - userYear} років\n'Ти живеш у столиці Великої Британії'\n'Улюблений вид спорту: ${userSport}'`);
        break;
    case 'Вашингтон':
        alert(`Вік: ${2024 - userYear} років\n'Ти живеш у столиці США'\n'Улюблений вид спорту: ${userSport}'`);
        break
    case 'Київ':
        alert(`Вік: ${2024 - userYear} років\n'Ти живеш у столиці України'\n'Улюблений вид спорту: ${userSport}'`);
        break;
    default:
        alert(`Вік: ${2024 - userYear} років\n'Ти живеш у місті ${userCity}\n'Улюблений вид спорту: ${userSport}''`);
}

const userSport1 = prompt('Види спорту\nФутбол: Ліонел Мессі\nТеніс: Рафаель Надаль\nБокc: Олександр Усик');

switch (userSport1) {
    case 'Футбол':
        alert(`'Круто! Хочеш стати Ліонелем Мессі?'`);
        break;
    case 'Теніс':
        alert(`'Круто! Хочеш стати Рафаелем Надалем?'`);
        break;
    case 'Бокс':
        alert(`'Круто! Хочеш стати Олександром Усиком?'`);
        break;
    default:
        alert('default');
}