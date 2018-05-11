$(function() {
    function RGBControlViewModel(parameters) {
        var self = this;

        self.onAfterBinding = function() {
            var RGBControl = $('#RGBControl');
            var container = $('#control')

            //RGBControl.insertAfter(container);
            container.append(RGBControl);
            RGBControl.css('display', '');
        };

    }

    OCTOPRINT_VIEWMODELS.push([
        RGBControlViewModel,
        ["controlViewModel"],
        ["#RGBControl"]
    ]);
});
