$(function() {
    function RGBControlViewModel(parameters) {
        var self = this;

        self.onAfterBinding = function() {
            var RGBControl = $('#RGBControl');
            var container = $('#control-jog-general')

            RGBControl.insertAfter(container);
            RGBControl.css('display', '');
        };

    }

    OCTOPRINT_VIEWMODELS.push([
        RGBControlViewModel,
        ["controlViewModel"],
        ["#RGBControl"]
    ]);
});
