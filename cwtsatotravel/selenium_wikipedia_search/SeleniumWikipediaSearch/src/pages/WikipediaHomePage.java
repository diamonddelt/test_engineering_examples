package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

public class WikipediaHomePage {
    protected WebDriver driver;

    private By searchBox = By.id("searchInput");

    public WikipediaHomePage(WebDriver driver) {
        this.driver = driver;
    }


    public void open(String url) {
        driver.get(url);
    }

    public void useSearchBox(String searchText) {
        // I know the best thing to test would be selecting from the dropdown; this will have to do for now
        driver.findElement(searchBox).sendKeys(searchText);
        driver.findElement(searchBox).sendKeys(Keys.ENTER);
    }
}
