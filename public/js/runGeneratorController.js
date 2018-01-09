/**
 * Created by xobtah on 16/03/17.
 */

eipCoatch.controller('RunGenerator', ['$scope', '$http', ($scope, $http) => {

    let Plan = function (id) {
        this._id = id;
        this.recup_time = 0;
        this.effort_time = 0;
        this.cycle_time = 0;
    };

    $scope.plannings = [new Plan(0)];

    $scope.NewPlayer = _ => {
        $scope.plannings.push(new Plan($scope.plannings.length));
    };

    $scope.CreateAndOpenFile = _ => {
        this.SubmitButtonClick();
        let filename = "file.xml";
        let xmltext = "<?xml version='1.0'?>\r\n";
        $scope.plannings.forEach(e => {
            xmltext += "<tps_recup>" + e.recup_time+ "</tps_recup>\r\n"
                + "<tps_effort>" + e.effort_time + "</tps_effort>\r\n"
                + "<nb_cycle>" + e.cycle_time+ "</nb_cycle>\r\n";
        });
        xmltext += "<tps_total></tps_total>";
        let pom = document.createElement('a');
        let bb = new Blob([xmltext], { type: 'text/plain' });
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
            data: 'test',
            headers: { 'Content-Type': undefined }
        }).then(res => {
            console.log(res);
            this.SubmitButtonValidate();
        }, res => {
            console.log(res);
            this.SubmitButtonError();
        });
    };

    this.SubmitButtonClick = _ => {
        $(".submitButton").addClass("onclic");
    };

    this.SubmitButtonValidate = _ => {
        $(".submitButton").removeClass("onclic");
        $(".submitButton").addClass("validate");
        setTimeout(this.SubmitButtonCallback, 1500);
    };

    this.SubmitButtonError = _ => {
        $(".submitButton").removeClass("onclic");
        $(".submitButton").addClass("error");
        setTimeout(this.SubmitButtonCallback, 1500);
    };

    this.SubmitButtonCallback = _ => {
        $(".submitButton").removeClass("validate");
        $(".submitButton").removeClass("error");
    };

}]);