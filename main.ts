basic.forever(function () {
    if (input.rotation(Rotation.Pitch) < 5 && input.rotation(Rotation.Pitch) > -5 && (input.rotation(Rotation.Roll) < 5 && input.rotation(Rotation.Roll) > -5)) {
        basic.showIcon(IconNames.Yes)
        music.ringTone(523)
    } else {
        basic.showIcon(IconNames.No)
        music.ringTone(0)
    }
})
