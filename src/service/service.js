function SampleService($http) {
    this.$http = $http;
};

SampleService.prototype.getHoge = function () {
    return "hoge";
};

SampleService.prototype.getColorJson = function (callback) {
    this.$http(
        {
            method: "GET",
            url: "src/colors.json"
        }
    )
        .success(callback)
        .error(callback)
};

SampleService.prototype.postColor = function (data, callback) {
    this.$http(
        {
            method: "POST",
            url: "api/hogehoge",
            data: data,
            headers: {"Content-Type": "application/x-www-form-urlencoded"}
        }
    )
        .success(callback)
        .error(callback)

    console.log("this_is_sending_data = " + data);
};

SampleService.prototype.postFile = function(data,callback){
    this.$http({
        method:"POST",
        url:"api/file",
        data:data,
        headers:{"Content-Type":"multipart/form-data"}
    })
        .success(callback)
        .error(callback)
}