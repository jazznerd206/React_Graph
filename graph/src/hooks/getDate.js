export const ohShitWhatUpItsDatDate = () => {
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let day = d.getDay();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    let d2 = d;
    let year2 = d2.getFullYear();
    let month2 = d2.getMonth() - 1;
    let day2 = d2.getDay();
    if (month2.length < 2) month2 = '0' + month2;
    if (day2.length < 2) day2 = '0' + day2;
    let to = year + '-' + month + '-' + day;
    let from = year2 + '-' + month2 + '-' + day2;
    let dateArray = [to, from];
    return dateArray;
}