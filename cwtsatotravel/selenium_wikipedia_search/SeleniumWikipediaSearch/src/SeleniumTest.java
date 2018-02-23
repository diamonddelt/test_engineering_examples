import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.WikipediaContentPage;
import pages.WikipediaHomePage;
import pages.WikipediaSearchResultsPage;

/*
    Author: Ryan Rasti
    Notes: Currently refactoring to POP
 */
public class SeleniumTest {
    public static void main(String[] args) {
        ChromeDriver driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, 10);

        WikipediaHomePage wikipediaHomePage = new WikipediaHomePage(driver);
        wikipediaHomePage.open("http://www.wikipedia.org");
        wikipediaHomePage.useSearchBox("Selenium Software");

        WikipediaSearchResultsPage wikipediaSearchResultsPage = new WikipediaSearchResultsPage(driver);
        wikipediaSearchResultsPage.clickSearchResultByLinkText("Selenium (software)");

        WikipediaContentPage wikipediaContentPage = new WikipediaContentPage(driver, wait);
        wikipediaContentPage.clickContentPageImageByAltText("Seleniumlogo.png");
        wikipediaContentPage.closeContentPageImageOverlay();

        /* ABOVE: Refactoring to use PageObject Pattern */

        // hide/show contents of page
        WebElement contentToggleLink = driver.findElement(By.id("toc")).findElement(By.className("togglelink"));

        contentToggleLink.click();
        wait.until(ExpectedConditions.textToBe(By.xpath("//a[@class='togglelink']"), "show")); // verify that this hides it

        driver.findElement(By.xpath("//a[@class='togglelink']")).click();
        // contentToggleLink.click();
        // wait.until(ExpectedConditions.textToBe(By.xpath("//a[@class='togglelink']"), "hide")); // verify that this shows it

        // refactor this block to a separate 'verify' method
        WebElement contentsBox = driver.findElement(By.id("toc"));
        try
        {
            contentsBox.findElement(By.xpath("//a[@href='#History']"));
            contentsBox.findElement(By.xpath("//a[@href='#Selenium_IDE']"));
            contentsBox.findElement(By.xpath("//a[@href='#References']"));
        }
        catch (Exception e) {
            System.out.println("One of the anchor links in the Table of Contents is not present!");
            // e.printStackTrace();
        }

        driver.findElement(By.linkText("open-source software")).click();
        wait.until(ExpectedConditions.textToBe(By.id("firstHeading"), "Open-source software"));

        String pageTitleMessage = "The title of the current page is: " + driver.findElement(By.id("firstHeading")).getText();
        System.out.println(pageTitleMessage);

        driver.quit();
    }
}
