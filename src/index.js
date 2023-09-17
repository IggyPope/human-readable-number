module.exports = function toReadable(number) {
    const digits = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const thousands = ["", "thousand", "million", "billion", "trillion"];

    if (number === 0) {
        return "zero";
    } else if (number < 20) {
        return digits[number];
    }

    const inputArray = number.toString().split("").reverse();

    const resultArray = inputArray.reduce((acc, cur, i, arr) => {
        if (i % 3 === 0) {
            acc.unshift((digits[+cur] + " " + thousands[i / 3]).trim());
        } else if (i % 3 === 1) {
            if (cur === "1") {
                acc.splice(0, 1, digits[cur + arr[i - 1]]);
            } else {
                acc.unshift(tens[+cur]);
            }
        } else if (i % 3 === 2) {
            acc.unshift(digits[+cur] + " hundred");
        }
        return acc;
    }, []);

    return resultArray
        .filter((el) => el !== "")
        .join(" ")
        .trim();
};
