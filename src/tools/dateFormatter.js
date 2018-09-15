export default (day, month, year) => {
    let wordMonth;

    switch (month) {
        case 0:
            wordMonth = "January";
            break;
        case 1:
            wordMonth = "February";
            break;
        case 2:
            wordMonth = "March";
            break;
        case 3:
            wordMonth = "April";
            break;
        case 4:
            wordMonth = "May";
            break;
        case 5:
            wordMonth = "June";
            break;
        case 6:
            wordMonth = "July";
            break;
        case 7:
            wordMonth = "August";
            break;
        case 8:
            wordMonth = "September";
            break;
        case 9:
            wordMonth = "October";
            break;
        case 10:
            wordMonth = "November";
            break;
        case 11:
            wordMonth = "December";
            break;
        default:
            break;
    }

    return `${wordMonth} ${day}, ${year}`;
}