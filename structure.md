# Structure

## Components

### Timer

- Name/title at top

- Editable fields for hours & minutes

- Control button (see component definition)

- Clear indicator of being finished

  - Changes color or something

  - Alarm goes off

- Delete button that removes the timer from the page

  - Stops timer if it's currently running

### Control button

- Controllable button text via a member function

  - "Start" if timer isn't running & has full time
  
      - (I.e., after reset or after initial setup)

  - "Stop" if timer is running

  - "Reset" if timer has been stopped

### Add timer button

- Display in bottom right

- Pops up a "create new timer" dialog when clicked

### New timer dialog

- Can show/hide instance with a member function

- Has a "cancel" button that closes the dialog

- Has a "create" button that creates the timer

  - Validate inputs before creating

- Has editable inputs

  - Hours

  - Minutes

  - Name/title

## Eventual features

- Drag and drop timers to reorder them

- Ability to pin a timer to keep it at the top of the list
