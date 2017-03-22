/**
 * Created by xobtah on 16/03/17.
 */

function createAndOpenFile() {
    var xmltext = "<?xml version='1.0'?>\r\n"
        + "<tps_recup>" + $("#tps_recup").val() + "</tps_recup>\r\n"
        + "<tps_effort>" + $("#tps_effort").val() + "</tps_effort>\r\n"
        + "<nb_cycle>" + $("#nb_cycle").val() + "</nb_cycle>\r\n"
        + "<tps_total></tps_total>";
    var pom = document.createElement('a');

    var filename = "file.xml";
    var pom = document.createElement('a');
    var bb = new Blob([xmltext], {type: 'text/plain'});

    pom.setAttribute('href', window.URL.createObjectURL(bb));
    pom.setAttribute('download', filename);

    pom.dataset.downloadurl = ['text/plain', pom.download, pom.href].join(':');
    pom.draggable = true;
    pom.classList.add('dragout');

    pom.click();
    $http({
        method: 'POST',
        url: '/'
    }).then(function (res) {
        console.log('Success');
    });
}