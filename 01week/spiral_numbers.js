function spiralOrder(matrix) {
    // your code here...
    let total_elements = matrix.length * matrix[0].length;
    let origin_x = 0;
    let origin_y = 0;
    let width = matrix[0].length - 1;
    let height = matrix.length - 1;
    let output = [];

    while (output.length < total_elements) {
        //right
        for (let step = origin_x; step <= width; step++) {
            if (output.length >= total_elements) {
                return output;
            };
            output.push(matrix[origin_x][step]);
            //console logs for debugging
            // console.log(output);
        };

        //down
        for (let step = origin_x + 1; step <= height; step++) {
            if (output.length >= total_elements) {
                return output;
            };
            output.push(matrix[step][width]);
            //console logs for debugging
            // console.log(output);
        };
        //left
        console.log('width =' + width);
        for (let step = width - 1; step >= origin_y; step--) {
            if (output.length >= total_elements) {
                return output;
            };
            output.push(matrix[height][step]);
            //console logs for debugging
            // console.log(output);
        };
        //up
        for (let step = height - 1; step >= origin_x + 1; step--) {
            if (output.length >= total_elements) {
                return output;
            };
            output.push(matrix[step][origin_y]);
            //console logs for debugging
            //console.log(output);
        };
        if (output.length >= total_elements) {
            return output;
        };
        //set up width, height, and origin to spiral inward again
        console.log('setting new parameters');
        width -= 1;
        height -= 1;
        origin_x += 1;
        origin_y += 1;
    };
}


matrix = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[9, 10, 11, 12]]


console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]
