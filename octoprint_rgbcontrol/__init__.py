# coding=utf-8
from __future__ import absolute_import
import octoprint.plugin
import octoprint.settings

class RGBControlPlugin(octoprint.plugin.StartupPlugin,
                      octoprint.plugin.TemplatePlugin,
                      octoprint.plugin.SettingsPlugin,
                      octoprint.plugin.AssetPlugin):

    def get_assets(self):
        return dict(
            js=["js/jscolor/jscolor.js","js/rgbcontrol.js"],
            css=["css/rgbcontrol.css","css/iris.css"]
        )

    def get_template_configs(self):
        return [
            dict(type="generic", template="rgbcontrol.jinja2", custom_bindings=True)
        ]

    ##~~ Softwareupdate hook
    def get_version(self):
        return self._plugin_version

    def get_update_information(self):
        return dict(
            multicam=dict(
                displayName="RGBControl",
                displayVersion=self._plugin_version,

                # version check: github repository
                type="github_release",
                user="mikedmor",
                repo="OctoPrint_RGBControl",
                current=self._plugin_version,

                # update method: pip
                pip="https://github.com/mikedmor/OctoPrint_RGBControl/archive/{target_version}.zip"
            )
        )

__plugin_name__ = "RGBControl"

def __plugin_load__():
    global __plugin_implementation__
    __plugin_implementation__ = RGBControlPlugin()

    global __plugin_hooks__
    __plugin_hooks__ = {
        "octoprint.plugin.softwareupdate.check_config": __plugin_implementation__.get_update_information
    }

