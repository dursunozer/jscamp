
//1.question


function findPrime(...numbers){
    let primeNumbers = []
    let nonPrimeNumbers = []

    for(let i = 0; i<numbers.length; i++){

        if(numbers[i] < 2){
            
            nonPrimeNumbers.push(numbers[i])

        }else if(numbers[i] == 2 || numbers[i] == 3){
            
            primeNumbers.push(numbers[i])

        }else{

            let number = numbers[i]

            for(let x = 2; x <= Math.sqrt(number); x++){
                
                if(number % x == 0){
                    
                    nonPrimeNumbers.push(number)
                    break;
                }else if(number % x != 0 && Math.floor(Math.sqrt(number)) == x){
                
                    primeNumbers.push(number)
                    
                }
            }
        }
        
    }

    console.log("Asal Sayılar :" + primeNumbers) 
    console.log("Asal Olmayan Sayılar :" + nonPrimeNumbers)
}

findPrime(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30)

// 4 1000'e kadarki tüm asal sayıları listeleyen programı yazınız

function findPrimeTo1000(callback){
    let nums = []

    for(let i = 0; i<1000; i++){
        nums.push(i)
        
    }
    
    callback(...nums)
}
findPrimeTo1000(findPrime)  

// 2.question
//Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız
//bölenleri bulma, bölenleri toplama ve arkadaş sayıları tespit etme olarak üç fonksiyona ayrıldı

function numberDivisor(number){
    let numberDivisors = []
    for(let i = 0; i < number; i++){
        if(number % i == 0){
            numberDivisors.push(i)
        }
    }

    return numberDivisors;
}

function numberSum(numbers){
    let total = numbers.reduce(((total, amount) =>{
        return total + amount
    }))
    return total
}

function isFriendlyNumber(...numbers){
    let hash = {}
    for(let i = 0; i < numbers.length; i++){
        let number = numbers[i]
        let numDivisons = numberDivisor(number) 
        let total = numberSum(numDivisons)      
        hash[number] = total                    

        if(total in hash){
            
            return [hash[number],number]
            
        }
    }

    
}

console.log(isFriendlyNumber(220,284))
console.log(isFriendlyNumber(17296,18416))



//! -----------------------



// 3.question
//1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız

function perfectNumbers(){
    const numbers = [...Array(1000).keys()]
    
    let perfectNumbersArray = []

    
    numbers.map((number)=>{

        let numDivision = numberDivisor(number)
        
        if(numDivision.length > 1){
            
            let divisionTotal = numberSum(numDivision)
            
            if(divisionTotal == number){

                perfectNumbersArray.push(number)
            }
        }
        
    })

    console.log(...perfectNumbersArray)

}
perfectNumbers()
