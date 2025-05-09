function isSameType(a, b) {
	const numA = !isNaN(a) && a.trim() !== '' ? Number(a) : a;
    const numB = !isNaN(b) && b.trim() !== '' ? Number(b) : b;
    
    // Compare types
    return typeof numA === typeof numB;

}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
