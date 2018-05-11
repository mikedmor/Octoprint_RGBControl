$(function() {
    function RGBControlViewModel(parameters) {
        var self = this;

        var RGBControl = $('#RGBControl');
        var container = $('#control')

        self.onAfterBinding = function() {

            //RGBControl.insertAfter(container);
            container.append(RGBControl);
            if(visibleTest){
                RGBControl.css('display', '');
            }
        };

        self.onUserLoggedIn = function() {
            RGBControl.css('display', '');
        }

        self.onUserLoggedOut = function() {
            RGBControl.css('display', 'none');
        }

        self.visibleTest = function() {
            return self.loginState.isUser();
        }

    }

    OCTOPRINT_VIEWMODELS.push([
        RGBControlViewModel,
        ["loginStateViewModel","controlViewModel"],
        ["#RGBControl"]
    ]);
});
