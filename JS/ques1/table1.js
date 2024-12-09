const data = [
        { region: 'US', model: 'A', sales: 150 },
        { region: 'US', model: 'B', sales: 120 },
        { region: 'US', model: 'C', sales: 350 },
        { region: 'EU', model: 'A', sales: 200 },
        { region: 'EU', model: 'B', sales: 100 },
        { region: 'EU', model: 'C', sales: 250 },
        { region: 'CA', model: 'A', sales: 200 },
        { region: 'CA', model: 'B', sales: 100 },
        { region: 'CA', model: 'C', sales: 230 },
        { region: 'CA', model: 'D', sales: 400 },
    ];

    const regionTotals = {};
    //foreach:  an array method used to iterate through each element of an array.
    data.forEach(({region, sales}) => {
        if(!regionTotals[region]){
            regionTotals[region] = 0;
        }
        regionTotals[region]+= sales;
    });

    const tableData = [...data];
    // Object.entries() is a method that converts an object into an array of [key, value] pairs.
    Object.entries(regionTotals).forEach(([region,total])=>{
        tableData.push({region, model:'Total', sales:total});
    });

    const table = document.getElementById('salesTable');

    tableData.forEach(({ region, model, sales }) => {
    const row = table.insertRow();
    row.insertCell(0).innerText = region;
    row.insertCell(1).innerText = model;
    row.insertCell(2).innerText = sales;
});
    console.table(tableData);
