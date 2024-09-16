//USE WHEN LOOKING AT MAKECODE SIMULATIONS

//receiver

radio.setGroup(181)
servos.P0.setAngle(90)
servos.P1.setAngle(90)
let speed = 20

radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        servos.P1.setAngle(90+speed)
    }
    if (receivedNumber == 2) {
        servos.P1.setAngle(90-speed)
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

input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})

basic.forever(function () {
    radio.sendValue("rotate", pins.map(
    input.acceleration(Dimension.X),
    -1023,
    1023,
    30,
    150
    ))
})
