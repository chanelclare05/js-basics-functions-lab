// Code your solution in this file!

const hq = 42

function distanceFromHqInBlocks(location) {
    //     if (n >= hq) {
    //     return (n-hq)
    //     } else {
    //         return (hq-n)
    // }
    return Math.abs(location - hq)
}

function distanceFromHqInFeet(location) {
    // if (n >= 43) {
    // return ((n-43)+ 1)*264
    // } else {
    //     return ((43-n)-1)*264
    // }
    return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(origin, destination) {
    // if (origin >= destination) 
    // return (origin-destination)*264
    // } else {
    //     return (destination-origin)*264
    // }
    return Math.abs(destination - origin) * 264
}


function calculatesFarePrice(origin, destination) {
    // if (n  {
    // return 0
    // } else {
    //     return (a-n)*264
    const distance = distanceTravelledInFeet(origin, destination)
    if (distance <= 400) {
        return 0
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02
    } else if (distance > 2000 && distance<= 2500) { 
        return (25) 
    } else {
        return ("cannot travel that far")
    }
}

// <= 400 = 0 
// 400 < distance <= 2000 = 2c
// distance < 2000 $25
// > 2500 wont work 


// describe('calculatesFarePrice(start, destination)', function() {
//     it('gives customers a free sample', function() {
//       expect(calculatesFarePrice(43, 44)).to.equal(0);
//     });

//     it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
//       // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
//       expect(calculatesFarePrice(34, 32)).to.equal(2.56);
//     });

//     it('charges 25 dollars for a distance over 2000 feet', function() {
//       expect(calculatesFarePrice(50, 58)).to.equal(25);
//     });

//     it('does not allow rides over 2500 feet', function() {
//       expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
//     });
//   });
// });
