const input = process.argv[2];
checkArmstrongNumber(input)

function checkArmstrongNumber(input) {
    let orginalNumber = parseInt(input);
    const numLength = (orginalNumber + "").length;
    let temp = orginalNumber;
    let sum = 0;
    
    while(temp > 0) {
        let reminder = temp % 10;
        sum += reminder ** numLength;
        temp = parseInt(temp / 10)
    }
    
    if (sum == orginalNumber) {
        console.log(`${orginalNumber} is an Armstrong Number`);
    } else {
        console.log(`${orginalNumber} is not an Armstrong Number`);
    }
}