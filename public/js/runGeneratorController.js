/**
 * Created by xobtah on 16/03/17.
 */

eipCoatch.controller('RunGenerator', ['$scope', '$http', ($scope, $http) => {

    $scope.plannings = [{
        _id: 0,
        recup_time: 0,
        effort_time: 0,
        cycle_time: 0
    }];

    this.NewPlayer = function () {
        $scope.plannings.push({
            _id: $scope.plannings.length,
            recup_time: 0,
            effort_time: 0,
            cycle_time: 0
        });
    };

    $scope.CreateAndOpenFile = function () {
        let filename = "file.xml";
        let xmltext = "<?xml version='1.0'?>\r\n";
        $scope.plannings.forEach(e => {
            xmltext += "<tps_recup>" + e.recup_time+ "</tps_recup>\r\n"
                + "<tps_effort>" + e.effort_time + "</tps_effort>\r\n"
                + "<nb_cycle>" + e.cycle_time+ "</nb_cycle>\r\n";
        });
        xmltext += "<tps_total></tps_total>";
        let pom = document.createElement('a');
        let bb = new Blob([xmltext], {type: 'text/plain'});
        let fd = new FormData();
        let file = new File([bb], filename);

        fd.append(filename, file);
        pom.setAttribute('href', window.URL.createObjectURL(bb));
        pom.setAttribute('download', filename);
        pom.dataset.downloadurl = ['text/plain', pom.download, pom.href].join(':');
        pom.draggable = true;
        pom.classList.add('dragout');

        // Uncomment to be able to download the files
        //pom.click();

        $http({
            method: 'POST',
            url: '/api/file',
            data: fd,
            headers: { 'Content-Type': undefined }
        }).then(res => {
            console.log(res);
        }, res => {
            console.log(res)
        });
    };

}]);