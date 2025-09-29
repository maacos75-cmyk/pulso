input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
    }
    basic.showNumber(gatorParticle.heartbeat(HeartbeatType.BPM))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(gatorParticle.color(LEDToRead.Infrared))
})
let ECG = 0
basic.showString("ECG")
basic.forever(function () {
    gatorParticle.begin()
})
basic.forever(function () {
    ECG = pins.analogReadPin(AnalogReadWritePin.P2)
    serial.writeValue("ECG", ECG)
})
