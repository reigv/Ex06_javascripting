const car = {
    model: 'Toyota',
    year: 2020,
    color: 'red',
    licensePlate: 'ABC123',
    start: function() { console.log('Car started'); },
    stop: function() { console.log('Car stopped'); },
    drive: function() { console.log('Car is driving'); }
}

car.start(); // Car started
car.drive(); // Car is driving
car.stop(); // Car stopped