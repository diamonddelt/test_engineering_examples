package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class WikipediaContentPage {
    protected WebDriver driver;
    protected WebDriverWait wait;

    private By contentPageTable = By.xpath("//table[@class='infobox vevent']");
    private By imageOverlayCloseButton = By.xpath("//button[@original-title='Close this tool (Esc)']");
    private By tableOfContents = By.id("toc");
    private By pageTitle = By.id("firstHeading");


    public WikipediaContentPage(WebDriver driver, WebDriverWait wait) {
        this.driver = driver;
        this.wait = wait;
    }

    public void open(String url) {
        driver.get(url);
    }

    public void clickContentPageImageByAltText(String imageAltText) {
        driver.findElement(contentPageTable).findElement(By.xpath("//img[@alt='" + imageAltText + "']")).click();
    }

    public void closeContentPageImageOverlay() {
        // wait until the URL refers to an image file to ensure the overlay is displayed
        wait.until(ExpectedConditions.urlContains("File:"));
        driver.findElement(imageOverlayCloseButton).click();
    }

    public void toggleTableOfContents(Boolean visible) {
        driver.findElement(tableOfContents).findElement(By.className("togglelink")).click();

        if (visible) {
            wait.until(ExpectedConditions.textToBe(By.xpath("//a[@class='togglelink']"), "show")); // verify that this hides it
        } else {
            wait.until(ExpectedConditions.textToBe(By.xpath("//a[@class='togglelink']"), "hide")); // verify that this shows it
        }
    }

    public void verifyTableOfContentsContainsLinkByLinkText(String linkText) {
        try {
            driver.findElement(tableOfContents).findElement(By.xpath("//a[@href='#" + linkText + "']"));
            System.out.println("PASS: The table of contents contains the following link: " + linkText);
        }
        catch (Exception e) {
            System.out.println("FAIL: The table of contents does not contains the following link: " + linkText);
        }
    }

    public void clickContextualLinkByLinkText(String linkText) {
        driver.findElement(By.linkText(linkText)).click();
    }

    public String getContentPageTitle() {
        return driver.findElement(pageTitle).getText();
    }
}
