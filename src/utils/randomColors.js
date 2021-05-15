const Colors = [
    'pink',
    'red',
    'orange',
    'green',
    'cyan',
    'blue',
    'purple',
    'black',
    'yellow',
    'brown',
    'coral',
    'turquoise',
    'gold'
  ]

export default function randomColors() {
    return Colors[Math.floor(Math.random() * Colors.length)];
}