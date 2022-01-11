//  "use strict";

// let hasCertificat = false;

// const passExam = true;

// if(passExam) hasCertificat = true;
// if(hasCertificat) console.log("wow!");

// const interface = "po";
//    console.log(interface);

// const package = "ss";
//    console.log(package);










// странно ведет себя иф илсе **()
// Test Data: Jack weight 79 kg, height 1.70 m. Mike weighs 91 kg and his height is 1.93 m.
//first person
// const jack = {
//    name : 'Jack',
//    lastName: 'White',
//    weight: 79,  //** 9 не работает 50 работает
//    height: 1.70,
//    calcBmi: function(){
//        this.bodyMassIndex = (this.weight/(this.height**2)).toFixed(1);
//        // console.log(this)
//        return this.bodyMassIndex   
//    }

// };

// // second person
// const mike = {
//    name : 'Mike',
//    lastName: 'Black',
//    weight: 91,   //** 191 работает, 911 не работает
//    height: 1.93,
//    calcBmi: function(){
//        this.bodyMassIndex = (this.weight/(this.height**2)).toFixed(1);
//        // console.log(this)
//        return this.bodyMassIndex   
//    }

// };
// console.log(jack.calcBmi());
// // console.log(jack.bodyMassIndex);

// console.log(mike.calcBmi());


// if(mike.bodyMassIndex> jack.bodyMassIndex){
//    console.log(`${mike.name} ${mike.lastName} BMI (${mike.bodyMassIndex}) is higher than ${jack.name} ${jack.lastName} BMI (${jack.bodyMassIndex})`);
//    // console.log('Mike more');
//    console.log(`Jack `+ jack.bodyMassIndex);
//    console.log(`Mike `+ mike.bodyMassIndex);
// }else if(mike.bodyMassIndex< jack.bodyMassIndex){
//    console.log(`${jack.name} ${jack.lastName} BMI (${jack.bodyMassIndex}) is higher than ${mike.name} ${mike.lastName} BMI (${mike.bodyMassIndex})`);
//    // console.log('Jack more');
//    console.log(`Jack `+ jack.bodyMassIndex);
//    console.log(`Mike `+ mike.bodyMassIndex);
// } else{
//    console.log('BMI are equal ')

//};

// // console.log(`${jack.name} ${jack.lastName} BMI (${jack.bodyMassIndex}) is higher than ${mike.name} ${mike.lastName} BMI (${mike.bodyMassIndex})`);
