$(function() {
    function RGBControlViewModel(parameters) {
        var self = this;

        self.loginViewModel = parameters[0];
        self.controlViewModel = parameters[1];
        self.terminalViewModel = parameters[2];

        self.userLoggedin = ko.observable(false);

        var RGBControl = $('#RGBControl');
        var container = $('#control');

        self.onAfterBinding = function() {
            container.append(RGBControl);
            if(self.userLoggedin()){
                RGBControl.css('display', '');
            }
        };

        self.onUserLoggedIn = function() {
            RGBControl.css('display', '');
            self.userLoggedin(true);
        }

        self.onUserLoggedOut = function() {
            RGBControl.css('display', 'none');
            self.userLoggedin(false);
        }

    }

    OCTOPRINT_VIEWMODELS.push([
        RGBControlViewModel,
        ["loginStateViewModel","controlViewModel","terminalViewModel"],
        ["#RGBControl"]
    ]);
});
