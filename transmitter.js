//transmitter

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
