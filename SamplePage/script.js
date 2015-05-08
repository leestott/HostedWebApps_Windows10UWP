window.onload = function () {
    var element = document.querySelector("#text");    var status = "Sorry about that :( No Windows Runtime here";
    if (typeof Windows !== "undefined") {
        if (Windows.Networking.Connectivity.NetworkInformation.getInternetConnectionProfile().getNetworkConnectivityLevel() ==
            Windows.Networking.Connectivity.NetworkConnectivityLevel.internetAccess) {
            status = "Happy days! You have access to internet and the Windows Runtime :)";
        }
    }

    element.innerHTML = status;
};