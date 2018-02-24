import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.WikipediaContentPage;
import pages.WikipediaHomePage;
import pages.WikipediaSearchResultsPage;

/*
    Author: Ryan Rasti
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

        // FIXME: There are intermittent failures after this point ... probably timing related
        // Reproducibility: 2/5 of my attempts
        // Need to diagnose

        wikipediaContentPage.toggleTableOfContents(true); // hides
        wikipediaContentPage.toggleTableOfContents(false); // shows

        wikipediaContentPage.verifyTableOfContentsContainsLinkByLinkText("History");
        wikipediaContentPage.verifyTableOfContentsContainsLinkByLinkText("Selenium_IDE");
        wikipediaContentPage.verifyTableOfContentsContainsLinkByLinkText("References");

        wikipediaContentPage.clickContextualLinkByLinkText("open-source software");
        wait.until(ExpectedConditions.textToBe(By.id("firstHeading"), "Open-source software"));

        System.out.println("The title of the current page is: " + wikipediaContentPage.getContentPageTitle());

        driver.quit();
    }
}
