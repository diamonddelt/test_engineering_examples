describe('SauceLabs Platform Configurator Test', function() {
    it('should select the Selenium API button', function() {
      browser.get('https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/');
      element(by.xpath('//div[contains(text(), "Selenium")]')).click();
    });

    it('should select the PC device from the dropdown', function() {
        element(by.xpath('//spc-select[@select-value="Select a device"]')).click();
        element(by.xpath('//span[@class="el-icon pc"]/..')).click();
        // browser.pause();
    });

    it('should select the Windows 10 OS from the dropdown', function() {
        element(by.xpath('//spc-select[@type="systems"]')).click();
        element(by.xpath('//span[contains(text(), " Windows 10 ")]/..')).click();
        // browser.pause();
    });

    it('should select IE11.0 from the dropdown', function() {
        element(by.xpath('//spc-select[@type="browsers"]')).click();
        element(by.xpath('//a[@href="#ie"]')).click();
        element(by.xpath('//span[contains(text(), "11.103")]')).click();
        // browser.pause();
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
        browser.pause();
    });

    it('should verify the java "COPY CODE" is expected output', function() {
        // how do I do this? lol
        // element(by.id('box1')).click(); // uncheck it
        // verify it is unchecked here
        // verify capture screenshot is selected here
        // element(by.xpath('//spc-select[@type="resolutions"]')).click();
        // element(by.xpath('//span[contains(text(), " 1280x800 ")]')).click();
        browser.pause();
    });

          // element(by.model('second')).sendKeys(2);
  
      // element(by.id('gobutton')).click();
  
      // expect(element(by.binding('latest')).getText()).
      //    toEqual('5'); // This is wrong!
  });