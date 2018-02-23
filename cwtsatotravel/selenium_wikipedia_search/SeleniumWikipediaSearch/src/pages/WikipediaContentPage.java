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
}
