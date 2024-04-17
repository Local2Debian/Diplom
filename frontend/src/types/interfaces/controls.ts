export enum Position {
    TOP = 'top',
    TOP_LEFT = 'top left',
    TOP_RIGHT = 'top right',
    RIGHT = 'right',
    RIGHT_TOP = 'right top',
    RIGHT_BOTTOM = 'right bottom',
    LEFT = 'left',
    LEFT_TOP = 'left top',
    LEFT_BOTTOM = 'left bottom',
    BOTTOM = 'bottom',
    BOTTOM_LEFT = 'bottom left',
    BOTTOM_RIGHT = 'bottom right'
}

export enum Orientation {
    HORIZONTAL = 'horizontal',
    VERTICAL = 'vertical'
}

export interface ControlConfig {
    position: Position,
    orientation: Orientation
    control: any
}