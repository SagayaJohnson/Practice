class Animal{
    alive =true

    eat(){
        console.log(`This is ${this.name} is eating`);

    }
    sleep(){
        console.log(`This is${this.name}is sleeping`)
    }
}
    class Rabbit extends Animal{
        name="rabbit";
         
        run(){
            console.log(`This ${this.name} is running`)

        }
    }
    class Fish extends Animal{
      name ="fish";

      swim(){
         console.log(`This ${this.name} is swimming`)

      }
    }
    class Eagle extends Animal{
        name="eagle";

        fly(){
            console.log(`This is ${this.name} is flying`)
        }
    }
    const rabbit= new Rabbit;
    const fish= new Fish;
    const eagle= new Eagle;

    console.log(rabbit.alive)
    rabbit.eat();
    rabbit.sleep()
    rabbit.run()

    
// class Human{
//       lover="Sunil";

//       amala(){
//         console.log (`This is ${this.name} wife`)

//       }

// }
// class Johnson extends Human{
//      name="johnson";


//      johnson(){
//          console.log (`Amala is ${this.name} is second wife`)
//     }
     
  
// }

// const johnson= new Johnson;


// console.log(Johnson.lover)
// johnson.johnson();
// johnson.amala();


