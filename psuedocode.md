# ALARM CLOCK #

## ABOUT ##

- The alarm clock will need two time factors, the current time and the time of the alarm
- Assume the clock is in a 12 hour format (for now)
- User should be able to manually enter alarm time

### Potential Features ###

- Toggle option betweeen 12 hour and 24 hour time formats
- Snooze button which silences alarm for 5 minutes at a time
- Add Month, Day, and Year


## INIT: Setting Variables and Functions ##

### Variables ###

date = current date
currentTime = current time
futureTime = scheduled alarm time
alarm = alarms user
snooze = Silences Alarm for 5 minutes
offButton = Turns off alarm

### Functions ###

If currentTime === futureTime
    PLAY alarm

If snooze clicked
    Silence Alarm for 5 minutes

If offButton clicked
    Turns off Alarm