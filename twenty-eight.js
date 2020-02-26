led.enable(true)
pins.analogWritePin(AnalogPin.P8, 0)
pins.analogWritePin(AnalogPin.P12, 0)
pins.analogWritePin(AnalogPin.P16, 0)


basic.forever(() => {


    for (let i = 0; i < 1; i++) {
        led.plot(2, 2)
        led.plotBrightness(0, 0, 80)
        led.plotBrightness(1, 1, 160)
        led.plotBrightness(2, 2, 255)
        led.plotBrightness(3, 3, 160)
        led.plotBrightness(4, 4, 80)
        basic.pause(80)
        basic.clearScreen()
        led.plot(2, 2)
        pins.analogWritePin(AnalogPin.P8, 1023)
        basic.pause(50)
        pins.analogWritePin(AnalogPin.P8, 500)
    }
    for (let i = 0; i < 1; i++) {
        led.plot(2, 2)
        led.plotBrightness(2, 0, 80)
        led.plotBrightness(2, 1, 160)
        led.plotBrightness(2, 2, 255)
        led.plotBrightness(2, 3, 160)
        led.plotBrightness(2, 4, 80)
        basic.pause(80)
        basic.clearScreen()
        led.plot(2, 2)
        pins.analogWritePin(AnalogPin.P12, 1023)
        basic.pause(50)
        pins.analogWritePin(AnalogPin.P12, 500)
    }
    for (let i = 0; i < 1; i++) {
        led.plot(2, 2)
        led.plotBrightness(4, 0, 80)
        led.plotBrightness(3, 1, 160)
        led.plotBrightness(2, 2, 255)
        led.plotBrightness(1, 3, 160)
        led.plotBrightness(0, 4, 80)
        basic.pause(80)
        basic.clearScreen()
        led.plot(2, 2)
        pins.analogWritePin(AnalogPin.P16, 1023)
        basic.pause(50)
        pins.analogWritePin(AnalogPin.P16, 500)
    }
    for (let i = 0; i < 1; i++) {
        led.plot(2, 2)
        led.plotBrightness(0, 2, 80)
        led.plotBrightness(1, 2, 160)
        led.plotBrightness(2, 2, 255)
        led.plotBrightness(3, 2, 160)
        led.plotBrightness(4, 2, 80)
        basic.pause(80)
        basic.clearScreen()
        led.plot(2, 2)

    }

}) 
