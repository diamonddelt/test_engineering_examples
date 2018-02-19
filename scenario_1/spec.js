// Author: Ryan Rasti

// NOTE: Refactor this later to abstract selectors into their own page/class object

describe('SauceLabs Platform Configurator Test', function() {
    it('should select the Selenium API button', function() {
      browser.get('https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/');
      element(by.xpath('//div[contains(text(), "Selenium")]')).click();
    });

    it('should select the PC device from the dropdown', function() {
        element(by.xpath('//spc-select[@select-value="Select a device"]')).click();
        element(by.xpath('//span[@class="el-icon pc"]/..')).click();
    });

    it('should select the Windows 10 OS from the dropdown', function() {
        element(by.xpath('//spc-select[@type="systems"]')).click();
        element(by.xpath('//span[contains(text(), " Windows 10 ")]/..')).click();
    });

    it('should select IE11.0 from the dropdown', function() {
        element(by.xpath('//spc-select[@type="browsers"]')).click();
        element(by.xpath('//a[@href="#ie"]')).click();
        element(by.xpath('//span[contains(text(), "11.103")]')).click();
    });

    it('should open the "Advanced Configuration" menu', function() {
        element(by.xpath('//h4[contains(text(), "Show Advanced Configuration")]')).click();
        // expected condition here
        browser.pause();
    });

    it('should toggle options in the "Advanced Configuration" menu', function() {
        element(by.id('box1')).click(); // uncheck it
        // verify it is unchecked here
        // verify capture screenshot is selected here
        element(by.xpath('//spc-select[@type="resolutions"]')).click();
        element(by.xpath('//span[contains(text(), " 1280x800 ")]')).click();
    });

    it('should verify the java "COPY CODE" is expected output', function() {
        let codeBlock = element(by.xpath('//code[@class="hljs java"]'));
        let desired_capabilities_string = 'DesiredCapabilities caps = DesiredCapabilities.internetExplorer();'


        expect(codeBlock.getText()).toContain(desired_capabilities_string); // this seems to work

        // how do I do this? lol
        browser.pause();
    });
      // expect(element(by.binding('latest')).getText()).
      //    toEqual('5'); // This is wrong!
  });
  