//Step 2: Create array of employees
let employees = [
    {name: "Bob", hourlyRate: 15, hoursWorked: 40},
    {name: "Robert", hourlyRate: 17, hoursWorked: 45},
    {name: "Bobby", hourlyRate: 16, hoursWorked: 35}
]

//Step 3: Write function that returns pay for up to 40 hours weekly
function calculateBasePay(rate,hours) {
    let baseHours;
    if (hours>40) {
        baseHours = 40;        
    } else {
        baseHours = hours;    
    }
    return baseHours * rate;
}

//Step 4: calculateOvertimePay
function calculateOvertimePay(rate,hours) {
    let OvertimePay;
    if (hours > 40) {
        OvertimePay = hours - 40;
    } else {
        OvertimePay = 0;        
    }
    return OvertimePay * rate * 1.5
}

//Step 5: calculateTaxes
function calculateTaxes(grossPay) {
    let taxAmount = grossPay * 0.15;
    return taxAmount
}

//Step 6: processPayroll
function processPayroll(employee) {
    let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    let OvertimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    let grossPay = basePay + OvertimePay
    let taxAmount = calculateTaxes(grossPay)
    let netPay = grossPay - taxAmount;

    return {
        name: employee.name,
        basePay: basePay,
        OvertimePay: OvertimePay,
        grossPay: grossPay,
        netPay: netPay
    };
}

//Step 7: Loop through employees
for (let employee of employees) {
    let payroll = processPayroll(employee);
    console.log(payroll);
}
