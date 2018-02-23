package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class WikipediaSearchResultsPage {
    protected WebDriver driver;

    private By searchResultsBlock = By.id("mw-content-text");

    public WikipediaSearchResultsPage(WebDriver driver) {
        this.driver = driver;
    }

    public void clickSearchResultByLinkText(String linkText) {
        driver.findElement(searchResultsBlock).findElement(By.xpath("//a[@title='" + linkText + "']")).click();
    }
}
