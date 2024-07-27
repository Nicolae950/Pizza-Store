//const pizzas = ["Bolognese Pizza", "Carbonara Pizza", "Hawaiian Pizza", "Margerita Pizza", "MeatFeast Pizza",
//    "Mushroom Pizza", "Pepperoni Pizza", "Seafood Pizza", "Vegetarian Pizza"];

var pizzas = JSON.parse(sessionStorage.getItem('pizzas'));

const patterns = ["image-bg-bolognese", "image-bg-carbonara", "image-bg-hawaiian", "image-bg-margerita", "image-bg-meatfeast",
    "image-bg-mushroom", "image-bg-pepperoni", "image-bg-seafood", "image-bg-vegetarian"];

const patternForDOM = '<defs><pattern id="image-bg-bolognese" patternUnits="userSpaceOnUse" x="0" y="0" width="300" height="300"><image width="300" height="300" xlink:href="/images/Patterns/Bolognese.png"></image></pattern><pattern id="image-bg-carbonara" patternUnits="userSpaceOnUse" x="0" y="0" width="300" height="300"><image width="300" height="300" xlink:href="/images/Patterns/Carbonara.png"></image></pattern><pattern id="image-bg-hawaiian" patternUnits="userSpaceOnUse" x="0" y="0" width="300" height="300"><image width="300" height="300" xlink:href="/images/Patterns/Hawaiian.png"></image></pattern><pattern id="image-bg-margerita" patternUnits="userSpaceOnUse" x="0" y="0" width="300" height="300"><image width="300" height="300" xlink:href="/images/Patterns/Margerita.png"></image></pattern><pattern id="image-bg-meatfeast" patternUnits="userSpaceOnUse" x="0" y="0" width="300" height="300"><image width="300" height="300" xlink:href="/images/Patterns/MeatFeast.png"></image></pattern><pattern id="image-bg-mushroom" patternUnits="userSpaceOnUse" x="0" y="0" width="300" height="300"><image width="300" height="300" xlink:href="/images/Patterns/Mushroom.png"></image></pattern><pattern id="image-bg-pepperoni" patternUnits="userSpaceOnUse" x="0" y="0" width="300" height="300"><image width="300" height="300" xlink:href="/images/Patterns/Pepperoni.png"></image></pattern><pattern id="image-bg-seafood" patternUnits="userSpaceOnUse" x="0" y="0" width="300" height="300"><image width="300" height="300" xlink:href="/images/Patterns/Seafood.png"></image></pattern><pattern id="image-bg-vegetarian" patternUnits="userSpaceOnUse" x="0" y="0" width="300" height="300"><image width="300" height="300" xlink:href="/images/Patterns/Vegetarian.png"></image></pattern></defs>';

const slices_4_shapes = [
    '"M 150.76 0.764 C 232.264 1.576 298.252 67.12 299.485 148.484 L 151.518 148.484 L 151.518 0.007"',
    '"M 151.518 299.232 C 232.727 298.012 298.262 232.585 299.485 151.515 L 151.518 151.515 L 151.518 299.991"',
    '"M 148.483 299.232 C 67.275 298.012 1.737 232.585 0.517 151.515 L 148.483 151.515 L 148.483 299.991"',
    '"M 148.483 0.764 C 67.275 1.984 1.737 67.412 0.517 148.484 L 148.483 148.484 L 148.483 0.007"'
];

const slices_6_shapes = [
    '"M 150.479 0.561 C 203.378 0.561 252.315 28.525 279.073 74.041 L 151.223 147.733 L 151.223 0.503"',
    '"M 279.829 76.459 L 151.978 149.997 L 279.829 223.689 C 307.537 176.478 304.514 115.46 279.829 76.459 Z"',
    '"M 150.48 299.487 C 203.432 299.487 252.398 271.429 279.073 225.803 L 151.223 152.264 L 151.223 299.495"',
    '"M 149.702 299.489 C 96.787 299.489 47.862 271.426 21.252 225.803 L 148.951 152.264 L 148.951 299.495"',
    '"M 20.494 76.156 L 148.194 149.997 L 20.494 223.538 C -5.159 182.994 -7.138 120.847 20.494 76.156 Z"',
    '"M 149.703 0.506 C 96.787 0.506 47.862 28.571 21.252 74.192 L 148.951 147.733 L 148.951 0.503"'
];

const slices_8_shapes = [
    '"M 150.398 0.517 C 189.569 0.619 227.135 16.091 255.016 43.614 L 151.134 147.353 L 151.134 0.501"',
    '"M 256.45 45.047 L 152.266 149.015 L 299.483 148.864 C 299.029 115.654 287.668 76.95 256.45 45.047 Z"',
    '"M 256.45 254.947 L 152.266 151.129 L 299.483 151.129 C 298.779 186.047 287.584 222.501 256.45 254.947 Z"',
    '"M 150.388 299.488 C 189.526 299.387 227.065 283.935 254.94 256.459 L 151.134 152.79 L 151.134 299.494"',
    '"M 149.604 299.475 C 110.506 299.373 73.006 283.959 45.139 256.532 L 148.87 152.79 L 148.87 299.494"',
    '"M 0.519 151.129 L 147.736 151.129 L 43.554 255.024 C 20.178 231.268 0.91 195.053 0.519 151.129 Z"',
    '"M 0.519 148.864 L 147.736 149.015 L 43.554 45.047 C 23.411 65.692 1.805 98.775 0.519 148.864 Z"',
    '"M 149.608 0.509 C 110.47 0.612 72.934 16.059 45.062 43.537 L 148.87 147.353 L 148.87 0.501"'
];