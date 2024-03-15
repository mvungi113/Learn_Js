const day ='Monday';

if(day == 'Monday'){
    console.log('Today is Monday!');
}else if(day == 'Tuesday'){
    console.log('Today is Tuesday!');
}else if(day == 'Wednesday'){
    console.log('Today is Wednesday!');
}else if(day == 'Thursday'){
    console.log('Today is Thursday!');
}else if(day == 'Friday'){
    console.log('Today is Friday');
}else if(day == 'Saturday'){
    console.log('Today is Saturday');
}else if(day == 'Sunday'){
    console.log('Today is Sunday!');
}else{
    console.log('That is not a day of the week!');
}


// switch case


switch(day){
    case 'Monday':
        console.log('Today is Monday!');
        break;
    case 'Tuesday':
        console.log('Today is Tuesday!');
        break;
    case 'Wednesday':
        console.log('Today is Wednesday');
        break;
    case 'Thursday':
        console.log('Today is Thursday!');
        break;
    case 'Friday':
        console.log('Today is Friday');
        break;
    case 'Saturday':
        console.log('Today is Saturday');
        break;
    case 'Sunday':
        console.log('Today is Sunday!');
        break;
    default:
        console.log('That is not a day of the week!');

}