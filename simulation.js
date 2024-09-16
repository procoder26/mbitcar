
//USE WHEN LOOKING AT MAKECODE SIMULATIONS

//receiver

radio.setGroup(181)
servos.P0.setAngle(90)
servos.P1.setAngle(90)
let speed = 20

radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        servos.P1.setAngle(90 + speed)
    }
    if (receivedNumber == 2) {
        servos.P1.setAngle(90 - speed)
    }
    if (receivedNumber == 3) {
        servos.P1.setAngle(90)
    }
})

radio.onReceivedValue(function (name, value) {
    if (name == "rotate") {
        servos.P0.setAngle(value)
    }
})

//transmitter

//DOWNLOAD SERVO EXTENSION BEFORE RUN ON BOTH MICROBITS
//HAVE FUN!
radio.setGroup(181)

basic.forever(function () {
    radio.sendValue("rotate", pins.map(
        input.acceleration(Dimension.X),
        -1023,
        1023,
        50,
        130
    ))
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    }
    else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
    }
    else {
        radio.sendNumber(3)
    }
})
