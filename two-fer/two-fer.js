export const twoFer = function(name, noName){
    var name;
    var noName = 'you';

    if(name){
        return `One for ${name}, one for me.`;
    } else {
        return `One for ${noName}, one for me.`
    }
};