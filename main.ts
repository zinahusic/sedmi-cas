let vlažnost = 0
input.onPinPressed(TouchPin.P1, function () {
    if (vlažnost > 700) {
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            . . . . .
            `)
    }
})
basic.forever(function () {
    vlažnost = pins.analogReadPin(AnalogPin.P0)
})
