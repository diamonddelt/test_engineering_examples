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
        // browser.pause();
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
        let desiredCapabilitiesString = 'DesiredCapabilities caps = DesiredCapabilities.internetExplorer();';

        expect(codeBlock.getText()).toContain(desiredCapabilitiesString); // verifies the first string is present
        // expect(innerSpans.length == 8); // verify if all of the other configurations are present

        // verify the inner spans are correct before messy string construction
        let innerSpans = [];
        codeBlock.all(by.tagName('span')).then(function(items){
            expect(items.length).toBe(8); // verify the number of configurations are present

            // verify the configurations themselves are present
            expect(items[0].getText()).toBe('"platform"');
            expect(items[1].getText()).toBe('"Windows 10"');
            expect(items[2].getText()).toBe('"version"');
            expect(items[3].getText()).toBe('"11.103"');
            expect(items[4].getText()).toBe('"recordVideo"');
            expect(items[5].getText()).toBe('"false"');
            expect(items[6].getText()).toBe('"screenResolution"');
            expect(items[7].getText()).toBe('"1280x800"');
            
            // innerSpans = items.slice(0);
        });

        // begin messy string construction
        // Not sure of the best way to do this currently...
        // let platformCapabilitiesString = 'caps.setCapability("' + innerSpans[0] + '\", \"' + innerSpans[1] + '\");';
        
        // MAKE LOOK LIKE THIS: caps.setCapability("platform", "Windows 10");
    });
  });
  