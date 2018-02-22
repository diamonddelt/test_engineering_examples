import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

/*
    Author: Ryan Rasti
    Notes: Refactor this into a page object when time permits
 */
public class SeleniumTest {
    public static void main(String[] args) {
        ChromeDriver driver = new ChromeDriver();
        driver.get("http://www.wikipedia.org");
        WebElement searchBox = driver.findElement(By.id("searchInput"));
        String searchText = "Selenium Software";

        // I know the best thing to test would be selecting from the dropdown; this will have to do for now
        searchBox.sendKeys(searchText);
        searchBox.sendKeys(Keys.ENTER);

        WebElement searchResults = driver.findElement(By.id("mw-content-text"));
        searchResults.findElement(By.xpath("//a[@title='Selenium (software)']")).click();

        WebElement seleniumImage = driver.findElement((By.xpath("//img[@alt='Seleniumlogo.png']")));
        seleniumImage.click();

        // wait until the "close" is present to ensure the overlay is displayed
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[@original-title='Close this tool (Esc)']")));

        driver.findElement(By.xpath("//button[@original-title='Close this tool (Esc)']")).click();

        // hide/show contents of page
        WebElement contentToggleLink = driver.findElement(By.id("toc")).findElement(By.className("togglelink"));

        contentToggleLink.click();
        wait.until(ExpectedConditions.textToBe(By.xpath("//a[@class='togglelink']"), "show")); // verify that this hides it

        driver.findElement(By.xpath("//a[@class='togglelink']")).click();
        // contentToggleLink.click();
        // wait.until(ExpectedConditions.textToBe(By.xpath("//a[@class='togglelink']"), "hide")); // verify that this shows it


    }
}