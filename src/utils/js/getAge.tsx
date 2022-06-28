export function getAge(date:string) {
    let now = new Date(); //Текущя дата
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
    let dob = new Date(date); //Дата рождения
    let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году
    let age; //Возраст

    age = today.getFullYear() - dob.getFullYear();

    if (today < dobnow) {
        age = age-1;
    }

    return age || 0;
}
