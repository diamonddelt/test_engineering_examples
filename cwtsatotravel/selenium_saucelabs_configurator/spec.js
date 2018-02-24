let ConfiguratorPage = require('./pages/configuratorPage');

/*  
    Author: Ryan Rasti
    Description: Examining using ProtractorJS, Jasmine, and Javascript
    to test an AngularJS application using the PageObject pattern
*/
describe('SauceLabs Platform Configurator Test', function() {
    let configuratorPage = new ConfiguratorPage();

    it('should go to the Platform Configurator URL', function() {
        browser.get(configuratorPage.url);
    });

    it('should select the Selenium API button', function() {
        configuratorPage.seleniumButton.click();
    });

    it('should select the PC device from the dropdown', function() {
        configuratorPage.deviceDropdown.click();
        configuratorPage.deviceDropdownPCDevice.click();
    });

    it('should select the Windows 10 OS from the dropdown', function() {
        configuratorPage.operatingSystemsDropdown.click();
        configuratorPage.operatingSystemsDropdownWindows10OS.click();
    });

    it('should select IE11.103 from the dropdown', function() {
        configuratorPage.browserDropdown.click();
        configuratorPage.browserDropdownIESectionHeader.click();
        configuratorPage.selectSpecificieBrowserDropdownIESectionVersion("11.103");
    });

    it('should open the "Advanced Configuration" menu', function() {
        configuratorPage.toggleAdvancedConfigurationMenu();
    });

    it('should toggle options in the "Advanced Configuration" menu', function() {
        configuratorPage.toggleRecordVideoAdvancedConfiguration();
        expect(configuratorPage.recordVideoCheckbox.isSelected()).toBe(false); // verify it's unchecked
        expect(configuratorPage.captureScreenshotCheckbox.isSelected()).toBe(true); // verify it's checked
        configuratorPage.selectSpecificResolutionFromAdvancedConfigurationMenu("1280x800");
    });

    it('should verify the java "COPY CODE" is expected output', function() {
        let desiredCapabilitiesString = 'DesiredCapabilities caps = DesiredCapabilities.internetExplorer();';
        expect(configuratorPage.copyCodeOutput.getText()).toContain(desiredCapabilitiesString);

        let verificationArray = ['"platform"', '"Windows 10"', '"version"', '"11.103"', '"recordVideo"', '"false"', '"screenResolution"', '"1280x800"'];
        expect(configuratorPage.copyCodeOutput.all(by.tagName('span')).getText()).toEqual(verificationArray);
    });
  });
  