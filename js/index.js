onload = async () => {
    let response =  await fetch("https://api.quran.com/api/v4/chapters?language=en", {
        method: "GET",
    })
    if(response.ok)
    {
        let responseData = await response.json()
        var chapters = responseData.chapters;
        
        const table = document.getElementById('tblMain');
        var tableRows = "<tr>";
        tableRows += "<th style='width:10%'>Id</th>";
        tableRows += "<th>Revelation Place</th>";
        tableRows += "<th>Name</th>";
        tableRows += "<th>Detail View</th>"
        tableRows += "/<tr>";
        for (var i = 0; i <= chapters.length-1; i++) {
            tableRows += "<tr>";
            tableRows += "<td>"+chapters[i].id+"</td>";
            tableRows += "<td>"+chapters[i].revelation_place+"</td>";
            tableRows += "<td>"+chapters[i].name_simple+"</td>";
            tableRows += "<td><form action='../html/detail.html'> <input type = 'hidden' name='parentId' value = '"+chapters[i].id+"' /> <input type = 'hidden' name='parentName' value = '"+chapters[i].name_simple+"' /> <input type='submit' value = 'Detail'/> </form></td>"
            tableRows += "/<tr>";
        }
        table.innerHTML = tableRows;
        document.body.appendChild(table);
    }
}