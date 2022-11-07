onload = async () => {
    let params = window.location.href.split('?')[1]
    const urlParameters = new URLSearchParams(window.location.search);
    const parentId = urlParameters.get('parentId')
    const parentName = urlParameters.get('parentName')
    let response =  await fetch("https://api.quran.com/api/v4/chapters/"+parentId+"/info?language=en", {
        method: "GET",
    })
    if(response.ok)
    {
        //as we know only one parameter name is sent....
        const responseData = await response.json();
        const chapteInfo = responseData.chapter_info;
        console.log(chapteInfo)
        const table = document.getElementById('tblDetail');

        //header row
        var tableRows = "<tr>";
        tableRows += "<th>Name</th>";
        tableRows += "<th>Language</th>";
        tableRows += "<th>Surah Detail</th>";
        tableRows += "<th>Source</th>";
        tableRows += "/<tr>";

        //detail row
        tableRows += "<tr>";
        tableRows += "<td>"+parentName+"</td>"
        tableRows += "<td>"+chapteInfo.language_name+"</td>";
        tableRows += "<td>"+chapteInfo.short_text+"</td>";
        tableRows += "<td>"+chapteInfo.source+"</td>";
        tableRows += "/<tr>";

        table.innerHTML = tableRows;
    }
}