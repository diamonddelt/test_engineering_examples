let ConfiguratorPage = function() {
    this.url = 'https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/';

    /* Page Elements */
    this.seleniumButton = element(by.xpath('//div[contains(text(), "Selenium")]'));
    this.deviceDropdown = element(by.xpath('//spc-select[@select-value="Select a device"]'));
    this.deviceDropdownPCDevice = element(by.xpath('//span[@class="el-icon pc"]/..'));
    this.operatingSystemsDropdown = element(by.xpath('//spc-select[@type="systems"]'));
    this.operatingSystemsDropdownWindows10OS = element(by.xpath('//span[contains(text(), " Windows 10 ")]/..'));
    this.browserDropdown = element(by.xpath('//spc-select[@type="browsers"]'));
    this.browserDropdownIESectionHeader = element(by.xpath('//a[@href="#ie"]'));
    this.advancedConfigurationToggle = element(by.xpath('//spc-options-toggle[@ng-attr="showMe"]'));
    this.recordVideoCheckbox = element(by.id('box1'));
    this.captureScreenshotCheckbox = element(by.id('box2'));
    this.selectResolutionDropdown = element(by.xpath('//spc-select[@type="resolutions"]'));
    this.copyCodeOutput = element(by.xpath('//code[@class="hljs java"]'));

    /* Page Behaviors */
    this.selectSpecificieBrowserDropdownIESectionVersion = function(version) {
        element(by.xpath('//span[contains(text(), "' + version + '")]')).click();
    }

    this.toggleAdvancedConfigurationMenu = function() {
        this.advancedConfigurationToggle.element(by.tagName('h4')).click();
    }

    this.toggleRecordVideoAdvancedConfiguration = function() {
        this.recordVideoCheckbox.click();
    }

    this.toggleCaptureScreenshotAdvancedConfiguration = function() {
        this.captureScreenshotCheckbox.click();
    }

    this.selectSpecificResolutionFromAdvancedConfigurationMenu = function(resolution) {
        this.selectResolutionDropdown.click();
        element(by.xpath('//span[contains(text(), " ' + resolution + ' ")]')).click();
    }
}
module.exports = ConfiguratorPage;