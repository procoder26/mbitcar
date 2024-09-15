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
