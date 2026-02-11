from selenium import webdriver
from selenium.webdriver.common.by import By
import time
driver = webdriver.Chrome()
driver.get("https://the-internet.herokuapp.com/add_remove_elements/")

driver.find_element(By.XPATH, "//button[text()='Add Element']").click()
time.sleep(5)
driver.quit()

