﻿function rotateChars(obj) { // rotates characters alternately by a random amount    obj.paragraphs[0].composer = "Adobe Japanese Paragraph Composer"    for (var i = 0; i < obj.characters.length; i++) {        var rotationJitter = Math.floor(Math.random() * 35) // between 0 and 35 degrees of randomness        if (i % 2 == 0) {            obj.characters[i].characterRotation = rotationJitter        }        else {            obj.characters[i].characterRotation = rotationJitter + 325         }    }    obj.paragraphs[0].tracking = -200 // guesstimate new tracking to compensate for Japanese paragraph composer}rotateChars(app.selection[0])