## Test case considering only two attriubutes, no normalization

## Chart
chart = "
    4 | B                   \n
    3 |                J    \n
    2 |    D     G        L \n
    1 |       F             \n
    0 | A     E  1     I    \n
    -1|                     \n
    -2|    C     H          \n
    -3|                K    \n
    -4|_____________________\n
        1  2  3  4  5  6  7 "

## Test Subjects
subject1 =
  attr_a: 4
  attr_b: 0

# subject2 =
  # attr_a: 3
  # attr_b: 0

# subject3 =
  # attr_a: 7
  # attr_b: 4

## Objects
objects = [
    label: 'A'
    attr_a: 1
    attr_b: 0
  ,
    label: 'B'
    attr_a: 1
    attr_b: 4
  ,
    label: 'C'
    attr_a: 2
    attr_b: -2
  ,
    label: 'D'
    attr_a: 2
    # attr_b: 2
  ,
    label: 'E'
    attr_a: 3
    attr_b: 0
  ,
    label: 'F'
    attr_a: 3
    attr_b: 1
  ,
    label: 'G'
    attr_a: 4
    attr_b: 2
  ,
    label: 'H'
    attr_a: 4
    attr_b: -2
  ,
    label: 'I'
    attr_a: 6
    attr_b: 0
  ,
    label: 'J'
    attr_a: 6
    attr_b: 3
  ,
    label: 'K'
    attr_a: 6
    attr_b: -3
  ,
    label: 'L'
    attr_a: 7
    attr_b: 2
]

module.exports =
  subject1: subject1
  # subject2: subject2
  # subject3: subject3
  objects: objects
  chart: chart